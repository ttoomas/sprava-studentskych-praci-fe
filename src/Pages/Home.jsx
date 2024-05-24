import React, { useState } from 'react';
import { Chips } from 'primereact/chips'
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import "./Home.css";

        

export function HomePage() {
    const [value, setValue] = useState();

    return (
    <div>
        
        <>
            <h1 className='nadpis'>Správa studenských prací</h1>
            <div className='tlacitka'>
            <div className='registraceTlacitko'>< Link to={"/register"}>
            <Button label="Registrovat" />
            </Link></div>
            <div className='prihlasitTlacitko'><Link to={"/login"}>
            <Button label="Přihlásit se" />
            </Link></div>
            </div>
            <div><Link to={"/projects"}>
            <Button label="projekty" />
            </Link></div>
            <div><Link to={"/createdproject"}>
            <Button label="vytvoreni projektu" />
            </Link></div>
            <div><Link to={"/projectteatcher"}>
            <Button label="schvalení projektu" />
            </Link></div>
            <div><Link to={"/users"}>
            <Button label="user" />
            </Link></div>
            <div><Link to={"/updateproject"}>
            <Button label="upraveni projektu" />
            </Link></div>
        </> 
      </div>
)
}
