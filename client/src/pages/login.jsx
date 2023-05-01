import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
// import Dashboard from './dashboard';
// import Button from '@mui/material/Button';
import * as yup from 'yup';
import Typography from '@mui/material/Typography';

export default function Login(props) {
    const [user,setUser]=useState("");
    const handleClose = () =>props.handleOpen(!props.open);
    const schema=yup.object().shape({
      username:yup.string().required(),
      passw:yup.string().min(5).max(15).required()
      // confirmpassword:yup.string().oneOf([yup.ref("password"),null])
  
  })
  
      const{register,handleSubmit,formState:{ errors }}=useForm({
          resolver:yupResolver(schema)
      })
const Log=()=>{
    
    const[field,setField]=useState({
        username:'',
        passw:''
    });
    const navigate=useNavigate();
   let handlechange=(e)=>{
    let nam=e.target.name;
    let value=e.target.value;
    setField(values=>({...values,[nam]:value}))
   }

    let handles=()=>{
        try{
            axios.post('http://localhost:8000/login',field)
            .then((res)=>{
              if(res.data.msg){
                setUser(res.data.msg);
                
              }
              else {
                // setUser("Login Successfully ...");
                // window.location.reload();
                localStorage.setItem("user",JSON.stringify(res.data));
                props.handleOpen(!props.open);
                navigate("dashboard",{state:true});
                // return(
                //   <Dashboard user={user} />
                // )
              }
            })
        }
        catch(err){
            console.log(err.msg);
        }
   }
       return (
        <>
   
                 <div style={{
            backgroundColor:"white",
            marginTop:"0px",
            marginLeft:'50%'
                }}>
                    <div style={{
                      backgroundColor:"white",
                        marginTop:'10px',
                        width:'35vw',
                        display:'flex',
                        padding:'10px',
                        justifyContent:'space-between'
                    }}>
                        <h1>Login</h1>
                        <h2><button 
        onClick={handleClose}
        style={{border:'none',
        backgroundColor:'transparant',fontSize:'21px'}}>X</button></h2>
                    </div>
                    <form 
                    style={{
                        padding:'10px',width:'35vw',backgroundColor:'white'
                    }} onSubmit={handleSubmit(handles)}  >
                    
                    <TextField type='text'label="Username"
                    name="username" value={field.fullname} {...register("username")}
                    onChange={handlechange}
                    style={{
                        width:'400px',
                        fontSize:'18px',
                        marginLeft:'40px'
                    }}/><br />
                    <p style={{color:'red',marginLeft:'40px'}}>{user}</p>
                    <p style={{color:'red',marginLeft:'40px'}}>{errors.username?.message}</p><br />
                    {/* <label htmlFor="email"><h3>Password :</h3></label><br /> */}
                    <TextField type="Password" label="password" {...register("passw")}
                     name="passw"value={field.password} onChange={handlechange}
                                        style={{
                                            width:'400px',
                                            fontSize:'18px',
                                            marginLeft:'40px'
                                        }}/>
                                        <br />
           <p style={{color:'red',marginLeft:'40px'}}>{errors.passw?.message}</p><br />
            
                    <button type="submit"
                    style={{
                        cursor:'pointer',
                        padding:'15px',
                        border:'none',
                        width:'100px',
                        backgroundColor:'blue',
                        borderRadius:'5px',
                        fontSize:'18px',
                        color:'white',
                        marginLeft:'350px',
                        boxShadow:'2px 2px 2px 2px grey'
                      
                    }}
                    >Login</button>
                    </form>
                </div>
        
        </>

    )
};


const style = {
  position: 'absolute',
  top: '30%',
  left: '25%',
  transform: 'translate(-25%, -25%)',
  width: 400,
  p: 4,
};



  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              
            </Typography> */}
        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {/* Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}
            <Log />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}