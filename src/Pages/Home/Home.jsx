import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import "./Home.css";

export function HomePage() {
    return (
        <div className="home">
            <h1 className="nadpis">Správa studenských prací</h1>
            <div className="tlacitka">
                <div className="prihlasitTlacitko">
                    <Link to={"/login"}>
                        <Button label="Přihlásit se" />
                    </Link>
                </div>
                <div className="registraceTlacitko">
                    <Link to={"/register"}>
                        <Button label="Registrovat" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
