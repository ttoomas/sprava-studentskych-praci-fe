import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
import "./ProjectTeatcher.css";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from "react-redux";
import { confirmProject, declineProject } from "../../models/Project";
import React from "react";



export default function ProjectTeatcher({ projects, fetchProjects }) {
    const userState = useSelector((state) => state.user)
    
    // Dont accept
    const declineProjectComponent = (e) => {
        if(!e.user || userState.user.uniqueId !== e.teacher.id || e.confirm_status) return;
        
        return <Button severity="danger"   type="button"  icon="pi pi-times" loading={false} onClick={() => handleDeclineProject(e.project_id)} />;
    };

    const handleDeclineProject = async (projectId) => {
        await declineProject({
            project_id: projectId
        })

        fetchProjects();
    }
    

    // Accept
    const acceptProjectComponent = (e) => {
        if(!e.user || userState.user.uniqueId !== e.teacher.id || e.confirm_status) return;

        return <Button severity="success"   type="button"  icon="pi pi-check" loading={false} onClick={() => handleAcceptProject(e.project_id)} />;
    };

    const handleAcceptProject = async (projectId) => {
        await confirmProject({
            project_id: projectId
        })

        fetchProjects();
    }

    const dateTemplate = (rowData) => {
        const date = new Date(rowData.created_at);
        const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        return (
            <React.Fragment>
                {formattedDate}
            </React.Fragment>
        );
    };

    // Return
    return (
        <>


            <h1 className="reNadpis">Schválení projektu</h1><br />

            <div>
                <DataTable value={projects} tableStyle={{ minWidth: "60rem" }}>
                    <Column field="name" header="Name"></Column>
                    <Column field="theme" header="Theme"></Column>
                    <Column field="user.name" header="Student"></Column>
                    <Column field="created_at" header="Datum vytvoření" body={dateTemplate}></Column>
                    <Column field="teacher.name" header="Vedoucí práce"></Column>
                    <Column field="description" header="Popis práce"></Column>
                    <Column field="field" header="Obor"></Column>
                    <Column header="Status" body={declineProjectComponent} />
                    <Column header="Vzít projekt" body={acceptProjectComponent} />
                </DataTable>
            </div>

        <div className="taBack"><Link to= {"/"}><Button label="Go back" /></Link></div>
        </>
    )
}