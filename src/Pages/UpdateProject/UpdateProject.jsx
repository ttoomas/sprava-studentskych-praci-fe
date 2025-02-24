import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./UpdateProject.css";
import { Calendar } from "primereact/calendar";
import {
    deleteProject,
    getProjectById,
    updateProject,
} from "../../models/Project";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

export default function UserCreateForm() {
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();
    const { id } = useParams();
    const formDataKeys = ["name", "theme", "description", "year", "field"];

    const handleUpdateProject = async () => {
        const allKeys = formDataKeys.every(
            (key) => key in formData && formData[key].toString().length > 0
        );

        if (!allKeys) return setInfo("Vyplňte všechna pole");
        else setInfo("");

        await updateProject(formData, id);
        navigate("/projects");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePost = (e) => {
        e.preventDefault();
        handleUpdateProject();
    };

    // Load data
    async function fetchProject() {
        const projectData = await getProjectById(id);

        projectData.data.project["year"] = new Date(
            projectData.data.project["year"],
            0
        );

        setFormData(projectData.data.project);
    }

    useEffect(() => {
        fetchProject();
    }, []);

    // Delete popup
    function handleDeletePopup() {
        confirmDialog({
            message: "Chcete smazat tento projekt?",
            header: "Smazání projektu",
            icon: "pi pi-info-circle",
            defaultFocus: "reject",
            acceptClassName: "p-button-danger",
            acceptLabel: "Ano",
            rejectLabel: "Ne",
            accept: acceptDelete,
        });
    }

    async function acceptDelete() {
        await deleteProject(id);

        navigate("/projects");
    }

    return (
        <div className="updateProject">
            <h1 className="prNadpis">Úprava projektu</h1>
            <br />

            {formData ? (
                <form className="projekt" onSubmit={handlePost}>
                    <div className="prName">
                        <InputText
                            placeholder="Název"
                            name="name"
                            onChange={(e) => handleChange(e)}
                            defaultValue={formData["name"]}
                        />
                    </div>
                    <div className="prTheme">
                        <InputText
                            placeholder="Téma"
                            name="theme"
                            onChange={(e) => handleChange(e)}
                            defaultValue={formData["theme"]}
                        />
                    </div>
                    <div className="prPopis">
                        <InputText
                            placeholder="Popis práce"
                            name="description"
                            onChange={(e) => handleChange(e)}
                            defaultValue={formData["description"]}
                        />
                    </div>
                    <div className="prSkolniRok">
                        <Calendar
                            placeholder="Školní rok"
                            name="year"
                            onChange={(e) => handleChange(e)}
                            view="year"
                            dateFormat="yy"
                            value={formData["year"]}
                        />
                    </div>
                    <div className="prObor">
                        <InputText
                            placeholder="Obor"
                            name="field"
                            onChange={(e) => handleChange(e)}
                            defaultValue={formData["field"]}
                        />
                    </div>

                    {info ? <h3>{info}</h3> : <></>}

                    <div className="buttonContainer">
                        <div className="topButtonBx">
                            <Link to={"/projects"}>
                                <Button label="Zpět" type="button" />
                            </Link>

                            <Button label="Potvrdit" />
                        </div>

                        <Button
                            label="Smazat"
                            severity="danger"
                            onClick={handleDeletePopup}
                            type="button"
                            className="deleteButton"
                        />
                    </div>
                </form>
            ) : (
                <p>Načítání dat</p>
            )}

            <ConfirmDialog />
        </div>
    );
}
