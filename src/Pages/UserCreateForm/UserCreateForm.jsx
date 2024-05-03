import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createUser } from "../../models/User";
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import "./UserCreateForm.css";



export default function UserCreateForm() {
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const postForm = async () => {
        console.log(formData);
        const user = await createUser(formData)
        if (user.status === 201) {
            redirectToSuccessPage(user.payload._id)
        } else {
            setInfo(user.msg)
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handlePost = (e) => {
        e.preventDefault()
        postForm();
    }

    const redirectToSuccessPage = (id) => {
        return navigate(`/createduser/${id}`)
    }

    return (
        <>
        <h1 className="reNadpis">Registrace</h1><br />
        <form className="registrace">
        <div className="reName"><InputText placeholder="Jméno" name="name" onChange={e => handleChange(e)}/></div><br />
        <div className="rePassword"><Password   placeholder="Heslo" name="password"onChange={e => handleChange(e)} feedback={false} tabIndex={1} /></div><br />
        <div className="reClass"><InputText placeholder="Třída" name="class_name" onChange={e => handleChange(e)}/></div><br />
        <div className="reRole"><SelectButton name="role" options={["Student", "Učitel"]} value={formData?.role||"Student"} onChange={e => handleChange(e)} /></div><br />
        <div className="reTheme"><InputText placeholder="Téma" name="theme" onChange={e => handleChange(e)}/></div><br />
        <div className="reTheme"><InputText placeholder="Obor" name="field" onChange={e => handleChange(e)}/></div><br />
         
          
           
        <Button label="Vytvořit uživatele" />
        
        </form>
        <div className="reBack"><Link to= {"/"}><Button label="Go back" /></Link></div>
        </>
    )
}