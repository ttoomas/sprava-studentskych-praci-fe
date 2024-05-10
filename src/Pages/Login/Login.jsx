import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import "./Login.css";

import { loginUser } from "../../models/User";



export default function UserLogin() {
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const postForm = async () => {
        const user = await loginUser(formData);
        if (user.status === 200) {
            redirectTo();
        } else {
            setInfo("Wrong email/password");
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
        return navigate(`/prace`)
    }

    return (
        <div className="container">
            <h1 className="loNadpis">Přihlášení</h1><br />

            {info && 
                <Message severity="error" text={info} />
            }
            
            <form className="prihlaseni" onSubmit={handlePost}>
                <div className="loName">
                    <InputText placeholder="Jméno" name="name" onChange={e => handleChange(e)}/>
                </div>
                <br />
                
                <div className="loPassword">
                    <Password  placeholder="Heslo" name="password"onChange={e => handleChange(e)} feedback={false} tabIndex={1} />
                </div>
                <br />

                <Button label="Přihlásit se" />
            </form>

            <div className="loBack">
                <Link to= {"/"}>
                    <Button label="Go back" />
                </Link>
            </div>
        </div>
    )
}