import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Nav />
      <hr />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<h1>products</h1>} />
          <Route path="/add" element={<h1>add products</h1>} />
          <Route path="/update" element={<h1>update</h1>} />
          <Route path="/logout" element={<h1>logout</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
