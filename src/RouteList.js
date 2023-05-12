import React from "react";
import {Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import ColorsList from "./ColorsList";
import Color from './Color'
import ColorForm from "./ColorForm";


function RouterList({colors, addColor}){
  
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/colors" element= {<ColorsList colors={colors}/>}/>
                <Route path="/colors/:color" element= {<Color/>}/>
                <Route path="/colors/new" element= {<ColorForm addColor={addColor}/>}/>
                <Route path="/*" element= {<Navigate to= "/colors"/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterList