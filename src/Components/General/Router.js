import React from "react";

import Home from './Home';

import {BrowserRouter, Routes,Route } from "react-router-dom";
import Navegador from "./Navegador";

function Router (){
    return(
        <BrowserRouter>
        <Navegador/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/User" element={<User/>}></Route>
            <Route path="/Booking" element={<Booking/>}></Route>            
        </Routes>
        </BrowserRouter>        
    )
}

export default Router;
