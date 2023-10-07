import React, { useEffect, useState } from 'react'
import { userApi } from '../api/userApi'

export const UsersPage = () => {

    const [users, setUsers] = useState([]);


    useEffect(()=> {
        getUsers();
    }, [])

    const getUsers = () => {
        userApi.get("https://reqres.in/api/users?page=2")
        .then( resp => {              
            const email = resp.data.data;
            setUsers(email);
            //console.log(email);                    
        })
    }
    
        

  return (
    <div className="mt-5">
        <h1>Users</h1>
        <hr/>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                {users.map( user => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.first_name} {user.last_name}</td>
                        <td>Avatar</td>
                    </tr>
                ))}                
            </tbody>
        </table>
    </div>
  )
}
