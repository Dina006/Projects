import { Outlet, NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import './static/App.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import Footer from './footer';
import Signup from './signup';
import Login from './login';
import Profilss from '../resume/profile.jpg'
import * as React from 'react';
import {Box} from '@mui/material';
import {IconButton} from '@mui/material';
import {Typography} from '@mui/material';
import {Menu} from '@mui/material';
import {Tooltip} from '@mui/material';
import {MenuItem} from '@mui/material';

const settings = [ 'Dashboard', 'Logout'];

const Layout=()=>{
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate=useNavigate();
  const local=localStorage.getItem('user');
  const userData=JSON.parse(local);
  const image=userData ?`http://localhost:8000/public/images/${userData.datas.data[0].photo}`:Profilss;
  let valls=userData === null? false:true;
 console.log(valls);
//  console.log(userData.datas.data[0])
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const handleOpen = () => setOpen(!open);
    const handleOpen1 = () => setOpen1(!open1);


   const style=({isActive})=>{
    return{
        fontWeight:isActive ? "bold" : "normal",
        color:isActive ? "blue" : "grey"
    }
   }
    return(
        <>

        <div className="links" style={{zIndex:'1'}}>
        <nav className="navbar">
            <div style={{display:"flex"}}>
                <NavLink to="/" className="logo"><b>JOB</b>  <span style={{fontSize:'30px'}}>search</span></NavLink>
                <NavLink to="jobs" style={style} className="linns">All Jobs</NavLink>
                <NavLink to="courses" 
                style={style}
                          className="linns">Free Courses</NavLink>
                <NavLink to="interviewtips" style={style} className="linns">Interview Tips</NavLink>
            </div>
            
            <div className='stik' >
                    <div style={{display:'flex'}}>
          {valls ? '': <> <button className="btn" onClick={handleOpen}>Login</button> <button className="btn" onClick={handleOpen1}>Register</button></>
                }
                <Box sx={{ flexGrow: 0 }}>
                <Tooltip title={userData ? userData.datas.data[0].UserName : 'user'} 
              sx={{fontSize:'18px'}} >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{
                    marginTop:'20px',
                    marginRight:'20px'
                }} alt="Remy Sharp" src={image} /></IconButton>
                </Tooltip>
                <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting,i) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"onClick={()=>{
            if(setting==='Logout') {
                localStorage.removeItem('user')
              navigate('/')};
            if(setting==='Dashboard') navigate("dashboard");
    }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Box>
                </div>
            
            </div>
        </nav>
        </div>
        {open1 && <Signup
         open1={open1}
         handleOpen1={handleOpen1}/>}
         {open && <Login
            open={open}
            handleOpen={handleOpen}/>}
         <Outlet/>
       
        
    </>

    )
};
export default Layout;