import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import "./Projects.css";

import { getProjects } from "../../models/Project";
import { useSelector } from "react-redux";

import ProjectsStudent from "../ProjectsStudent/ProjectsStudent";
import ProjectTeacher from "../ProjectTeacher/ProjectTeacher";
import { logoutUser } from "../../models/User";
import { useDispatch } from "react-redux";
import { logoutStateUser } from "../../Helpers/redux/slice";

export default function TableTheme() {
    const userState = useSelector((state) => state.user);
    const [projects, setProjects] = useState([]);
    const dispatch = useDispatch();

    async function fetchProjects() {
        const result = await getProjects();
        const projects = result.data.projects;

        setProjects(projects);
    }

    useEffect(() => {
        fetchProjects();
    }, []);

    async function handleLogout() {
        await logoutUser();

        dispatch(logoutStateUser());
    }

    return (
        <>
            <div className="projects">
                <div className="project__tableContainer">
                    {userState.user.isTeacher ? (
                        <ProjectTeacher
                            projects={projects}
                            fetchProjects={fetchProjects}
                        />
                    ) : (
                        <ProjectsStudent
                            projects={projects}
                            fetchProjects={fetchProjects}
                        />
                    )}
                </div>

                <div className="info">
                    {userState.user.isAdmin ? (
                        <div className="user">
                            <Link to={"/users"}>
                                <Button label="Uživatelé" />
                            </Link>
                        </div>
                    ) : null}
                    
                    {userState.user.isTeacher ? (
                        <>
                            <div className="user">
                                <Link to={"/projects/create"}>
                                    <Button label="Vytvořit projekt" />
                                </Link>
                            </div>
                        </>
                    ) : null}
                    <div className="user">
                        <Button label="Odhlásit se" onClick={handleLogout} />
                    </div>
                </div>
            </div>
        </>
    );
}
