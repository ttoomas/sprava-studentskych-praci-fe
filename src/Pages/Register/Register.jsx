import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import "./Register.css";
import { createUser } from "../../models/User";



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
        return navigate(`/projects`);
    }

    return (
        <>
        <h1 className="reNadpis">Správa studenských prací</h1><br />

        <form className="registrace" onSubmit={handlePost}>
            <div className="reName"><InputText placeholder="Jméno" name="name" onChange={e => handleChange(e)}/></div><br />
            <div className="rePassword"><Password   placeholder="Heslo" name="password"onChange={e => handleChange(e)} feedback={false} tabIndex={1} /></div><br />
            <div className="reClass"><InputText placeholder="Třída" name="class_name" onChange={e => handleChange(e)}/></div><br />
            <div className="reTheme"><InputText placeholder="Téma" name="theme" onChange={e => handleChange(e)}/></div><br />
            <div className="reTheme"><InputText placeholder="Obor" name="field" onChange={e => handleChange(e)}/></div><br />
          
           
            <Button label="Vytvořit uživatele" />
        
        </form>

        <div className="reBack"><Link to= {"/"}><Button label="Zpět" /></Link></div>
        </>
    )
}