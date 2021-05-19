import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../types';

interface IUsersList {
  users: IUser[];
}

export const UsersList: React.FC<IUsersList> = ({ users }) => {
  return (
    <div className="container">
      <ul className="list ">
        {users.map(user => (
          <Link to={`/users/${user.id}`} key={user.id} className='black-text'>
            <li className="z-depth-2 users-list-item">
              <span>{user.name}</span>
              <span>
                {user.address.city}, {user.address.street}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
