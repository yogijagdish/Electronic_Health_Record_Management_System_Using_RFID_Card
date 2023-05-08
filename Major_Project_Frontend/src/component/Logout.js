import React from "react";
import { deleteToken } from "../services/tokenService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unSetUserToken } from "../features/authSlice";
import { unSetUser } from "../features/userSlice";


export default function Logout() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/")
        dispatch(unSetUserToken({access_token:null}))
        dispatch(unSetUser({user:""}))
        deleteToken();
    
    }
    return (
        <div className="grid place-content-center mt-52">
        <button type="submit" className="bg-blue-700 w-20 border-2 rounded-lg h-8" onClick={handleClick}>Logout</button>
        </div>
    )
}