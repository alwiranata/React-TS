import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Router = () => {
  return (
    <>
 
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>

    </>
  );
};

export default Router