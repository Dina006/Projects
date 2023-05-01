// import ReactQuill from "react-quill";
import axios from 'axios';

// import 'react-quill/dist/quill.snow.css';
import { TextField } from "@mui/material";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useState} from 'react';
// import { TextareaAutosize } from "@mui/material";
const Post=()=>{
    const schema=yup.object().shape({
        name:yup.string().required(),
        email:yup.string().email().required(),
        mobile:yup.number().required(),
        company:yup.string().required(),
        address:yup.string().required()
    });
    const [exist,setExist]=useState();

    const [sucess,setsucess]=useState();

    const{register,handleSubmit,formState:{ errors }}=useForm({
        resolver:yupResolver(schema)
    });
    const handle=(data)=>{
        console.log(data);
        axios.post('http://localhost:8000/jobpost',{
            name:data.name,
            email:data.email,
            mobile:data.mobile,
            company:data.company,
            address:data.address
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
        <div style={{width:'100vw'}}>
            <h1 style={{color:'darkblue',fontSize:'40px',textAlign:'center'}}>JOB RECRUITER - REGISTER</h1><br /><br />
            <div style={{marginLeft:'500px',Top:'35px'}}>
            <p style={{color:'red'}}>{exist}</p>
            <p style={{color:'green',fontSize:'25px'}}>{sucess}</p><br />
                  <TextField type='text' label='name'{...register('name')} style={{width:'500px',fontsize:'24px'}} />  <br />
                  <p style={{color:'red'}}>{errors.name?.message}</p>
                  <br />
                  <TextField type="email" label='Email' {...register('email')} style={{width:'500px',fontsize:'24px'}} /> <br />
                  <p style={{color:'red'}}>{errors.email?.message}</p>
                  
                  <br />
                  <TextField type="text" label='Mobile no'{...register('mobile')} style={{width:'500px',fontsize:'24px'}} /><br />
                  <p style={{color:'red'}}>{errors.mobile?.message}</p>
                  
                  <br /> 
                  <TextField type="text" label='Company Name'{...register('company')} style={{width:'500px',fontSize:'24px'}} /><br />
                  <p style={{color:'red'}}>{errors.company?.message}</p>
                  
                  <br />
                  <TextField type="tel" label='Company Address'{...register('address')} style={{width:'500px',fontSize:'24px'}} /><br />
                  <p style={{color:'red'}}>{errors.address?.message}</p>
                  
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
                  {/* <ReactQuill theme="snow" style={{
                                            width:'1000px',
                                            height:'250px',
                                            fontSize:'28px',
                                            borderRadius:'7px',
                                            border:'none',
                                            boxShadow:'2px 2px 2px 2px grey'
                                        }}/><br /><br /><br /><br /> */}
                
          
        </div>
    )
}
export default Post;