import axios from 'axios';

const BASE_URL = 'http://localhost:3001/users';

export const getAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
};

export const deleteUserById = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
};

export const createUser = async (data) => {
    const response = await axios.post(`${BASE_URL}`, data);
    return response.data;
};

export const updateUser = async (id, data) => {
    const response = await axios.put(`${BASE_URL}/${id}`, data);
    return response.data;
};
