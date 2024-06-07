import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
import "./TableTheme.css";
import { Fieldset } from 'primereact/fieldset';


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
    

    return (
        <>


<h1 className="projNadpis">Podrobnosti projektu</h1><br />

<div value={products}>
        <Fieldset  legend="Name"></Fieldset><br />
        <Fieldset legend="Theme"></Fieldset><br />
        <Fieldset legend="Student"></Fieldset><br />
        <Fieldset legend="Datum vytvoření"></Fieldset><br />
        <Fieldset legend="Vedoucí práce"></Fieldset><br />
        <Fieldset legend="Popis práce"></Fieldset><br />
        <Fieldset legend="Datum přiřazení"></Fieldset><br />
        <Fieldset legend="Obor"></Fieldset><br /> 
        <Fieldset legend="Status"><ToggleButton type="button" className="p-button-sm p-button-text" onLabel="Přiřazeno" offLabel="Nepřiřazeno" onIcon="pi pi-check" offIcon="pi pi-times" /></Fieldset><br />   

</div>

<div className="projeBack"><Link to= {"/projects"}><Button label="Všechny projekty" /></Link></div>

        </>
    )
}