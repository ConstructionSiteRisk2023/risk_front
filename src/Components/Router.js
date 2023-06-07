import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Predict from "./Predict";

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/risk" element={<Predict/>} />
            <Route from="*" to="/" />
        </Routes>
    )
}

export default Router