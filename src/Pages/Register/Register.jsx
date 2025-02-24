import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import "./Register.css";
import { createUser } from "../../models/User";

export default function UserCreateForm() {
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();
    const formDataKeys = ["name", "password", "class_name", "theme", "field"];

    const postForm = async () => {
        const allKeys = formDataKeys.every(key => key in formData && formData[key].toString().length > 0);

        if(!allKeys) return setInfo("Vyplňte všechna pole");
        else setInfo("");
        
        const user = await createUser(formData);

        if (user.status === 201) {
            redirectTo();
        } else {
            setInfo(user.msg);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePost = (e) => {
        e.preventDefault();
        postForm();
    };

    const redirectTo = () => {
        return navigate(`/projects`);
    };

    return (
        <>
            <div className="register">
                <h1 className="reNadpis">Správa studenských prací</h1>

                <form className="register__container" onSubmit={handlePost}>
                    <div className="reName">
                        <InputText
                            placeholder="Jméno"
                            name="name"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="rePassword">
                        <Password
                            placeholder="Heslo"
                            name="password"
                            onChange={(e) => handleChange(e)}
                            feedback={false}
                        />
                    </div>
                    <div className="reClass">
                        <InputText
                            placeholder="Třída"
                            name="class_name"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="reTheme">
                        <InputText
                            placeholder="Téma"
                            name="theme"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="reTheme">
                        <InputText
                            placeholder="Obor"
                            name="field"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>


                    <div className="register__btnContainer">
                        <Link to={"/"}>
                            <Button label="Zpět" type="button" />
                        </Link>

                        <Button label="Vytvořit uživatele" />
                    </div>

                    {info ? <h2>{info}</h2> : <></>}
                </form>
            </div>
        </>
    );
}
