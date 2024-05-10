import "./MainPage.css";

import { Link } from "react-router-dom";

export default function MainPage() {

    return(
        <>
            <h1>Registrace</h1>
            <Link to={"/register"}>
                <p>registrovat</p>
            </Link>
            <Link to={"/login"}>
                <p>přihlásit se</p>
            </Link>
        </>
    )
}