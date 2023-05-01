import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import axios from 'axios';
import Resume from './resumes'
import Typography from '@mui/material/Typography';
import {useState} from 'react';
const Resumeform=()=>{
   const[userinfo,setuserinfo]=useState({
    file:[],
    filepreview:null,
   });
const[rename,setName]=useState({
    fullname:'',
    job:'',
    email:'',
    mobile:'',
    textarea:"",
    language1:'',
    language2:'',
    language3:'',
    skill1:'',skill2:"",skill3:""
});
const onchangeInput=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setName(values=>({...values,[name]:value}))

}
const[fel,setFel]=useState('')

const [profil,setprofile]=useState();
   const savechange=(e)=>{
    setuserinfo({...userinfo,
        file:e.target.files[0],
        filepreview:URL.createObjectURL(e.target.files[0]),
    })

}
// const[isSucces,setSuccess]=useState(null);
const handleOpen1 = () => {
    const formdata=new FormData();
    formdata.append('avatar',userinfo.file);
    console.log(rename);
    axios.post('http://localhost:8000/imageupload',formdata,{
        headers:{"content-type":"multipart/form-data"}
    })
    .then(res=>{
        console.log(res.data)
        if(res.data.success===1){
            console.log("Image upload successfully...")
        }
    })
    setprofile(userinfo.filepreview)
    setOpen1(true);
   console.log(userinfo.filepreview);
    setFel(rename)
    
};
    const [open1, setOpen1] = useState(false);
    // const handleClose = () =>setOpen1(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100vw",
        overflowY:'scroll',
        height:"100vh",
        p:4
      };
 
    return(
    <div>
        <div style={{
            width:"98.2vw",
            height:"40vh",
            backgroundColor:"rgb(17, 17, 120)",
            color:"white",
            marginTop:"0px"
        }}>
            <div><br /><br /><br />
            <h1 style={{textAlign:"center",fontSize:'50px'}}>Free Resume Builder</h1>
            </div>
        </div>
        <div style={{
            marginLeft:"5%",
            display:"flex"
        }}>
            {/* {isSucces !== null ? <h4>{isSucces}</h4>:"null"} */}
            {/* {userinfo.filepreview !==null ?
            <img src={userinfo.filepreview} alt="uploadimg"/>:null} */}
            <div>
             <label htmlFor="fullname"><h3>Upload your Image :</h3></label><br />
                    <input type='file'placeholder="Enter your fullname" onChange={savechange}
                    name="file"
                    style={{
                        padding:'10px',
                        width:'600px',
                        border:'none',
                        fontSize:'18px',
                        borderRadius:'7px',
                        boxShadow:'2px 2px 2px 2px grey'
                    }}/><br />
        <label htmlFor="fullname"><h3>FullName :</h3></label><br />
                    <input type='text'placeholder="Enter your fullname"
                    name="fullname" onChange={onchangeInput}
                    style={{
                        padding:'10px',
                        width:'600px',
                        border:'none',
                        fontSize:'18px',
                        borderRadius:'7px',
                        boxShadow:'2px 2px 2px 2px grey'
                    }}/><br />
         <label htmlFor="fullname"><h3>Job :</h3></label><br />
                    <input type='text'placeholder="Enter your fullname"
                    name="job" onChange={onchangeInput}
                    style={{
                        padding:'10px',
                        width:'600px',
                        border:'none',
                        fontSize:'18px',
                        borderRadius:'7px',
                        boxShadow:'2px 2px 2px 2px grey'

                    }}/>
                    <br /><h2>Contact :</h2>
                            <label htmlFor="fullname"><h3>Email :</h3></label><br />
                    <input type='email'placeholder="Enter your fullname"
                    name="email"onChange={onchangeInput}
                    style={{
                        padding:'10px',
                        width:'600px',
                        border:'none',
                        fontSize:'18px',
                        borderRadius:'7px',
                        boxShadow:'2px 2px 2px 2px grey'
                    }}/>
                            <label htmlFor="fullname"><h3>Mobile No :</h3></label><br />
                    <input type='text'placeholder="Enter your fullname"
                    name="mobile"onChange={onchangeInput}
                    style={{
                        padding:'10px',
                        width:'600px',
                        border:'none',
                        fontSize:'18px',
                        borderRadius:'7px',
                        boxShadow:'2px 2px 2px 2px grey'
                    }}/><br />
                 
                                 <label htmlFor="fullname"><h3>Address :</h3></label><br />
                    <input type='tel'placeholder="Enter your fullname"
                    name="textarea"onChange={onchangeInput}
                    style={{
                        padding:'10px',
                        width:'600px',
                        border:'none',
                        fontSize:'18px',
                        borderRadius:'7px',
                        boxShadow:'2px 2px 2px 2px grey'
                    }}/></div>
                    <div>
                        <div style={{marginLeft:"5%"}}>
                    <h2>Languages :</h2>
                    <label htmlFor="fullname"><h3>1 :</h3></label><br />
                    <input type='text'placeholder="Enter your fullname"
                    name="language1"onChange={onchangeInput}
                    style={{
                        padding:'10px',
                        width:'600px',
                        border:'none',
                        fontSize:'18px',
                        borderRadius:'7px',
                        boxShadow:'2px 2px 2px 2px grey'
                    }}/><br />
                             <label htmlFor="fullname"><h3>2 :</h3></label><br />
                    <input type='text'placeholder="Enter your fullname"
                    name="language2"onChange={onchangeInput}
                    style={{
                        padding:'10px',
                        width:'600px',
                        border:'none',
                        fontSize:'18px',
                        borderRadius:'7px',
                        boxShadow:'2px 2px 2px 2px grey'
                    }}/><br />
                             <label htmlFor="fullname"><h3>3 :</h3></label><br />
                    <input type='text'placeholder="Enter your fullname"
                    name="language3"onChange={onchangeInput}
                    style={{
                        padding:'10px',
                        width:'600px',
                        border:'none',
                        fontSize:'18px',
                        borderRadius:'7px',
                        boxShadow:'2px 2px 2px 2px grey'
                    }}/><br />
                    <h2>Skills</h2><br />
                    <label htmlFor="fullname"><h3>1 :</h3></label><br />
                    <input type='text'placeholder="Enter your fullname"
                    name="skill1"onChange={onchangeInput}
                    style={{
                        padding:'10px',
                        width:'600px',
                        border:'none',
                        fontSize:'18px',
                        borderRadius:'7px',
                        boxShadow:'2px 2px 2px 2px grey'
                    }}/><br />
                                    <label htmlFor="fullname"><h3>2 :</h3></label><br />
                    <input type='text'placeholder="Enter your fullname"
                    name="skill2"onChange={onchangeInput}
                    style={{
                        padding:'10px',
                        width:'600px',
                        border:'none',
                        fontSize:'18px',
                        borderRadius:'7px',
                        boxShadow:'2px 2px 2px 2px grey'
                    }}/><br />
                                    <label htmlFor="fullname"><h3>3 :</h3></label><br />
                    <input type='text'placeholder="Enter your fullname"
                    name="skill3"onChange={onchangeInput}
                    style={{
                        padding:'10px',
                        width:'600px',
                        border:'none',
                        fontSize:'18px',
                        borderRadius:'7px',
                        boxShadow:'2px 2px 2px 2px grey'
                    }}/><br />
    
        <button onClick={handleOpen1}
         style={{
            padding:'15px',
            border:'none',
            width:'100px',
            backgroundColor:'blue',
            borderRadius:'5px',
            fontSize:'18px',
            color:'white',
            marginLeft:'500px',
            boxShadow:'2px 2px 2px 2px grey'
          
        }}>Genarate</button>
        </div>
        </div>
        </div>
    <Modal
     
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open1}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >

      <Fade in={open1}>
     
        <Box sx={style}>
          {/* <Typography id="transition-modal-title" variant="h6" component="h2">
            
          </Typography> */}
      <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {/* Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}

          <Resume 
          profil={profil} 
          fel={fel}
          setOpen1={setOpen1} />
          </Typography>
        </Box>
      </Fade>
    </Modal>
  </div>
);
}

export default Resumeform;