import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UsersList } from '../components/UsersList'
import { IUser } from '../types'

export const UsersPage:React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])
    
    const fetchUsers = async ()=>{
       const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data)
    }
    return (
      <div className="users">
        <UsersList users={users} />
      </div>
    );
}
