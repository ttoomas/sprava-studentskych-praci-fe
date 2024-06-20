import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import "./ProjectsStudent.css";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { addProject } from "../../models/Project";
import DateTemplate from "../../Helpers/DateFormat/DateTemplate";

function ProjectsStudent({ projects, fetchProjects }) {
    const [infoVisible, setInfoVisible] = useState(false);

    async function handleAddProject(projectId) {
        setInfoVisible(true);

        await addProject({
            project_id: projectId,
        });

        fetchProjects();
    }

    const addButton = (e) => {
        if (e.user && e.confirm_status)
            return (
                <Button
                    severity="success"
                    type="button"
                    label="Přiřazeno"
                    icon="pi pi-check"
                    loading={false}
                />
            );
        else if (e.user)
            return (
                <Button
                    severity="warning"
                    type="button"
                    label="Potvrzení"
                    icon="pi pi-spinner"
                    loading={false}
                />
            );

        return (
            <Button
                severity="success"
                type="button"
                label="Přířadit"
                onClick={() => handleAddProject(e.project_id)}
            />
        );
    };

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

    const preview = (e) => {
        return (
            <div className="preview">
                <Link to={`/project/${e.project_id}`}>
                    <Button label="Náhled" />
                </Link>
            </div>
        );
    };

    return (
        <>
            <h1 className="reNadpis">Výpis témat pro studenty</h1>
            <br />

            <div className="projectTableContainer">
                <DataTable value={projects} tableStyle={{ minWidth: "60rem" }}>
                    <Column field="name" header="Name"></Column>
                    <Column field="theme" header="Theme"></Column>
                    <Column field="user.name" header="Student"></Column>
                    <Column
                        field="created_at"
                        header="Datum Vytvoření"
                        body={DateTemplate}
                    ></Column>
                    <Column
                        field="teacher.name"
                        header="Vedoucí práce"
                    ></Column>
                    <Column field="description" header="Popis práce"></Column>
                    <Column field="field" header="Obor"></Column>
                    <Column header="Status" body={statusButton} />
                    <Column header="Vzít projekt" body={addButton} />
                    <Column header="Náhled" body={preview}></Column>
                </DataTable>
            </div>

            <Dialog
                header="Zarezerováno"
                visible={infoVisible}
                style={{ width: "50vw" }}
                onHide={() => setInfoVisible(false)}
            >
                <p className="m-0">
                    Projekt byl zarezervován. Učitel nyní projekt
                    přijme/nepřijme
                </p>
            </Dialog>
        </>
    );
}

export default ProjectsStudent;
