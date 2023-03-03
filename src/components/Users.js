import React from 'react';

import User from './User';

const Users = ({ users, onDeleteUser, onEditUser }) => {
    const renderUsers = users ? users.map((user) => <User key={user.id} user={user} onDeleteUser={onDeleteUser} onEditUser={onEditUser} />) : 'no user exist';
    return <section className="users">{renderUsers}</section>;
};

export default Users;
