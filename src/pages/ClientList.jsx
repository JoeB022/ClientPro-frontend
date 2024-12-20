import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching clients using fetch API
    fetch('/api/clients')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setClients(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching clients:', err);
        setError('Failed to fetch clients. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
