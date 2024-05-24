import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { ToggleButton } from "primereact/togglebutton";
import { Dialog } from 'primereact/dialog';
import "./TableTheme.css";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { addProject, getProjects } from "../../models/Project";
import { useSelector } from "react-redux";

export default function TableTheme() {
    const [projects, setProjects] = useState([]);
    const [infoVisible, setInfoVisible] = useState(false);
    const userState = useSelector((state) => state.user)


    async function fetchProjects(){
        const result = await getProjects();
        const projects = result.data.projects;

        setProjects(projects);

        // console.log(projects[0]);
    }

    useEffect(() => {
        fetchProjects();
    }, [])


    async function handleAddProject(projectId){
        setInfoVisible(true);
        
        await addProject({
            project_id: projectId
        })
        
        fetchProjects();
    }


    const addButton = (e) => {
        if(e.user) return (
            <Button
                severity="warning"
                type="button"
                label="Přiřazeno"
                icon="pi pi-check"
                loading={false}
            />
        )

        return (
            <Button
                severity="success"
                type="button"
                label="Přířadit"
                onClick={() => handleAddProject(e.project_id)}
            />
        );
    };
    const statusButton = (e) => {      
        if(e.user) return (
            <Button
                severity="success"
                type="button"
                label="Přiřazeno"
                icon="pi pi-check"
            />
        )
          
        return (
            <Button
                severity="info"
                type="button"
                label="Nepřiřazeno"
                icon="pi pi-times"
            />
        );
    };

    return (
        <>
            <h1 className="reNadpis">Výpis témat pro studenty</h1>
            <br />

            <div>
                <DataTable value={projects} tableStyle={{ minWidth: "60rem" }}>
                    <Column field="name" header="Name"></Column>
                    <Column field="theme" header="Theme"></Column>
                    <Column field="student" header="Student"></Column>
                    <Column field="created_at" header="Datum vytvoření"></Column>
                    <Column field="teacher" header="Vedoucí práce"></Column>
                    <Column field="description" header="Popis práce"></Column>
                    <Column field="prirazeni" header="Datum přiřazení"></Column>
                    <Column field="field" header="Obor"></Column>
                    <Column header="Status" body={statusButton} />
                    <Column header="Vzít projekt" body={addButton} />
                </DataTable>
            </div>


            <Dialog header="Header" visible={infoVisible} style={{ width: '50vw' }} onHide={() => setInfoVisible(false)}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </>
    );
}