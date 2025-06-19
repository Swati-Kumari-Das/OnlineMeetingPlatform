
import React, { useState , useContext } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import styles from "../styles/videoComponent.module.css";

import {TextField} from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {

    let navigate=useNavigate();
    const [meetingCode,setMeetingCode]=useState("");

    const {addToUserHistory}=useContext(AuthContext);
    let handleJoinVideoCall=async()=>{
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }
  return (
    <>
       <div className={styles.navBar}>
        <div style={{display:"flex", alignItems:"center"}}>
            <h3>VideoCallBuddy!</h3>
        </div>
        <div style={{display:"flex", alignItems:"center",gap: "10px" }}>
             <IconButton onClick={
              ()=>{
                navigate("/history")
              }
             }>
                <RestoreIcon />
             </IconButton>
             <p style={{ margin: 0 }}>History</p>
             <Button onClick={() =>{
                localStorage.removeItem("token")
                navigate("/auth")
             }}>Logout</Button>
        </div>
       </div>
       <div className={styles.meetContainer}>
          <div className={styles.leftPanel}>
            <div>
                <h2>Providing Quality Video Calling Just Like Quality Education</h2>
                <div style={{display:'flex',gap:"10px"}}>
                    <TextField onChange={e => setMeetingCode(e.target.value)} id="outline-basic" label="Meeting Code" variant="outlined"></TextField>
                    <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>
                </div>
            </div>
          </div>

          <div className={styles.rightPanel}>
            <img srcSet='/logo3.png' alt="" />
          </div>

       </div>
    </>
  )
}

export default withAuth(HomeComponent)