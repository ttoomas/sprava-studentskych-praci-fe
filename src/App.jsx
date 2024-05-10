import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { Layout } from "./Layout";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Projects from "./Pages/Projects/Projects";
import CreatedProject from "./Pages/CreatedProject/CreatedProject";

function App() {
  return (
    <Router>
    <Layout>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/createdproject" element={<CreatedProject />} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;