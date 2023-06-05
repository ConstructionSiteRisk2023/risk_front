import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Today from "./Today";

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/risk" element={<Today/>} />
            <Route from="*" to="/" />
        </Routes>
    )
}

export default Router