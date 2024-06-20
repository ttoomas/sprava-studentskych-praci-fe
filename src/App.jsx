import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/Home/Home";
import Layout from "./Layout";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Projects from "./Pages/Projects/Projects";
import ProtectedRoute from "./Helpers/ProtectedRoute/ProtectedRoute";
import CreateProject from "./Pages/CreateProject/CreateProject";
import User from "./Pages/Users/User";
import UpdateProject from "./Pages/UpdateProject/UpdateProject";
import Project from "./Pages/Project/Project";
import UpdateUser from "./Pages/UpdateUser/UpdateUser";

import "./App.css";


function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />

                    <Route
                        path="/projects"
                        element={
                            <ProtectedRoute>
                                <Projects />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/projects/create"
                        element={
                            <ProtectedRoute>
                                <CreateProject />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/users"
                        element={
                            <ProtectedRoute>
                                <User />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/users/update/:id"
                        element={
                            <ProtectedRoute>
                                <UpdateUser />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/project/update/:id"
                        element={
                            <ProtectedRoute>
                                <UpdateProject />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/project/:id"
                        element={
                            <ProtectedRoute>
                                <Project />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
