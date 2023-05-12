import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ColorForm({addColor}){
    const [formData, setFormData] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {value} = e.target
        setFormData(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData !== ""){
            addColor(formData)
            setFormData("")
            navigate('/colors')
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="color" name="color" value={formData} onChange={handleChange} />
            <button type="submit">Add Color</button>
        </form>
    )
}

export default ColorForm