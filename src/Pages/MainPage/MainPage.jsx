import "./MainPage.css";

import { Link } from "react-router-dom";

export default function MainPage() {

    return(
        <>
            <h1>registrace</h1>
            <Link to={"/creatuser"}>
                <p>registrovat</p>
            </Link>
            <Link to={"/wizards"}>
                <p>přihlásit se</p>
            </Link>
        </>
    )
}