import React from "react";
import { useState } from "react";

// import { useImageUploadAPIMutation } from "../../services/datacommunication";

export default function Updateprofile() {

    const [data,setData] = useState({image:null})

    // const [imageUpload] = useImageUploadAPIMutation();

    // const handleChange = async (e) => {
    //     setData({[e.target.name]:e.target.files[0]})
    //     console.log(data.name)
    //     const response = await imageUpload(data.image)
    //     console.log(response);
        
    // }
    return (
        <div className="grid place-content-center">
        Working for image

        <label htmlFor="image"> Image </label>
        <input type="file" name="image" id="image" accept="image/*"/>
    
        </div>
    )
}