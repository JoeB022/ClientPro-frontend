import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [editingClient, setEditingClient] = useState(null);

  // Fetch clients from the API
  useEffect(() => {
    fetch("http://127.0.0.1:8001/clients/")
      .then((response) => response.json())
      .then((data) => {
        setClients(data);
      })
      .catch((error) => {
        console.error("Error fetching clients:", error);
      });
  }, []);

  // Fetch projects from the API
  useEffect(() => {
    fetch("http://127.0.0.1:8001/projects/")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      if (editingClient) {
        // Update existing client
        setClients(
          clients.map((client) =>
            client.id === editingClient.id ? { ...formData, id: client.id } : client
          )
        );
        setEditingClient(null);
      } else {
        // Add new client
        setClients([...clients, { ...formData, id: clients.length + 1 }]);
      }
      setFormData({ name: "", email: "", phone: "" });
    } else {
      alert("Please fill in all fields!");
    }
  };

  const handleDeleteClient = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  const handleEditClient = (client) => {
    setFormData({ name: client.name, email: client.email, phone: client.phone });
    setEditingClient(client);
  };

  return (
    <div className="App">
      <header>
        <h1>ClientPro CRM</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Clients</li>
            <li>Projects</li>
            <li>Reports</li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Client List</h2>
          <table>
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.length > 0 ? (
                clients.map((client) => (
                  <tr key={client.id}>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.phone}</td>
                    <td>
                      <button onClick={() => handleEditClient(client)}>Edit</button>
                      <button onClick={() => handleDeleteClient(client.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No clients available</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        <section>
          <h2>{editingClient ? "Edit Client" : "Add New Client"}</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">{editingClient ? "Update Client" : "Submit"}</button>
          </form>
        </section>

        <section>
          <h2>Project List</h2>
          <ul>
            {projects.length > 0 ? (
              projects.map((project) => (
                <li key={project.id}>
                  {project.title} - {project.status}
                </li>
              ))
            ) : (
              <p>No projects found</p>
            )}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
