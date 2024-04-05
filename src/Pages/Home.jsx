import React, { useState } from 'react';
import { Chips } from 'primereact/chips'
import { Link } from "react-router-dom";

        

export function HomePage() {
    const [value, setValue] = useState();

    return (
      <div>
        
        <>
            <h1>registrace</h1>
            <Link to={"/registrace"}>
                <p>registrovat</p>
            </Link>
            <Link to={"/wizards"}>
                <p>přihlásit se</p>
            </Link>
        </>
      </div> 
)
}
