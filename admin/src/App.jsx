import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Add from "./pages/Add";
import Lists from "./pages/Lists";
import Login from "./pages/login";


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
