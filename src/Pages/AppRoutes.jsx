import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./MainPage/MainPage";
import Projects from "./Projects/Projects";

import Register from "./Register/Register";
import Login from "./Login.jsx/Login";




export default function AppRoutes() {

    return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/register" element={<Register />}/>                
                <Route path="/login" element={<Login/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </BrowserRouter>
    </>
    );
}