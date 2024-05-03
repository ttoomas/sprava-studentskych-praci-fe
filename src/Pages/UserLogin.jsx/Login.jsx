import { Link, useParams } from "react-router-dom"


export default function Login() {
const { id } = useParams();
    return (
        <>
            <p>Login: {id}</p>
        <Link to={`/user/${id}`}>
            <p>View user</p>
        </Link>
            <Link to={"/"}>
        <p>go home</p>       
        </Link>
        </>
    )
}