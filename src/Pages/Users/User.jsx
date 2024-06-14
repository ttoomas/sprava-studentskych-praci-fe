import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import "./User.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SelectButton } from 'primereact/selectbutton';



export default function TableTheme() {
    const products = [
        {
            name: "pepa",
            email: "it@studemt.cz",
            user: "honza",
            
        },
        {
            name: "pepa",
            email: "it@student.cz",
            user: "honza",
        }
    ]

    const options = ['Učitel', 'Student'];
    const user = () => {
        
        const [value, setValue] = useState(options[0]);
        return <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
        
         
    };

    return (
        <>


<h1 className="reNadpis">Uživatelé</h1><br />

<div>
        <DataTable value={products}  tableStyle={{ minWidth: '60rem' }}>
    <Column field="name" header="Name"></Column>
    <Column field="email" header="Email"></Column>
    <Column header="Uživatel" body={user}>dd</Column>

</DataTable> 
</div>

<div className="userBack"><Link to= {"/"}><Button label="Zpět" /></Link></div>
        </>
    )
}