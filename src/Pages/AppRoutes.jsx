import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./MainPage/MainPage";
import About from "./About/About";

import CatUpdateForm from "./CatUpdateForm/CatUpdateForm";
import CatView from "./CatView/CatView";
import CatList from "./CatList/CatList";

import UserCreateForm from "./UserCreateForm/UserCreateForm";
import CreatedUser from "./UserCreateForm/CreatedUser";




export default function AppRoutes() {

    return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/creatuser" element={<UserCreateForm />}/>                
                <Route path="/updateuser/:id" element={<CatUpdateForm />}/>                
                <Route path="/user/:id" element={<CatView />}/>             
                <Route path="/cats" element={<CatList />}/>             
                <Route path="/createduser/:id" element={<CreatedUser/>}/>
             

            </Routes>
        </BrowserRouter>
    </>
    );
}