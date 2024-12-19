import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5173', // Your FastAPI backend URL
});

// Example API endpoints
export const fetchClients = () => API.get('/clients');
export const createClient = (clientData) => API.post('/clients', clientData);
export const updateClient = (id, clientData) => API.put(`/clients/${id}`, clientData);
export const deleteClient = (id) => API.delete(`/clients/${id}`);
