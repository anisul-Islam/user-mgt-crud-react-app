import React from 'react';
import { FaTrash, FaUserEdit } from 'react-icons/fa';

const User = ({ user, onDeleteUser, onEditUser }) => {
    const { id, name, email, gender, country } = user;

    const handleDeleteById = (id) => {
        onDeleteUser(id);
    };

    const handleEditById = (user) => {
        onEditUser(user);
    };

    return (
        <article key={id} className="user card">
            <h3 className="user__name">{name}</h3>
            <p className="user__email">{email}</p>
            <p className="user__gender"> {gender}</p>
            <p className="user__country"> {country}</p>
            <div className="user__actions">
                <button
                    className="btn"
                    onClick={() => {
                        handleEditById(user);
                    }}>
                    <FaUserEdit />
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        handleDeleteById(id);
                    }}>
                    <FaTrash />
                </button>
            </div>
        </article>
    );
};

export default User;
