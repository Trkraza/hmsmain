import React from 'react';
import { Link } from 'react-router-dom';
import "./Styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <Link to="/dash" className="sidebar-link">Dashboard</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/dash/profile" className="sidebar-link">Patient Profile</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/dash/appointments" className="sidebar-link">Patient Appointments</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/dash/someother" className="sidebar-link">Some Other Section</Link>
      </div>
    </div>
  );
};

export default Sidebar;
