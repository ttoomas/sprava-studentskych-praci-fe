import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { Layout } from "./Layout";
import UserCreateForm from "./Pages/UserCreateForm/UserCreateForm";
import LoginForm from "./Pages/LoginForm/LoginForm"

function App() {
  return (
    <Router>
    <Layout>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/prihlaseni" element={<UserCreateForm />} />
        <Route path="/registrace" element={<LoginForm />} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;