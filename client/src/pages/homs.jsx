import Marquee from 'react-fast-marquee';
import { useLocation } from "react-router-dom";
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const Homs=()=>{
    const numb=['0','1','2','3','4','5','6'];
    const [user,setUser]=useState("");

    const location=useLocation();
    const navigate=useNavigate();
    const [close,setClose]=useState(false);
    const rout=()=>{
   
        console.log('post');
        navigate('post');
        console.log('repost');
    }
    const schema=yup.object().shape({
        mobile:yup.number().required()
    })
    const{register,handleSubmit,formState:{ errors }}=useForm({
        resolver:yupResolver(schema)
    });
    const handle=(data)=>{
        console.log(data);
        console.log(data.mobile)
        try{
        axios.post('http://localhost:8000/joblogin',{mobile:data.mobile})
        .then((res)=>{
            if(res.data.msg){
              setUser(res.data.msg);
              
            }
            else {
              localStorage.setItem("jobrecuriter",JSON.stringify(res.data));
              navigate('/jobrecuriter')
            }
          })
      }
      catch(err){
          console.log(err.msg);
      }

    }
const rout1=()=>{
  
    console.log('resume');
    navigate('resume');
    console.log('resssss');
};
  setTimeout(()=>setClose(false),8000);
    return(
        <>
        <div style={{
            backgroundColor:"white",
            width:"100%",
            height:"87vh",
            position:"relative"
        }}>
            <div style={{
                display:"flex",
                color:"teal",
                position:"relative",
                padding:"20px"
            }}>
                      {close ?
              <div style={{width:'500px',display:'flex',justifyContent:'space-between',backgroundColor:'green',border:'none',borderRadius:'8px',padding:'7px'}}>
                <h4 style={{color:'white'}}>{location.state}</h4>
              </div>:''}
                <div style={{
                    marginTop:"50px",
                    width:'70%'
                }}>
                    <h1 style={{fontSize:"60px"}}>
                        First register get our jobs, Free Resume Buillder
                    </h1>
           
                    <button type="submit"
                    style={{
                        padding:'15px',
                        border:'none',
                        width:'150px',
                        backgroundColor:'blue',
                        borderRadius:'5px',
                        fontSize:'21px',
                        color:'white',
                        boxShadow:'2px 2px 2px 2px grey'
                      
                    }} onClick={rout1}
                    >Click Here</button><br />
                    <br /><br /> <br /><br /><h3>Top companies</h3>
                    <div style={{width:'80%',height:'150px',border:'none',overflow:'hidden'}}>
                        <Marquee  direction="right">
                            {numb.map((i)=>{
                           return <div key={i} style={{marginRight:'25px'}}><img  src={require(`./image/ii${i}.jpeg`)} alt='img' width='170px' height='150px'  /></div>})}
                            {/* <h3>Hello</h3> */}
                        </Marquee>
                    </div>
                </div>
                <div>
                    <div style={{
                        marginTop:"50px",
                        width:"400px",
                        height:"500px",
                        borderRadius:"10px",
                        padding:'10px',
                        boxShadow:"0 0 6px 3px gray",
                        color:'darkslategray'
                    }}>
                        <h1>Job recruiter post our job details</h1>
                        <br />
                        <button type="submit"
                    style={{
                        padding:'15px',
                        border:'none',
                        width:'150px',
                        backgroundColor:'blue',
                        borderRadius:'5px',
                        fontSize:'21px',
                        color:'white',
                        marginLeft:'20px',
                        boxShadow:'2px 2px 2px 2px grey'
                      
                    }} onClick={rout}
                    >Click Here</button>
                    <br /><br />
                    <div style={{padding:'20px',position:'relative'}}>
                        <h3>Job recruiter login</h3><br />
                        <TextField type='text' label='Mobile no' {...register('mobile')} style={{width:'340px',borderRadius:'5px',position:'relative'}}/>
                      <br />
                      <p style={{color:'red'}}>{errors.mobile?.message}</p> 
                      <p style={{color:'red'}}>{user}</p> 

                      <br /> <button className='rec' onClick={handleSubmit(handle)}>Login</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default Homs;