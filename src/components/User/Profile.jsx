import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './profile.css';

const FreelancerDashboard = () => {
  const { currentUser } = useAuth();
  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'Rahul Sharma',
      age: 32,
      gender: 'Male',
      email: 'rahul.sharma@example.com',
      phone: '+91 9876543210',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      projects: 3,
      lastProject: 'E-commerce Website',
      joinDate: '15 Jan 2023'
    },
    {
      id: 2,
      name: 'Priya Patel',
      age: 28,
      gender: 'Female',
      email: 'priya.patel@example.com',
      phone: '+91 8765432109',
      photo: 'https://randomuser.me/api/portraits/women/1.jpg',
      projects: 2,
      lastProject: 'Blog Platform',
      joinDate: '22 Mar 2023'
    }
  ]);

  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <div className="freelancer-dashboard">
      {/* Dashboard Header */}
      <header className="dashboard-header">
        <h1>Welcome, {currentUser.displayName || 'Freelancer'}</h1>
        <div className="stats">
          <div className="stat-card">
            <h3>Total Clients</h3>
            <p>{clients.length}</p>
          </div>
          <div className="stat-card">
            <h3>Active Projects</h3>
            <p>4</p>
          </div>
          <div className="stat-card">
            <h3>Earnings</h3>
            <p>₹58,500</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Clients List */}
        <section className="clients-section">
          <h2>My Clients</h2>
          <div className="client-search">
            <input type="text" placeholder="Search clients..." />
            <button>+ Add New Client</button>
          </div>
          
          <div className="clients-list">
            {clients.map(client => (
              <div 
                key={client.id} 
                className={`client-card ${selectedClient?.id === client.id ? 'active' : ''}`}
                onClick={() => setSelectedClient(client)}
              >
                <img src={client.photo} alt={client.name} className="client-photo" />
                <div className="client-info">
                  <h3>{client.name}</h3>
                  <p>{client.projects} projects</p>
                  <p>Last project: {client.lastProject}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Details */}
        <section className="client-details">
          {selectedClient ? (
            <>
              <div className="client-header">
                <img src={selectedClient.photo} alt={selectedClient.name} className="profile-photo" />
                <div>
                  <h2>{selectedClient.name}</h2>
                  <p className="client-meta">
                    {selectedClient.gender}, {selectedClient.age} years • Member since {selectedClient.joinDate}
                  </p>
                </div>
              </div>

              <div className="detail-sections">
                <div className="detail-section">
                  <h3>Contact Information</h3>
                  <div className="detail-row">
                    <span>Email:</span>
                    <span>{selectedClient.email}</span>
                  </div>
                  <div className="detail-row">
                    <span>Phone:</span>
                    <span>{selectedClient.phone}</span>
                  </div>
                </div>

                <div className="detail-section">
                  <h3>Projects History</h3>
                  <div className="projects-list">
                    <div className="project-item">
                      <div className="project-name">E-commerce Website</div>
                      <div className="project-status completed">Completed</div>
                      <div className="project-price">₹18,500</div>
                    </div>
                    <div className="project-item">
                      <div className="project-name">Business Portfolio</div>
                      <div className="project-status in-progress">In Progress</div>
                      <div className="project-price">₹12,000</div>
                    </div>
                  </div>
                </div>

                <div className="detail-section">
                  <h3>Additional Notes</h3>
                  <textarea placeholder="Add notes about this client..."></textarea>
                </div>
              </div>
            </>
          ) : (
            <div className="no-client-selected">
              <p>Select a client to view details</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default FreelancerDashboard;