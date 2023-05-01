import axios from 'axios';

// import 'react-quill/dist/quill.snow.css';
import { TextField } from "@mui/material";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useState} from 'react';
import Photo from './images.jpeg'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Avatar } from "@mui/material";
// import './static/App.css';
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Profilss from '../resume/profile.jpg'
import * as React from 'react';

const Jobpost=()=>{
  const navigate=useNavigate();
  const [job,setjob]=useState([]);
  const [exist,setExist]=useState();
  const local=localStorage.getItem('jobrecuriter');
  const userData=JSON.parse(local);
 const loginId=userData.datas.data[0].id;
 console.log(loginId);
 const schema=yup.object().shape({
    name:yup.string().required(),
    email:yup.string().required(),
    mobile:yup.string().required(),
    company:yup.string().required(),
    address:yup.string().required(),
    location:yup.string().required(),
    salary:yup.string().required(),
    overview:yup.string(),
    jobtime:yup.string().required(),
    weburl:yup.string().required()

});
const handleOpen=()=>{
    localStorage.removeItem('jobrecuriter');
    navigate('/');
}

axios.post('http://localhost:8000/alljob',{loginid:loginId})
.then((res)=>{
    setjob(res.data.data)
})
console.log(job);
   const [sucess,setsucess]=useState();

   const{register,handleSubmit,formState:{ errors }}=useForm({
       resolver:yupResolver(schema)
   });
   const handle=(data)=>{
       console.log(data);
       axios.post('http://localhost:8000/jobposting',{
           jobtitle:data.name,
           description:data.email,
           experience:data.mobile,
           skills:data.company,
           loginid:loginId,
           date:data.address,
           location:data.location,
           salary:data.salary,
           overview:data.jobtime,
           weburl:data.weburl
       }).then((res)=>{
           if(res.data.er){
               setExist(res.data.er)
           }
           else{
               setsucess(res.data.suc)
           }
       }).catch((err)=>{
           console.log(err);
       })
       
   }
    return(
        <>

        <div className="links" style={{zIndex:'1'}}>
        <nav className="navbar">
            <div style={{display:"flex"}}>
                <NavLink to="/" className="logo"><b>JOB</b>  <span style={{fontSize:'30px'}}>search</span></NavLink>
                <Link to="profile" style={{cursor:'pointer'}} className="linns">Profile</Link>
                <Link to="jobpost" 
                style={{cursor:'pointer'}}
                          className="linns">Job Post</Link>
                <Link to="alljobpost" style={{cursor:'pointer'}} className="linns">All Post jobs</Link>
            </div>
            
            <div className='stik' >
                    <div style={{display:'flex'}}>
 <button className="btn" onClick={handleOpen}>Logout</button> 
                <Avatar sx={{
                    marginTop:'20px',
                    marginRight:'20px'
                }} alt="Remy Sharp" src='' />
           
                </div>
            
            </div>
        </nav>
        </div>
        <div style={{width:'100%',height:'100vh',backgroundColor: 'darkslategray'}} id="profile">
             <h1 style={{textAlign:'center',color: 'aquamarine'}}>Hello Welcome ! {userData.datas.data[0].name}</h1>
             <div style={{display:'flex',margin:'15px',border:'5px solid white'}}>
                    <div style={{width:'40%',height:'70vh',margin:'20px'}}>
               <img src={Photo} alt='' width='100%' height='100%'  />
                </div>
                <div style={{width:'50%',margin:'20px',color:'white'}}>
                    <h2 style={{fontSize:'35px'}}>Profile</h2><br /><br />
                    <h3 style={{fontSize:'30px'}}>Name : {userData.datas.data[0].name}</h3><br />
                   <h3 style={{fontSize:'30px'}}>Email : {userData.datas.data[0].email}</h3><br />
                   <h3 style={{fontSize:'30px'}}>Mobile Number : {userData.datas.data[0].mobile}</h3><br />
                   <h3 style={{fontSize:'30px'}}>Company Name : {userData.datas.data[0].company}</h3><br />
                   <h3 style={{fontSize:'30px'}}>Company Address : {userData.datas.data[0].address}</h3>
                                       </div>
                
                </div>
        </div>
        <div style={{width:'100%',height:'100vh' }} id="jobpost">


    <div style={{width:'100%'}}><br />
        <h1 style={{color:'darkblue',fontSize:'40px',textAlign:'center'}}>JOB POST</h1><br /><br />
        <p style={{color:'red'}}>{exist}</p>
        <p style={{color:'green',fontSize:'25px',marginLeft:'225px'}}>{sucess}</p><br />
        <div style={{marginLeft:'225px',Top:'35px',display:'flex'}}>
   
        <div style={{padding:'20px'}}>
              <TextField type='text' label='Jobtitle'{...register('name')} style={{width:'500px',fontsize:'24px'}} />  <br />
              <p style={{color:'red'}}>{errors.name?.message}</p>
              <br />
              <TextField type="text" label='description' {...register('email')} style={{width:'500px',fontsize:'24px'}} /> <br />
              <p style={{color:'red'}}>{errors.email?.message}</p>
              
              <br />
              <TextField type="text" label='Experience'{...register('mobile')} style={{width:'500px',fontsize:'24px'}} /><br />
              <p style={{color:'red'}}>{errors.mobile?.message}</p>
              
              <br /> 
              <TextField type="text" label='Skills'{...register('company')} style={{width:'500px',fontSize:'24px'}} /><br />
              <p style={{color:'red'}}>{errors.company?.message}</p>
              
              <br />
              <TextField type="date" label='Last date'{...register('address')} style={{width:'500px',fontSize:'24px'}} /><br />
              <p style={{color:'red'}}>{errors.address?.message}</p>
              
              <br />
              <br />
              <TextField type="tel" label='Location'{...register('location')} style={{width:'500px',fontSize:'24px'}} /><br />
              <p style={{color:'red'}}>{errors.location?.message}</p>
              </div>
              <div style={{padding:'20px'}}>
              <TextField type="tel" label='Salary'{...register('salary')} style={{width:'500px',fontSize:'24px'}} /><br />
              <p style={{color:'red'}}>{errors.salary?.message}</p>
              
              <br />
              <br />
              <TextField type="text" label='Overview'{...register('overview')} style={{width:'500px',fontSize:'24px'}} /><br />
              <p style={{color:'red'}}>{errors.overview?.message}</p>
              <br />
              <br />
              <TextField type="text" label='Job Time'{...register('jobtime')} style={{width:'500px',fontSize:'24px'}} /><br />
              <p style={{color:'red'}}>{errors.jobtime?.message}</p>
              
              <br />
              <br />
              <TextField type="text" label='Web url'{...register('weburl')} style={{width:'500px',fontSize:'24px'}} /><br />
              <p style={{color:'red'}}>{errors.weburl?.message}</p>
              
              <br />
              <button type="submit" onClick={handleSubmit(handle)}
                style={{
                    padding:'10px',
                    border:'none',
                    width:'500px',
                    backgroundColor:'blue',
                    borderRadius:'5px',
                    fontSize:'22px',
                    color:'white',
                    boxShadow:'2px 2px 2px 2px grey'
                  
                }}
                >
                Register</button>
                </div>
              </div>

              {/* <ReactQuill theme="snow" style={{
                                        width:'1000px',
                                        height:'250px',
                                        fontSize:'28px',
                                        borderRadius:'7px',
                                        border:'none',
                                        boxShadow:'2px 2px 2px 2px grey'
                                    }}/><br /><br /><br /><br /> */}
            
      
    </div>

        </div>
        <div style={{width:'100%',height:'100vh'}} id="alljobpost">
            <br /><br />
            <div> <h1 style={{color:'darkblue',fontSize:'40px',textAlign:'center'}}>All Post Jobs</h1>
            <br /><br />
            <div>
                <table style={{border:'collapse',width:'100%',fontSize:'25px'}}>
                    <tr>
                    <th>S.No</th>
                    <th>Job Title</th>
                    <th>Experience</th>
                    <th>Salary</th>
                    <th>Job Time</th>
                    <th>Skills</th>
                    <th>Last Date</th>
                    <th>Location</th>
                    </tr>
            {job.map((jobs,i)=>{
                return(
                <tr key={i}>
                    <td>{jobs.id}</td>
                <td>{jobs.jobtitle}</td>
                <td>{jobs.experience} year</td>
                <td>{jobs.salary}</td>
                <td>{jobs.jobtime}</td>
                <td>{jobs.skills}</td>
                <td>{jobs.date}</td>
                <td>{jobs.location}</td>
                </tr>
    
            )})}
            </table>
            </div>
            </div>
        </div>
       
        
    </>

    )
};
export default Jobpost;