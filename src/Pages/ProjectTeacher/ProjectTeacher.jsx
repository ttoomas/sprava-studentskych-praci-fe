import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import "./ProjectTeacher.css";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSelector } from "react-redux";
import { confirmProject, declineProject } from "../../models/Project";
import React from "react";
import DateTemplate from "../../Helpers/DateFormat/DateTemplate";

export default function ProjectTeatcher({ projects, fetchProjects }) {
    const userState = useSelector((state) => state.user);

    // Decline
    const handleDeclineProject = async (projectId) => {
        await declineProject({
            project_id: projectId,
        });

        fetchProjects();
    };

    // Accept
    const handleAcceptProject = async (projectId) => {
        await confirmProject({
            project_id: projectId,
        });

        fetchProjects();
    };

    // Component
    const CombinedAceptDeclinedComponent = (e) => {
        if (
            !e.user ||
            userState.user.uniqueId !== e.teacher.id ||
            e.confirm_status
        )
            return;

        return (
            <>
                <Button
                    severity="success"
                    type="button"
                    icon="pi pi-check"
                    loading={false}
                    onClick={() => handleAcceptProject(e.project_id)}
                />

                <Button
                    severity="danger"
                    type="button"
                    icon="pi pi-times"
                    loading={false}
                    onClick={() => handleDeclineProject(e.project_id)}
                />
            </>
        );
    };

    // Other
    const statusButton = (e) => {
        if (e.user && e.confirm_status)
            return (
                <Button
                    severity="success"
                    type="button"
                    label="Přiřazeno"
                    icon="pi pi-check"
                />
            );

        return (
            <Button
                severity="info"
                type="button"
                label="Nepřiřazeno"
                icon="pi pi-times"
            />
        );
    };

    const update = (e) => {
        if (userState.user.uniqueId !== e.teacher.id) return;

        return (
            <div className="update">
                <Link to={`/project/update/${e.project_id}`}>
                    <Button label="Upravit" />
                </Link>
            </div>
        );
    };

    return (
        <>
            <h1 className="reNadpis">Schválení projektu</h1>
            <br />

            <div className="projectTableContainer">
                <DataTable value={projects} tableStyle={{ minWidth: "60rem" }}>
                    <Column field="name" header="Name"></Column>
                    <Column field="theme" header="Theme"></Column>
                    <Column field="user.name" header="Student"></Column>
                    <Column
                        field="created_at"
                        header="Datum vytvoření"
                        body={DateTemplate}
                    ></Column>
                    <Column
                        field="teacher.name"
                        header="Vedoucí práce"
                    ></Column>
                    <Column field="description" header="Popis práce"></Column>
                    <Column field="field" header="Obor"></Column>
                    <Column header="Status" body={statusButton} />
                    <Column
                        header="(Ne)Přijmout projekt"
                        body={CombinedAceptDeclinedComponent}
                    />
                    <Column header="Upravit" body={update}></Column>
                </DataTable>
            </div>
        </>
    );
}
