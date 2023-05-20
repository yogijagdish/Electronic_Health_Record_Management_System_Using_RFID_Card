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
        <button type="submit" className="text-white bg-red-600 hover:bg-grey-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleClick}>Logout</button>
        </div>
    )
}