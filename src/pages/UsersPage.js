import React from 'react'
import { useUsers } from '../hooks/useUsers'


export const UsersPage = () => {

  const { users } = useUsers();          

  return (
    <div className="mt-5">
        <h1>Users</h1>
        <hr/>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>                    
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                {users.map( user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.first_name} {user.last_name}</td>
                        <td>{user.email}</td>                        
                        <td>
                            <img
                                src={user.avatar}
                                alt='avatar'
                                className='img-thumbnail'
                            />
                        </td>
                    </tr>
                ))}                
            </tbody>
        </table>
    </div>
  )
}
