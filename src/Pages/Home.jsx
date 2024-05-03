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
            <div className='registraceTlacitko'>< Link to={"/registrace"}>
            <Button label="Registrovat" />
            </Link></div>
            <div className='prihlasitTlacitko'><Link to={"/wizards"}>
            <Button label="Přihlásit se" />
            </Link></div>
            </div>
        </>
      </div>
)
}
