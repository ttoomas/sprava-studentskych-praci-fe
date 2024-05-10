import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { Layout } from "./Layout";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Projects from "./Pages/Projects/Projects";
import ProtectedRoute from "./Helpers/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
    <Layout>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/projects" element={
        <ProtectedRoute>
          <Projects />
        </ProtectedRoute>
      } />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;