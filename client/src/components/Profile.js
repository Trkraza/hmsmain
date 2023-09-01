import React, { useContext, useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import Sidebar from './Sidebar';



const Profile = () => {

    const { logindata, setLoginData } = useContext(LoginContext);

    const [data, setData] = useState(false);


    const history = useNavigate();

    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();
        console.log(data);

        if (data.status == 401 || !data) {
            history("*");
        } else {
            console.log("user verify");
            setLoginData(data)
            history("/dash/profile");
        }
    }


    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true)
        }, 2000)

    }, [])

    return (
        <><div style={{display:"flex", flexDirection:"row",height:"84vh"}}>
         <Sidebar/>
            {  
                data ?
                
                <div style={{ display: "flex", flexDirection:"column",width:"80vw", alignItems: "center", marginTop:"50px" }}>
                   <div style={{display:"flex", justifyContent:"space-between", gap:"80px", flexDirection:"row", alignItems:"center"}}> <img src="/assets/man.png" alt="img" />

                    <h1>User Email: {logindata ? logindata.ValidUserOne.email : ""}</h1></div>
                    <div style={{display:"flex", justifyContent:"space-between", gap:"80px",flexDirection:"row", alignItems:"center"}} >   <h2>First Name: {logindata ? logindata.ValidUserOne.firstName : ""}</h2>
                    <h2>Last Name: {logindata ? logindata.ValidUserOne.lastName : ""}</h2></div>
                  <div style={{display:"flex", justifyContent:"space-between", flexDirection:"row", gap:"80px",alignItems:"center"}}>  <h2>Date-Of-Birth: {logindata ? logindata.ValidUserOne.dob : ""}</h2>
                    <h2>Gender: {logindata ? logindata.ValidUserOne.gender : ""}</h2></div>
                  <div style={{display:"flex", justifyContent:"space-between", flexDirection:"row",gap:"80px", alignItems:"center"}}> <h2>ContactNumber: {logindata ? logindata.ValidUserOne.contactNumber : ""}</h2>
                    <h2>Address: {logindata ? logindata.ValidUserOne.address : ""}</h2></div> 
                   <div style={{display:"flex", justifyContent:"space-between", flexDirection:"row",gap:"80px", alignItems:"center"}}> <h2>EmergencyContact: {logindata ? logindata.ValidUserOne.emergencyContact : ""}</h2>
                    <h2>BloodGroup: {logindata ? logindata.ValidUserOne.bloodGroup : ""}</h2></div>
                  <div style={{display:"flex", justifyContent:"space-between", gap:"80px",flexDirection:"row", alignItems:"center"}}>  <h2>allergies: {logindata ? logindata.ValidUserOne.allergies : ""}</h2></div>
                    
                </div> : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center",gap:"80px", height: "100vh" }}>
                    Loading... &nbsp;
                    <CircularProgress />
                </Box>
            }
</div>
        </>

    )
}

export default Profile