import React from 'react'

export const UserRow = ({user}) => {
    return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>                        
                <td>
                    <img
                        src={user.avatar}
                        alt='avatar'
                        className='img-thumbnail'
                        style={{
                            width: 50
                        }}
                    />
                </td>
            </tr>                
    )
}
