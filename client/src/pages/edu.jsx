
import { TextField } from '@mui/material'
import { useState} from "react";
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Overview=()=>{
    const location=useLocation();
    const overD=location.state;
    const local=localStorage.getItem('user');
    const userData=JSON.parse(local);
    let valls=userData === null? false:true;
   console.log(valls);
   const schema=yup.object().shape({
    username:yup.string().required(),
    email:yup.string().email().required(),
    mobileno:yup.number().required(),
    
    // confirmpassword:yup.string().oneOf([yup.ref("password"),null])

})

    const{register,handleSubmit,formState:{ errors }}=useForm({
        resolver:yupResolver(schema)
    })
  
const overview="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse blanditiis reprehenderit est doloribus sunt dicta recusandae nulla voluptate in! Rem obcaecati, dolorem maiores aut nostrum ducimus sed suscipit aperiam odit reprehenderit iste excepturi saepe impedit vero perferendis tempore ut facere iure sapiente eos possimus natus animi. Deleniti amet ab ad aliquam odit inventore quas asperiores, tempora, voluptates facilis magnam provident hic officia! Blanditiis quam molestiae voluptatem in numquam delectus necessitatibus voluptas voluptates asperiores, expedita, commodi sit, obcaecati nihil odio inventore cumque voluptatibus deleniti! Quis quia voluptatem sed quisquam cum debitis, veritatis nobis aperiam odio accusamus quae autem doloribus voluptatibus nesciunt aliquid odit ex. Delectus provident ratione quisquam quidem est expedita quos quis, architecto doloribus consequuntur? Laborum veritatis expedita quae impedit placeat doloribus ipsum soluta atque? Quod, nam sapiente optio perspiciatis itaque officia atque placeat voluptates porro voluptatem ex vitae iusto. Quas illum id similique saepe, modi cum explicabo omnis.";

    const[appl,setAppl]=useState({
        name:'',
        email:'',
        number:''
    });
    console.log(appl);
    const cang=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setAppl(values=>({...values,[name]:value}))

    }

    const [app,setapp]=useState();
    const [ap,setap]=useState();


    
    const clicks=()=>{
        setapp(valls);
        setap(valls===false ? true : false)
    }

    console.log(overD);
    return(
        <div style={{
            width:'96.5vw',
            height:'100vh',
            display:"flex",
            justifyContent:'space-between'
        }}> 
        <div style={{position:'relative',width:'18vw',
                height:'100vh',Top:'0'}}>
            <div style={{
                width:'18vw',
                height:'100vh',
                backgroundColor:'gray',
                padding:'15px',Top:'0',position:'fixed'
            }}><h2 style={{fontSize:'25px',color:'white'}}>Guide line</h2><br />
            <p><Link to='title' style={{textDecoration:'none',fontSize:'21px',cursor:'pointer',color:'white'}} className='lion'>Title</Link></p><br />
            <p><Link to='location'style={{textDecoration:'none',fontSize:'21px',cursor:'pointer',color:'white'}} className='lion'>Location</Link></p><br />
            <p><Link to='descript'style={{textDecoration:'none',fontSize:'21px',cursor:'pointer',color:'white'}} className='lion'>Description</Link></p><br />
            <p><Link to='apply'style={{textDecoration:'none',fontSize:'21px',cursor:'pointer',color:'white'}} className='lion'>Apply</Link></p><br />
           
            </div>
            </div>
            <div style={{
                width:'78vw',
                marginLeft:'15px',
                marginRight:'15px',
            }}
            >
                {/* <h1>{props}</h1> */}
                <div id='title'>
                <h1 style={{fontSize:'50px',color:'black'}}>{overD.jobtitle}</h1>
                </div>
                <br />
                <div id='location'>
                <p style={{fontSize:'27px',color:'grey'}}>Skills :{overD.skills}</p><br />
                <p style={{fontSize:'27px',color:'grey'}}>Salary :{overD.salary}</p><br />
                <p style={{fontSize:'27px',color:'grey'}}>Location :{overD.location}</p><br />
                <p style={{fontSize:'27px',color:'grey'}}>Experience : {overD.experience} years</p><br />
                <p style={{fontSize:'27px',color:'grey'}}>Job Time : {overD.jobtime}</p><br />
                <p style={{fontSize:'27px',color:'grey'}}>Last Date : {overD.date}</p><br />

                </div>
                <br /><br />
                <div id='descript'>
                <h1 style={{fontSize:'40px',color:'black'}}>Description</h1><br />
                <p style={{
                    fontSize:'35px',
                    color:'darkgray'
                }}>{overview}</p>
                </div>
                <div style={{width:'100%',height:'70vh'}} id='apply'><br /><br />
                    <h1 style={{fontSize:'40px',color:'black'}}>Apply the form</h1>
                    {app ? <h2 style={{color:'green'}}>Apply successfully</h2>:''}
                    {ap ? <h2 style={{color:'red'}}>Please Login ...</h2>:''}
                    <br />
                      <TextField type='text' label='Name' style={{width:'500px',fontsize:'30px'}} {...register('username')} onChange={cang}/><br /><p style={{color:'red'}}>{errors.username?.message}</p> <br />
                      <TextField type='email' label='Email' style={{width:'500px',fontSize:'30px'}}onChange={cang} {...register('email')}/> <br /><p style={{color:'red'}}>{errors.email?.message}</p> <br />
                      <TextField type='number' label='mobile no' style={{width:'500px',fontSize:'30px'}}onChange={cang} {...register('mobileno')} /> <br /> <p style={{color:'red'}}>{errors.mobileno?.message}</p><br />
                      <button className='btnss' style={{width:'500px'}} onClick={handleSubmit(clicks)}>APPLY</button>
                </div>
            </div>
          
        </div>
    )
}
export default Overview;