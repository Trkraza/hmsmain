import React from 'react'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div style={{display:"flex",flexDirection:"row", height:"84vh", width:"100vw"}}>
      <Sidebar /> {/* Integrate the Sidebar component here */}
   
      <h1>welcome to patient dashboard</h1>
    </div>
  )
}

export default Dashboard
