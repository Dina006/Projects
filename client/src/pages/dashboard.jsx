
import './static/App.css';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { TextField } from '@mui/material';
import {  useState,useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import { Link } from 'react-scroll';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Dashboard=()=>{
  const location=useLocation();
  const [upd,setUpdate]=useState();
const [close,setClose]=useState(false);
const navigate=useNavigate();
const local=localStorage.getItem('user');
const userData=JSON.parse(local);
const data=userData.datas.data[0];
const [update,setName]=useState({
  username:null,
  jobname:null,
  skills:null,
  location:null,
  email:null,
  mobileno:null,
  age:null,
  experience:null
})
console.log(update);
const updateData=()=>{
axios.put('http://localhost:8000/update',{
  id:data.id,
  jobname:update.jobname !==null ?update.jobname :data.jobname,
  skills:update.skills !==null ?update.skills :data.skills,
  location:update.location !==null ?update.location :data.location,
  email:update.email !==null ?update.email :data.Email,
  mobileno:update.mobileno !==null ?update.mobileno :data.mobileno,
  age:update.age !==null ?update.age :data.age,
  experience:update.experience !==null ?update.experience :data.experience

}).then((res)=>{
  setUpdate(res.data.update);
}).catch((err)=>{
  console.log(err);
})
}
const setData=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setName(values=>({...values,[name]:value}))
}
console.log(update.username);
console.log(update.age);
const clic=()=>{
  navigate('/jobs',{replace:true})
}
  const handlee=()=>{
    // e.preventdefault();
    // alert('Close Button')
    setClose(false)
  }
  setTimeout(()=>setClose(false),8000);
  

    
      useEffect(()=>{
      setClose(location.state)
    },[location])




    return(
        <>
        {/* <h1>Dashboard</h1> */}
          <div style={{display: "flex"}}>
            <div style={{width: "150px",height: '100vh',position:'relative'}}>
            <div style={{width: "150px",height: '100vh',position:'fixed'}}>
            <div style={{width: "150px",height: '100vh',
          backgroundColor: "rgb(30, 30, 140)",color:'white',
          Top:'0',position:'sticky',justifyContent:'flex-start'}}>
          <h2 style={{cursor:'pointer'}}><Link  to={'home'} spy={true} smooth={true} offset={true} duration={500}>Dashboard</Link> </h2>
          {/* //<NavLink className='dash-link' to={'jobs'}>search Jobs</NavLink> */}
            <div style={{marginTop:'50px'}}>
            <h4 className='dash-link' onClick={()=>navigate('/')}>Home</h4>
            <h4  className='dash-link' onClick={clic}>search jobs</h4>
            <h4 className='dash-link'><Link  to={'apply'} spy={true} smooth={true} offset={true} duration={500}>Applied Jobs</Link></h4>
            <h4 className='dash-link'><Link  to={'edit'} spy={true} smooth={true} offset={true} duration={500}>Edit Profile</Link></h4>
            <h4 className='dash-link' onClick={()=>navigate('/courses')}>Free Courses</h4>
            <h4 className='dash-link' onClick={()=>navigate('/interviewtips')}>interviewtips</h4></div>
               {/* <EditIcon sx={{color:'white'}} /> */}
          </div>
          </div></div>
            <div style={{height: '100vh',marginLeft:'10px'}}>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <div style={{display:'flex'}} id='home'>
              <h2>Hello welcome !</h2><h2 style={{color:'royalblue'}}>{data.UserName}</h2>
              </div>
              {close ?
              <div  style={{width:'500px',display:'flex',justifyContent:'space-between',backgroundColor:'green',border:'none',borderRadius:'8px',padding:'7px'}}>
                <h4 style={{color:'white'}}>Login Successfully ...</h4>
                <h4 style={{color:'white',cursor:'pointer'}} onClick={handlee}>X</h4>
              </div>:''}
              </div>
              <hr />
              <h2>Today job lists</h2>
                    <div style={{height: '60vh'}} >
                      {/* <div style={{padding:}}></div> */}
                      <Grid2 columnSpacing={{xs:1,sm:1,md:2}} sx={{width: '85vw',color:'white',marginLeft:'20px'}} container>
                        
                        <Grid2 item xs={5} sx={{boxShadow:"0 0 10px 5px grey",height:'160px',margin:'20px',width:'600px'}}>
                        <div style={{display:'flex',color:'teal'}}>
                          
                          <div >
                            <h2>MERN stack developer</h2>
                            <p style={{fontSize:'22px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, rerum?</p>
                            <p style={{fontSize:'18px'}}>Salary :4,00,000 - 8,00,000 Lpa</p><br/>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                            <p style={{fontSize:'18px'}}>Location : Chennai.</p>
                            <button style={{width:'100px',border:'none',borderRadius:'5px',backgroundColor:'orange'}}>APPLY</button>
                            </div>
                            </div></div>
                        </Grid2>
                        <Grid2 item xs={5} sx={{boxShadow:"0 0 10px 5px grey",height:'160px',margin:'20px',width:'600px'}}>
                          <div style={{display:'flex',color:'teal'}}>
                          <div >
                          <h2>Junior Java developer</h2>
                            <p style={{fontSize:'22px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, rerum?</p>
                            <p style={{fontSize:'18px'}}>Salary :4,00,000 - 8,00,000 Lpa</p><br/>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                            <p style={{fontSize:'18px'}}>Location : Chennai.</p>
                            <button style={{width:'100px',border:'none',borderRadius:'5px',backgroundColor:'orange'}}>APPLY</button>
                            </div>
                          </div>
                          </div>
                        </Grid2>
                        <Grid2 item xs={5} sx={{height:'160px',boxShadow:"0 0 10px 5px grey",margin:'20px',width:'600px'}}>
                          {/* <Item>dinesh</Item> */}
                          <div style={{display:'flex',color:'teal'}}>
                          <div >
                          <h2>Python developer</h2>
                            <p style={{fontSize:'22px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, rerum?</p>
                            <p style={{fontSize:'18px'}}>Salary :4,00,000 - 8,00,000 Lpa</p><br/>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                            <p style={{fontSize:'18px'}}>Location : Chennai.</p>
                            <button style={{width:'100px',border:'none',borderRadius:'5px',backgroundColor:'orange'}}>APPLY</button>
                            </div>
                            </div></div>
                        </Grid2>
                        <Grid2 item xs={5} sx={{height:'160px',boxShadow:"0 0 10px 5px grey",margin:'20px',width:'600px'}}>
                        <div style={{display:'flex',color:'teal'}}>
                          <div >
                          <h2>React js developer</h2>
                            <p style={{fontSize:'22px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, rerum?</p>
                            <p style={{fontSize:'18px'}}>Salary :4,00,000 - 8,00,000 Lpa</p><br/>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                            <p style={{fontSize:'18px'}}>Location : Chennai.</p>
                            <button style={{width:'100px',border:'none',borderRadius:'5px',backgroundColor:'orange'}}>APPLY</button>
                            </div>
                            </div></div>
                          {/* <Item>dinesh</Item> */}
                        </Grid2>
                      </Grid2>
                      </div>
             <br />
              <section id="edit">
              <div  style={{height: '60vh',width: '85vw',boxShadow:"0 0 10px 5px grey",padding:'20px',margin:'15px'}}>
             <h2>Edit Profile :</h2>
             <h5 style={{color:'green'}}>{upd}</h5>
             <div style={{display:'flex',justifyContent:'space-between',width:'70vw',padding:'10px'}}><div>
             <TextField  placeholder={data.UserName} onChange={setData} name='username'
             id='outlined-password-input' 
             label='FullName'
             type='text'
             style={{
              width:'400px',
              marginTop:'18px'
             }}
             /><br />
                        <TextField  placeholder={data.jobname} name='jobname'onChange={setData}
             id='outlined-password-input'
             label='Job Name'
             type='text'
                  style={{
              width:'400px',
              marginTop:'18px'
             }}
             /><br />
            <TextField  placeholder={data.skills} name='skills' onChange={setData}
             id='outlined-password-input'
             label='Skills'
             type='text'
                  style={{
              width:'400px',
              marginTop:'18px'
             }}
             /><br />
                        <TextField placeholder={data.location} name='location' onChange={setData}
             id='outlined-password-input'
             label='Location'
             type='text'
                  style={{
              width:'400px',
              marginTop:'18px'
             }}
             /><br />
             </div>
             <div >
                         <TextField placeholder={data.Email} name='email' onChange={setData}
             id='outlined-password-input'
             label='Email'
             type='email'
                  style={{
              width:'400px',
              marginTop:'18px'
             }}
             /><br />
                        <TextField  placeholder={data.mobileno} name='mobileno' onChange={setData}
             id='outlined-password-input'
             label='Mobile no'
             type='number'
                style={{
              width:'400px',
              marginTop:'18px'
             }}
             /><br />
                        <TextField  placeholder={data.age} name='age' onChange={setData}
             id='outlined-password-input'
             label='Age'
             type='text'
                  style={{
              width:'400px',
              marginTop:'18px'
             }}
             /><br />
                        <TextField  placeholder={data.experience} name='experience' onChange={setData}
             id='outlined-password-input'
             label='Experience'
             type='text'
                 style={{
              width:'400px',
              marginTop:'18px'
             }} 
             /><br />
             <button className="btn" onClick={updateData}>Update</button>
             
             </div>
             </div>
             </div>
            </section><br />
            <div id="apply" style={{height: '40vh',width: '85vw',boxShadow:"0 0 10px 5px grey",padding:'20px',margin:'15px'}}>
                <h2>Applied Jobs :</h2>
                <table>
                  <tr>
                  <th>Job Name</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Salary</th>
                  </tr>
                  <tr>
                    <td>Senior java developer</td>
                    <td>Zoho</td>
                    <td>Madurai</td>
                    <td>5 Lpa</td>
                  </tr>
                  <tr>
                    <td>Senior java developer</td>
                    <td>TCS</td>
                    <td>Chennai</td>
                    <td>8 Lpa</td>
                  </tr>
                  <tr>
                    <td>Senior java developer</td>
                    <td>Freshdesk</td>
                    <td>Bangalore</td>
                    <td>10 Lpa</td>
                  </tr>
                </table>
              </div>
            </div>
            </div>
        </>
    )
}
export default Dashboard;