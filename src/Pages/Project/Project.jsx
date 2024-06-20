import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
import "./TableTheme.css";
import { Fieldset } from 'primereact/fieldset';
import { getProjectById } from "../../models/Project";
import { formatDate } from "../../Helpers/DateFormat/DateFormat";


export default function TableTheme() {
    const { id } = useParams();
    const [project, setProject] = useState();
    
    async function getProject(){
        const projectData = await getProjectById(id);

        setProject(projectData.data.project);
    }

    useEffect(() => {
        getProject();
    }, [])
    
    
    
    return (
        <>


<h1 className="projNadpis">Podrobnosti projektu</h1><br />

<div>
        <Fieldset  legend="Name">{ project && project.name }</Fieldset><br />
        <Fieldset legend="Theme">{ project && project.theme }</Fieldset><br />
        <Fieldset legend="Student">{ project && project.user.name }</Fieldset><br />
        <Fieldset legend="Datum vytvoření">{ project ? formatDate(project.created_at) : "" }</Fieldset><br />
        <Fieldset legend="Vedoucí práce">{ project && project.teacher.name }</Fieldset><br />
        <Fieldset legend="Popis práce">{ project && project.description }</Fieldset><br />
        <Fieldset legend="Obor">{ project && project.field }</Fieldset><br /> 
        <Fieldset legend="Status">
            {
                project && project.confirm_status
                ? <Button
                    severity="success"
                    type="button"
                    label="Přiřazeno"
                /> : (project && !project.confirm_status && project.user ? <Button
                    severity="warning"
                    type="button"
                    label="Čeká na potvrzení"
                /> : <Button
                    severity="warning"
                    type="button"
                    label="Nepřiřazeno"
                />)
            }
        </Fieldset><br />   

</div>

<div className="projeBack"><Link to= {"/updateproject"}><Button label="Upravit projekt" /></Link></div>
<div className="projeBack"><Link to= {"/projects"}><Button label="Všechny projekty" /></Link></div>

        </>
    )
}