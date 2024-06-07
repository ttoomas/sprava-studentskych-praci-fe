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


export default function TableTheme() {
    const userState = useSelector((state) => state.user)
    const [projects, setProjects] = useState([]);

    async function fetchProjects(){
        const result = await getProjects();
        const projects = result.data.projects;

        setProjects(projects);
    }

    useEffect(() => {
        fetchProjects();
    }, [])



    return <>
    {
        userState.user.isTeacher
            ? <ProjectTeatcher projects={projects} fetchProjects={fetchProjects} />
            : <ProjectsStudent projects={projects} fetchProjects={fetchProjects} />
    }

    <div className="info">
        <div className="user"><Link to= {"/createdproject"}><Button label="Vytvořit projekt" /></Link></div>
        <div className="user"><Link to= {"/users"}><Button label="Uživatelé" /></Link></div>
        <div className="user"><Link to= {"/"}><Button label="Odhlásit se" /></Link></div>
    </div>
    </>


}