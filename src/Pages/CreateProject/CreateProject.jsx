import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./CreateProject.css";
import { Calendar } from "primereact/calendar";
import { createProject } from "../../models/Project";

export default function UserCreateForm() {
    const [formData, setFormData] = useState({});
    const [info, setInfo] = useState();
    const navigate = useNavigate();
    const formDataKeys = ["name", "theme", "description", "year", "field"];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    async function handleCreateProject() {
        const allKeys = formDataKeys.every(key => key in formData && formData[key].toString().length > 0);

        if(!allKeys) return setInfo("Vyplňte všechna pole");
        else setInfo("");
        
        await createProject(formData);
        navigate('/projects');
    }

    return (
        <div className="createProject">
            <h1 className="prNadpis">Vytvoření projektu</h1>
            <br />

            <div className="projekt">
                <div className="prName">
                    <InputText
                        placeholder="Název"
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="prTheme">
                    <InputText
                        placeholder="Téma"
                        name="theme"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="prPopis">
                    <InputText
                        placeholder="Popis práce"
                        name="description"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="prSkolniRok">
                    <Calendar
                        placeholder="Školní rok"
                        name="year"
                        onChange={(e) => handleChange(e)}
                        view="year"
                        dateFormat="yy"
                    />
                </div>
                <div className="prObor">
                    <InputText
                        placeholder="Obor"
                        name="field"
                        onChange={(e) => handleChange(e)}
                    />
                </div>


                {info ? <h3>{info}</h3> : <></>}
                
                <div className="createProject__btn">
                    <Link to={"/projects"}>
                        <Button label="Zpět" type="button" />
                    </Link>

                    <Button label="Vytvořit" onClick={handleCreateProject} />
                </div>
            </div>
        </div>
    );
}
