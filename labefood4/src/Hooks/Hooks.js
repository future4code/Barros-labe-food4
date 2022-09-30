import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const useAuth = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            setTimeout(alert(`que boldo bom`))
        }
    }, [localStorage.getItem('token')])
}