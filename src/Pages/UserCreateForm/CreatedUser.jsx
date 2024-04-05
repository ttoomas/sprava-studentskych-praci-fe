import { Link, useParams } from "react-router-dom"


export default function CreatedUser() {
const { id } = useParams();
    return (
        <>
            <p>Created user: {id}</p>
        <Link to={`/user/${id}`}>
            <p>View user</p>
        </Link>
            <Link to={"/"}>
        <p>go home</p>       
        </Link>
        </>
    )
}