import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import "./Login.css";

import { loginUser } from "../../models/User";
import {
    setIsFetching,
    updateUser,
    userIsFetched,
} from "../../Helpers/redux/slice";
import { useDispatch } from "react-redux";

export default function UserLogin() {
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const postForm = async () => {
        dispatch(setIsFetching());

        const user = await loginUser(formData);

        if (user.status === 200) {
            dispatch(userIsFetched());

            dispatch(
                updateUser({
                    user: {
                        name: user.data.name,
                        uniqueId: user.data.unique_id,
                        isTeacher: user.data.isTeacher,
                        isAdmin: user.data.isAdmin,
                    },
                })
            );

            redirectTo();
        } else {
            setInfo("Wrong email/password");
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
        <div className="login__container">
            <h1 className="loNadpis">Přihlášení</h1>
            <br />

            {info && <Message severity="error" text={info} />}

            <form className="prihlaseni" onSubmit={handlePost}>
                <div className="loName">
                    <InputText
                        placeholder="Jméno"
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div className="loPassword">
                    <Password
                        placeholder="Heslo"
                        name="password"
                        onChange={(e) => handleChange(e)}
                        feedback={false}
                    />
                </div>

                <div className="login__btnContainer">
                    <Link to={"/"}>
                        <Button label="Zpět" type="button" />
                    </Link>

                    <Button label="Přihlásit se" />
                </div>
            </form>
        </div>
    );
}
