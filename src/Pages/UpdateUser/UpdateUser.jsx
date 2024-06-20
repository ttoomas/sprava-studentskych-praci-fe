import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../../models/User";
import { Checkbox } from "primereact/checkbox";
import "./UpdateUser.css";

function UpdateUser() {
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();
    const { id } = useParams();
    const formDataKeys = ["name", "class_name", "theme", "field"];

    const postForm = async () => {
        const allKeys = formDataKeys.every(key => key in formData && formData[key].toString().length > 0);

        if(!allKeys) return setInfo("Vyplňte všechna pole");
        else setInfo("");

        await updateUser(formData, id)
        navigate(`/users`);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.checked ? true : false });
    };

    const handlePost = (e) => {
        e.preventDefault();
        postForm();
    };

    async function fetchUserData(){
        const userData = await getUserById(id);

        setFormData(userData.data.user);
    }

    useEffect(() => {
        fetchUserData();
    }, [])


    
    return (
        <div className="updateUser">
            <h1 className="prNadpis">Úprava uživatele</h1>
            <br />

            {formData ?
                <form className="updateUser__form" onSubmit={handlePost}>
                    <div className="reName">
                        <InputText
                            placeholder="Jméno"
                            name="name"
                            onChange={(e) => handleChange(e)}
                            defaultValue={formData["name"]}
                        />
                    </div>
                    <div className="reClass">
                        <InputText
                            placeholder="Třída"
                            name="class_name"
                            onChange={(e) => handleChange(e)}
                            defaultValue={formData["class_name"]}
                        />
                    </div>
                    <div className="reTheme">
                        <InputText
                            placeholder="Téma"
                            name="theme"
                            onChange={(e) => handleChange(e)}
                            defaultValue={formData["theme"]}
                        />
                    </div>
                    <div className="reTheme">
                        <InputText
                            placeholder="Obor"
                            name="field"
                            onChange={(e) => handleChange(e)}
                            defaultValue={formData["field"]}
                        />
                    </div>
                    <div className="reTheme">
                        <Checkbox
                            inputId="isTeacher"
                            name="is_teacher"
                            onChange={(e) => handleCheckboxChange(e)}
                            checked={formData["is_teacher"]}
                        />

                        <label htmlFor="isTeacher" className="ml-2">Is Teacher</label>
                    </div>

                    <div className="updateUser__btn">
                        <Link to={"/users"}>
                            <Button label="Zpět" type="button" />
                        </Link>
                        
                        <Button label="Potvrdit" />
                    </div>
                </form>
            : <><h1>Načítání</h1></> }
        </div>
    );
}

export default UpdateUser;
