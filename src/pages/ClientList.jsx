import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Assuming you're using Axios
import { Link } from 'react-router-dom';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Fetching clients from the backend API
    axios.get('/api/clients')
      .then(response => setClients(response.data))
      .catch(error => console.error('Error fetching clients:', error));
  }, []);

  return (
    <div>
      <h1>Client List</h1>
      <Link to="/add-client" className="btn btn-primary">Add New Client</Link>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            {client.name} - {client.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
