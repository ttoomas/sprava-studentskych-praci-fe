import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
import "./TableTheme2.css";
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
        return <Button severity="success"   type="button" label="Přířadit" icon="pi pi-check" loading={false} />;

    };
    const status = () => {
        return <ToggleButton type="button" className="p-button-sm p-button-text" onLabel="Přiřazeno" offLabel="Nepřiřazeno" onIcon="pi pi-check" offIcon="pi pi-times" 
         />;
    };
    const preview = () => {
        return <div className="preview"><Link to= {"/project"}><Button label="Náhled" /></Link></div>
    };
    

    return (
        <>


<h1 className="reNadpis">Výpis témat pro studenty</h1><br />

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
    <Column header="Status" body={status}>dd</Column>
    <Column header="Vzít projekt" body={lockTemplate} >dd</Column>
    <Column header="" body={preview}>dd</Column>
   
</DataTable> 
</div>

<div className="user"><Link to= {"/createdproject"}><Button label="Vytvořit projekt" /></Link></div>
<div className="user"><Link to= {"/users"}><Button label="Uživatelé" /></Link></div>
<div className="user"><Link to= {"/"}><Button label="Odhlásit se" /></Link></div>

        </>
    )
}