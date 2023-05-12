import React from "react";

import "./ColorList.css"
import { useNavigate, Link } from "react-router-dom";
import Color from "./Color";


function ColorsList({colors}){
    const navigate = useNavigate()
   
    const goTo = (e) => {
        const {style} = e.target
        navigate(`/colors/${style.backgroundColor}`)
    }
    return (
        <>
            <div className="ColorContainer">
                {colors.map(color => <Color color={color} goTo={goTo}/>)}
            </div>
            <Link to={'/colors/new'}>Add Color</Link>
        </>
       
    )
}

export default ColorsList