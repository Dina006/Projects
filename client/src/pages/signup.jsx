import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as React from 'react';
import { TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function SignUp(props) {
    const handleClose = () =>props.handleOpen1(!props.open1);
    // const[user,setusers]=useState();
const[exist,setExist]=useState('');
const navigate=useNavigate()
const Log=()=>{

const schema=yup.object().shape({
    fullname:yup.string().required(),
    email:yup.string().email().required(),
    password:yup.string().min(5).max(15).required(),
    skills:yup.string().required(),
    gender:yup.string().required(),
    age:yup.number().min(15).max(100).required(),
    experience:yup.string().required(),
    location:yup.string().required(),
    mobileno:yup.number().min(10).required(),
    jobname:yup.string().required(),

})
const[userinfo,setuserinfo]=useState({
    file:[],
    filepreview:null,
   })
   const[userinfo1,setuserinfo1]=useState({
    file1:[],
    filepreview1:null,
   })


    const{register,handleSubmit,formState:{ errors }}=useForm({
        resolver:yupResolver(schema)
    })

    const savechange=(e)=>{
        setuserinfo({...userinfo,
            file:e.target.files[0],
            filepreview:URL.createObjectURL(e.target.files[0]),
        })
    }
    const savechange1=(e)=>{
        setuserinfo1({...userinfo1,
            file1:e.target.files[0],
            filepreview1:URL.createObjectURL(e.target.files[0]),
        })
    }
    console.log(userinfo.filepreview);
    let handles=(data)=>{
        console.log(data);
        const formdata=new FormData();
        formdata.append('avatar',userinfo.file); 
        formdata.append('fullname',data.fullname) 
        formdata.append('email',data.email)
        formdata.append('password',data.password)
        formdata.append('skills',data.skills)
        formdata.append('gender',data.gender)
        formdata.append('age',data.age)
        formdata.append('experience',data.experience)
        formdata.append('location',data.location)
        formdata.append('mobileno',data.mobileno)
        formdata.append('jobname',data.jobname)
        formdata.append('resume','resume'); 
   
        try{
            axios.post('http://localhost:8000/user',formdata)
            .then((res)=>{
                if(res.data.er){
                    setExist(res.data.er);
                }
                else{
                    navigate("/",{state:res.data.suc});
                    props.handleOpen1(!props.open1)

                }
            })
        }
        catch(err){
            console.log(err);
        }
        
   }
       return (
        <>
            <div style={{
                position:'relative',
               width:'50vw',
               height:'160vh',
               backgroundColor:'white',
            marginLeft: '50%'
            }}>
       
                 <div style={{position:'absolute'}}>
                    <div style={{
                        marginTop:'10px',
                        width:'50vw',
                        display:'flex',
                        padding:'10px',
                        justifyContent:'space-between'
                    }}>
                        <h1>Register</h1>
                        <h2><button style={{border:'none',
                    babackgroundColor:'transparant',
                    fontSize:'21px'}} onClick={handleClose}>X</button></h2>
                    </div>
                    <form 
                    style={{
                        padding:'10px',
                        position:'absolute',
                        marginLeft:'10%'
                    }} onSubmit={handleSubmit(handles)}>
                       
                    <TextField type='text'label='username'
                    name="fullname"  {...register("fullname")}
                    
                    style={{
                        width:'550px',
                        fontSize:'18px',
                    }}/>
                    <p style={{color:'red'}}>{exist}</p>
                    <p style={{color:'red'}}>{errors.fullname?.message}</p>
                    <br />
                    <TextField type="email" label='Email' 
                    name="email" 
                    {...register("email")}
                                        style={{
                                            width:'550px',
                                            fontSize:'18px'
                                        }}/>
                    <p style={{color:'red'}}>{errors.email?.message}</p>

                                        <br />
                    <TextField type="password" label="password"
                     name="password"{...register("password")}
                                        style={{
                                            width:'550px',
                                            fontSize:'18px',
                                          
                                        }}/>
                    <p style={{color:'red'}}>{errors.password?.message}</p>

                                        <br />
                   {/* <label htmlFor="email"><h3>Confirm Password :</h3></label><br />
                     <input type="text" placeholder="Confirm Password ..." name="email"
                                        style={{
                                            padding:'10px',
                                            width:'400px',
                                            border:'none',
                                            fontSize:'18px',
                                            borderRadius:'7px',
                                            boxShadow:'2px 2px 2px 2px grey'
                                        }}/> */}
        
                    <TextField type="text" label="Skills"
                     name="password"{...register("skills")}
                                        style={{
                                            width:'550px',
                                            fontSize:'18px',
                                          
                                        }}/>
                    <p style={{color:'red'}}>{errors.skills?.message}</p>

                                        <br />
                                        
                    <TextField type="text" label="gender"
                     name="password"{...register("gender")}
                                        style={{
                                            width:'550px',
                                            fontSize:'18px',
                                          
                                        }}/>
                    <p style={{color:'red'}}>{errors.gender?.message}</p>

                                        <br />
                                        <TextField type="number" label="Age"
                     name="password"{...register("age")}
                                        style={{
                                            width:'550px',
                                            fontSize:'18px',
                                          
                                        }}/>
                    <p style={{color:'red'}}>{errors.age?.message}</p>

                                        <br />
                    
                                        <TextField type="text" label="Experience"
                     name="password"{...register("experience")}
                                        style={{
                                            width:'550px',
                                            fontSize:'18px',
                                          
                                        }}/>
                    <p style={{color:'red'}}>{errors.experience?.message}</p>

                                        <br />

                                        <TextField type="text" label="Location"
                     name="password"{...register("location")}
                                        style={{
                                            width:'550px',
                                            fontSize:'18px',
                                          
                                        }}/>
                    <p style={{color:'red'}}>{errors.location?.message}</p>

                                        <br />
                                        <TextField type="number" label="Mobile No"
                     name="password"{...register("mobileno")}
                                        style={{
                                            width:'550px',
                                            fontSize:'18px',
                                          
                                        }}/>
                    <p style={{color:'red'}}>{errors.mobileno?.message}</p>

                                        <br />

                                        <TextField type="text" label="Job Name"
                     name="password"{...register("jobname")}
                                        style={{
                                            width:'550px',
                                            fontSize:'18px',
                                          
                                        }}/>
                    <p style={{color:'red'}}>{errors.jobname?.message}</p>

                                        <br />
                                        <label htmlFor="file">Upload Profile Photo</label>
                                        <TextField type="file"
                     name="password" onChange={savechange}
                                        style={{
                                            width:'550px',
                                            fontSize:'18px',
                                          
                                        }}/>

                                        <br />
                                        <label htmlFor="file">Upload Resume</label>
                                        <TextField type="file"  onChange={savechange1}
                     name="password"{...register("resume")}
                                        style={{
                                            width:'550px',
                                            fontSize:'18px',
                                          
                                        }}/>
                    <p style={{color:'red'}}>{errors.resume?.message}</p>

                                        <br />
        
           <br />
                    <button type="submit"
                    style={{
                        cursor:'pointer',
                        padding:'15px',
                        border:'none',
                        width:'300px',
                        backgroundColor:'blue',
                        borderRadius:'5px',
                        fontSize:'18px',
                        color:'white',
                        marginLeft:'140px',
                        boxShadow:'2px 2px 2px 2px grey'
                      
                    }}
                    >Register</button>
                    </form>
                </div>
            </div>

        </>

    )
};
const style = {
    position: 'absolute',
    top: '50%',
    left: '25%',
    transform: 'translate(-50%, -50%)',
    overflowY:'scroll',
    width: '102%',
    height:'100vh',
    p: 4,
  };
  
  
  
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={props.open1}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={props.open1}>
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
