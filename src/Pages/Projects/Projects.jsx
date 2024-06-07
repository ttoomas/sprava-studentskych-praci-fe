import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { ToggleButton } from "primereact/togglebutton";
import { Dialog } from 'primereact/dialog';
import "./TableTheme.css";
import "./Projects.css"

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { addProject, getProjects } from "../../models/Project";
import { useSelector } from "react-redux";

import ProjectsStudent from "../ProjectsStudent/ProjectsStudent";
import ProjectTeatcher from "../ProjectTeatcher/ProjectTeatcher";
import { logoutUser } from "../../models/User";
import { useDispatch } from "react-redux";
import { logoutStateUser } from "../../Helpers/redux/slice";


export default function TableTheme() {
    const userState = useSelector((state) => state.user)
    const [projects, setProjects] = useState([]);
    const dispatch = useDispatch();

    async function fetchProjects(){
        const result = await getProjects();
        const projects = result.data.projects;

        setProjects(projects);
    }

    useEffect(() => {
        fetchProjects();
    }, [])


    async function handleLogout(){
        await logoutUser();

        dispatch(logoutStateUser());
    };



    return <>
    {
        userState.user.isTeacher
            ? <ProjectTeatcher projects={projects} fetchProjects={fetchProjects} />
            : <ProjectsStudent projects={projects} fetchProjects={fetchProjects} />
    }

    <div className="info">
        {
            userState.user.isTeacher ? <>
                <div className="user"><Link to= {"/users"}><Button label="Uživatelé" /></Link></div>
                <div className="user"><Link to= {"/createdproject"}><Button label="Vytvořit projekt" /></Link></div>
            </> : null
        }
        <div className="user"><Button label="Odhlásit se" onClick={handleLogout} /></div>
    </div>
    </>


}