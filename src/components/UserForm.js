import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const UserForm = ({ onAddNewUser, btnText, selectedUser }) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        gender: 'Male',
        country: ''
    });
    const [show, setShow] = useState(false);

    useEffect(() => {
        selectedUser && setUser({ ...selectedUser });
    }, [selectedUser]);

    const handleChange = (e) => {
        e.stopPropagation();
        setUser((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddNewUser({ id: uuidv4(), ...user });
    };

    return (
        <div>
            <button
                className="btn"
                onClick={() => {
                    setShow(!show);
                }}>
                {show ? <FaMinusCircle /> : <FaPlusCircle />}
            </button>
            {show && (
                <form onSubmit={handleSubmit} className="form">
                    <div className="form__control">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" onChange={handleChange} value={user.name} required />
                    </div>
                    <div className="form__control">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" onChange={handleChange} value={user.email} required />
                    </div>
                    <div className="form__control">
                        <span>Gender: </span>

                        <input type="radio" name="gender" onChange={handleChange} value="Male" checked={user.gender === 'Male'} />
                        <label htmlFor="Male">Male</label>

                        <input type="radio" name="gender" onChange={handleChange} value="Female" checked={user.gender === 'Female'} />
                        <label htmlFor="Female">Female</label>
                    </div>
                    <div className="form__control">
                        <span>Country: </span>

                        <select name="country" id="country" value={user.country} onChange={handleChange}>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Australia">Australia</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Nepal">Nepal</option>
                            <option value="India">India</option>
                            <option value="Finland">Finland</option>
                        </select>
                    </div>
                    {/* <p>selected gender: {user.gender}</p> */}
                    <button>{btnText}</button>
                </form>
            )}
        </div>
    );
};

export default UserForm;
