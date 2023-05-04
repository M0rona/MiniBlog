import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useAuthentication } from "./useAuthentication"; 

export const checkAuthentication = () => {
    const[user, setUser] = useState(undefined)
    const {auth} = useAuthentication()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })

    }, [auth])

    return user;
}

