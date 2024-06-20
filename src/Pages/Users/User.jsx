import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import "./User.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { SelectButton } from "primereact/selectbutton";
import { getAllUsers } from "../../models/User";

export default function TableTheme() {
    const [users, setUsers] = useState([]);

    const options = ["Učitel", "Student"];
    const user = (e) => {
        const buttonValue = e.is_teacher ? "Učitel" : "Student";
        
        return (
            <SelectButton
                value={buttonValue}
                options={options}
            />
        );
    };

    const update = (e) => {
        return (
            <Link to={`/users/update/${e.unique_id}`}>
                <Button>Upravit</Button>
            </Link>
        )
    }

    // Fetch users
    async function fetchAllUsers() {
        const usersData = await getAllUsers();

        setUsers(usersData.data.users);
    }

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <>
            <h1 className="reNadpis">Uživatelé</h1>
            <br />

            <div>
                <DataTable value={users} tableStyle={{ minWidth: "60rem" }}>
                    <Column field="name" header="Jméno"></Column>
                    <Column field="class_name" header="Třída"></Column>
                    <Column field="theme" header="Téma"></Column>
                    <Column field="field" header="Obor"></Column>
                    <Column header="Uživatel" body={user}></Column>
                    <Column header="Upravit" body={update}></Column>
                </DataTable>
            </div>

            <div className="userBack">
                <Link to={"/projects"}>
                    <Button label="Zpět" />
                </Link>
            </div>
        </>
    );
}
