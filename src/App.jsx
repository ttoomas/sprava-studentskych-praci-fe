import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { Layout } from "./Layout";
import UserCreateForm from "./Pages/UserCreateForm/UserCreateForm";

function App() {
  return (
    <Router>
    <Layout>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/registrace" element={<UserCreateForm />} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;