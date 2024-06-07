import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
import "./ProjectTeatcher.css";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



export default function TableTheme() {
    const products = [
        {
            name: "pepa",
            theme: "it",
            student: "honza",
            vytvoreni: "21.5.2023",
            vedouci: "jirka",
            popis: "hdjhsyjsjs",
            prirazeni: "25.4.1669",
            obor: "IT",
        },
        {
            name: "pepa",
            theme: "it",
            student: "honza",
            vytvoreni: "21.5.2023",
            vedouci: "jirka",
            popis: "hdjhsyjsjs",
            prirazeni: "25.4.1669",
            obor: "IT",
        }
    ]

    const lockTemplate = () => {
        return <Button severity="danger"   type="button"  icon="pi pi-times" loading={false} />;

    };
    const status = () => {
        return <Button severity="success"   type="button"  icon="pi pi-check" loading={false} />;
         
    };

    return (
        <>


<h1 className="reNadpis">Schválení projektu</h1><br />

<div>
        <DataTable value={products}  tableStyle={{ minWidth: '60rem' }}>
    <Column field="name" header="Name"></Column>
    <Column field="theme" header="Theme"></Column>
    <Column field="student" header="Student"></Column>
    <Column field="vytvoreni" header="Datum vytvoření"></Column>
    <Column field="vedouci" header="Vedoucí práce" ></Column>
    <Column field="popis" header="Popis práce" ></Column>
    <Column field="prirazeni" header="Datum přiřazení"></Column>
    <Column field="obor" header="Obor"></Column>
    <Column header="Schválit" body={status}>dd</Column>
    <Column header="Neschválit" body={lockTemplate} >dd</Column>
</DataTable> 
</div>

<div className="projectBack"><Link to= {"/"}><Button label="Go back" /></Link></div>
        </>
    )
}