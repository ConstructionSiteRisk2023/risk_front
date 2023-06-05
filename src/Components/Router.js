import React from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home/>} />
            
            <Route from="*" to="/" />
        </Routes>
    )
}

export default Router