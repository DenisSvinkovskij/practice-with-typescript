import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IUser } from '../types';

interface IParams {
  id: string;
}

const UserByIdPage: React.FC = props => {
  const params = useParams<IParams>();
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    const fetchUserById = async () => {
      const res = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${params.id}`,
      );

      setUser(res.data);
    };

    fetchUserById();
  }, [params.id]);

  return <div className="users">
      <h1>Name: {user?.name}</h1>
      <h1>Email: {user?.email}</h1>
      <h2>Telephone: {user?.phone}</h2>
      <h3>Address: {user?.address.city}, {user?.address.street}</h3>
  </div>;
};

export default UserByIdPage;
