import { useEffect, useState } from "react";
import {userApi} from "../api/userApi"

export const useUsers = () => {

    const [users, setUsers] = useState([]);


    useEffect(()=> {
        getUsers();
    }, []);   

    const getUsers = async() => {
        const resp = await userApi.get("https://reqres.in/api/users?page=2")
            setUsers(resp.data.data);                   
        }
    
    return {
        users
    }
}
