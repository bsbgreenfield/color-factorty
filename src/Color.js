import React from "react";
import { useParams } from "react-router-dom";
import {v4 as uuid} from 'uuid'

function Color({color, goTo}){
    const params = useParams()
    if(!params.color){
        return(
            <div 
            style={{backgroundColor: color, width: '100px', height: '100px'}}
            onClick={goTo}
            key={uuid()}>
            </div>
        )
    }
    return <div style={{backgroundColor: params.color, width: '100vw', height: '100vh'}}></div>
    
}


export default Color