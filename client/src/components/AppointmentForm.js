import React, { useState } from 'react';
import "./AppointmentsForm.css";
import Sidebar from './Sidebar';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    doctorName: '', // Initialize doctorName as an empty string
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <><div className="main-content" style={{display:"flex",flexDirection:"row",width:"100vw",height:"84vh",gap:"150px"}}>
    <Sidebar/>
    <div>
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="time"
          placeholder="Appointment Time"
          value={formData.time}
          onChange={handleChange}
        />
        {/* Use a select input for doctorName */}
        <select
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
        >
          <option value="">Select Doctor</option>
          <option value="Doctor 1">Doctor 1</option>
          <option value="Doctor 2">Doctor 2</option>
          {/* Add more options as needed */}
        </select>
        <button type="submit">Schedule</button>
      </form>
    </div>
    </div>
    </>
  );
};


export default AppointmentForm;
