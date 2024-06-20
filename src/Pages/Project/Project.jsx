import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import "./Project.css";
import { Fieldset } from "primereact/fieldset";
import { getProjectById } from "../../models/Project";
import { formatDate } from "../../Helpers/DateFormat/DateFormat";

export default function TableTheme() {
    const { id } = useParams();
    const [project, setProject] = useState();

    async function getProject() {
        const projectData = await getProjectById(id);

        setProject(projectData.data.project);
    }

    useEffect(() => {
        getProject();
    }, []);

    return (
        <div className="project">
            <h1 className="projNadpis">Podrobnosti projektu</h1>
            <br />

            <div className="project__container">
                <Fieldset legend="Name">{project && project.name}</Fieldset>
                <Fieldset legend="Theme">{project && project.theme}</Fieldset>
                <Fieldset legend="Student">
                    {project && project.user.name}
                </Fieldset>
                <Fieldset legend="Datum vytvoření">
                    {project ? formatDate(project.created_at) : ""}
                </Fieldset>
                <Fieldset legend="Vedoucí práce">
                    {project && project.teacher.name}
                </Fieldset>
                <Fieldset legend="Popis práce">
                    {project && project.description}
                </Fieldset>
                <Fieldset legend="Obor">{project && project.field}</Fieldset>

                <Fieldset legend="Status">
                    {project && project.confirm_status ? (
                        <Button
                            severity="success"
                            type="button"
                            label="Přiřazeno"
                        />
                    ) : project && !project.confirm_status && project.user ? (
                        <Button
                            severity="warning"
                            type="button"
                            label="Čeká na potvrzení"
                        />
                    ) : (
                        <Button
                            severity="warning"
                            type="button"
                            label="Nepřiřazeno"
                        />
                    )}
                </Fieldset>
            </div>

            <div className="projeBack">
                <Link to={"/projects"}>
                    <Button label="Zpět" />
                </Link>
            </div>
        </div>
    );
}
