import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import "./UserLogin.css";



export default function UserLogin() {
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const postForm = async () => {
        console.log(formData);
        const user = await Login(formData)
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
        return navigate(`/wizards/${id}`)
    }

    return (
        <>
        <h1 className="prNadpis">Přihlášení</h1><br />
        <form className="prihlaseni">
        <div className="prName"><InputText placeholder="Jméno" name="name" onChange={e => handleChange(e)}/></div><br />
        <div className="prPassword"><Password   placeholder="Heslo" name="password"onChange={e => handleChange(e)} feedback={false} tabIndex={1} /></div><br />
       
          
           
        <Button label="Přihlásit se" />
        
        </form>
        <div className="prBack"><Link to= {"/"}><Button label="Go back" /></Link></div>
        </>
    )
}