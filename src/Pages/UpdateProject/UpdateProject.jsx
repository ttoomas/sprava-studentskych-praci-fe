import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import "./UpdateProject.css";
import { createUser } from "../../models/User";
import { Calendar } from 'primereact/calendar';



export default function UserCreateForm() {
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const postForm = async () => {
        const user = await createUser(formData);

        if (user.status === 201) {
            redirectTo();
        } else {
            setInfo(user.msg);
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handlePost = (e) => {
        e.preventDefault()
        postForm();
    }

    const redirectTo = () => {
        return navigate(`/projekty`)
    }

    return (
        <>
        <h1 className="prNadpis">Úprava projektu</h1><br />

        <form className="projekt" onSubmit={handlePost}>
            <div className="prName"><InputText placeholder="Název" name="name" onChange={e => handleChange(e)}/></div><br />
            <div className="prTheme"><InputText placeholder="Téma" name="theme" onChange={e => handleChange(e)}/></div><br />
            <div className="prStudent"><InputText placeholder="Jméno studenta" name="student" onChange={e => handleChange(e)}/></div><br />
            <div className="prDatumVytvoreni"><Calendar placeholder="Datum vytvoření" onChange={(e) => setDate(e.value)} /></div><br />
            <div className="prVedouciPrace"><InputText placeholder="Vedoucí práce" name="vedouci_prace" onChange={e => handleChange(e)}/></div><br />
            <div className="prPopis"><InputText placeholder="Popis práce" name="popis" onChange={e => handleChange(e)}/></div><br />
            <div className="prDatumPrirazeni"><Calendar placeholder="Datum přiřazení" onChange={(e) => setDate(e.value)} /></div><br />
            <div className="prSkolniRok"><Calendar placeholder="Školní rok" onChange={(e) => setDate(e.value)} view="year" dateFormat="yy" /></div><br />
            <div className="prObor"><InputText placeholder="Obor" name="obor" onChange={e => handleChange(e)}/></div><br />
            <Button label="Vytvořit" />
        
        </form>

        <div className="prBack"><Link to= {"/"}><Button label="Go back" /></Link></div>
        <div className="prBack"><Link to= {"/"}><Button label="Delete" severity="danger" /></Link></div>
        </>
    )
}