import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
import "./ProjectTeatcher.css";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



export default function ProjectTeatcher({ projects, fetchProjects }) {

    const dontAccept = () => {
        return <Button severity="danger"   type="button"  icon="pi pi-times" loading={false} />;

    };
    const accept = () => {
        return <Button severity="success"   type="button"  icon="pi pi-check" loading={false} />;
         
    };

    return (
        <>


            <h1 className="reNadpis">Schválení projektu</h1><br />

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
                    <Column header="Status" body={dontAccept} />
                    <Column header="Vzít projekt" body={accept} />
                </DataTable>
            </div>

        <div className="taBack"><Link to= {"/"}><Button label="Go back" /></Link></div>
        </>
    )
}