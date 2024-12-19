import React, { useState } from 'react';
import axios from 'axios';  // Assuming you're using Axios
import { useNavigate } from 'react-router-dom';

const ClientForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = { name, email };

    axios.post('/api/clients', newClient)
      .then(response => {
        console.log('Client added successfully:', response.data);
        navigate('/');  // Redirect to Client List after successful addition
      })
      .catch(error => console.error('Error adding client:', error));
  };

  return (
    <div>
      <h1>Add New Client</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Client</button>
      </form>
    </div>
  );
};

export default ClientForm;
