import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserForm from './components/UserForm';
import Users from './components/Users';
import { createUser, deleteUserById, getAllUsers, updateUser } from './services/UserService';

const App = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [updateFlag, setUpdateFlag] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    const fetchUsers = async () => {
        try {
            const result = await getAllUsers();
            setUsers(result);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setError(err.message);
            toast(err.message);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        fetchUsers();
    }, []);

    const deleteUser = async (id) => {
        try {
            await deleteUserById(id);
            toast('user was deleted successfully');
            fetchUsers();
        } catch (err) {
            setError(err.message);
            toast(err.message);
        }
    };

    const editUser = async (user) => {
        try {
            setSelectedUser(user);
            setUpdateFlag(true);
        } catch (err) {
            setError(err.message);
            toast(err.message);
        }
    };

    const handleUpdateUser = async (user) => {
        try {
            await updateUser(selectedUser.id, user);
            toast('user is updated successfully');
            fetchUsers();
        } catch (err) {
            setError(err.message);
            toast(err.message);
        }
    };

    const addNewUser = async (newUser) => {
        try {
            await createUser(newUser);
            toast('new user is created successfully');
            fetchUsers();
        } catch (err) {
            setError(err.message);
            toast(err.message);
        }
    };

    return (
        <div>
            <header>
                <h1>User Management App</h1>
            </header>
            <main>
                {updateFlag ? <UserForm selectedUser={selectedUser} onAddNewUser={handleUpdateUser} btnText="Update User" /> : <UserForm onAddNewUser={addNewUser} btnText="Add User" />}
                <ToastContainer />
                {isLoading && <p>Loading...</p>}
                {error ? <p>{error}</p> : <Users users={users} onDeleteUser={deleteUser} onEditUser={editUser} />}
            </main>
            <footer>
                <p>Copyright By Anisul Islam 2023</p>
                <p>Developed with &hearts; by Anisul Islam</p>
            </footer>
        </div>
    );
};

export default App;
