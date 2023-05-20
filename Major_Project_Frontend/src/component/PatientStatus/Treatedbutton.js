import React,{useState} from "react";
import { Checkmark } from 'react-checkmark';
import { useUpdateStatusAPIMutation } from "../../services/datacommunication";

const Treatedbutton = ({ patient }) => {

    const [data,setData] = useState({patient_id:"",is_treated:"False"})

    const [updateStatus,{isLoading}] = useUpdateStatusAPIMutation();

    const handleClick = async (e) => {
        e.preventDefault();
        console.log('button clicked')
        setData({patient_id:patient,is_treated:"True"})
        console.log(data)
        const response = await updateStatus(data);
        console.log(response);

    }

    return(
        <div>
            <button className="btn btn-transparent" onClick={handleClick}><Checkmark size='30px' /></button>
        </div>
    )
}

export default Treatedbutton;