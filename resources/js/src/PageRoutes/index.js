import React from "react";
import { Route, Routes } from "react-router";
import About from "../pages/About";
import Homepage from "../pages/Homepage";

function PageRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/about' element={<About />} />
        </Routes>
    )
}

export default PageRoutes;