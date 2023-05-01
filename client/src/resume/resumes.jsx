
// import {ReactToPrint} from 'react-to-print';
import ReactToPrint from 'react-to-print';
import { useRef } from "react";
const Resume =(props)=>{
const componentRef=useRef();
const pageStyle=`@page{
    size:2.5in 4in
}`
const handleClose=()=>{
    props.setOpen1(false);
}
    return(
        <>
        <div style={{
    display:'flex',
    justifyContent:'space-between',
}}>
         <ReactToPrint 
         pageStyle={pageStyle}
    trigger={()=>{
        return(
 <button style={{
        padding:'15px',
        border:'none',
        width:'100px',
        backgroundColor:'blue',
        borderRadius:'5px',
        fontSize:'18px',
        color:'white',
        boxShadow:'2px 2px 2px 2px grey'
      
    }}>Print</button>) }}
    content={()=> componentRef.current}
    />



<button  style={{
                        padding:'15px',
                        border:'none',
                        width:'100px',
                        backgroundColor:'red',
                        borderRadius:'5px',
                        fontSize:'18px',
                        color:'white',
                        boxShadow:'2px 2px 2px 2px grey'
                      
                    }}  onClick={handleClose}>Close</button></div>
        

       
        <div 
        ref={componentRef}
        style={{
            position:'relative',
            width:'65vw',
            height:'110vh',
            left:'0',
            right:'0',
            justifyItems:'center',
            alignItems:'center',
            marginLeft:'230px',
            zIndex:'2'
        }}>
           
            <div style={{
            position:'relative',
            width:'65vw',
            height:'32vh',
            backgroundColor:'rgb(17, 17, 120)'
            }}>
                <div style={{
                    display:'flex',
                    padding:'5px',
                    color:'white',
                    
                }}>
                    <div style={{
                        position:'relative', 
                        width:'35%',
                        height:'30vh',
                        backgroundColor:'white',
                        borderRadius:'50%',
                        margin:'2px',
                        marginLeft:'10px',
                        overflow:'hidden'
                    }}>
                        {props.profil ?<img src={props.profil} alt="profiles1" width='100%' height='100%' />:<img src={require("./profile.jpg")} alt="profile" width="100%" height="100%" />}
                    </div>
                    <div style={{
                        marginLeft:'40px'
                    }}>
                        <div>
                        <h1> {props.fel.fullname !== "" ? props.fel.fullname :"Dineshkumar P"}</h1>
                        <h3>{props.fel.job !=="" ? props.fel.job :"Full Stack Developer"}</h3>
                        <h4>About</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Vitae alias architecto eum neque aperiam,
                             dolore explicabo ratione porro magnam at!</p>
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* bottom content */}
            <div style={{
                display:'flex',
                width:'65vw'
            }}>
                {/* left side content */}
                <div style={{
                    width:'20vw',
                height:'110vh',
                backgroundColor:'white',
                padding:'6px'

                }}>
     <div><br />
        <h1>CONTACT</h1><hr />
        <p>{props.fel.mobile !=="" ?props.fel.mobile : "+91 998825787"}</p><br />
        <p>{props.fel.email !=="" ?props.fel.email :"dineshkumar@gmail.com"}</p><br />
        <p>1/123 , North street efdhghgjhhhjuyuygsg</p>
        <br /><br />
        <h1>SKILLS</h1><hr />
        <p>React</p><br />
        <p>Node js</p>
        <br />
        <p>Express js</p><br />
        <p>Python</p>
        <br /><br />
        <h1>LANGUAGES</h1><hr />
        <p>Tamil</p><br />
        <p>English</p>
     </div>

                </div>
                {/* right side content */}
                <div style={{
                    width:'45vw',
                height:'110vh',
                backgroundColor:'grey',
                color:'white',
                padding:'10px'

                }} >
                    <div><h1>WORK EXPERIANCE </h1>
                    <h2>Web Devlepment</h2>
                    <p style={{fontSize:'20px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nisi. Cum quod pariatur suscipit necessitatibus distinctio porro eius culpa laudantium!</p>
                    <br />
                     <h2>Full Stack Web Devlepment</h2>
                    <p style={{fontSize:'20px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nisi. Cum quod pariatur suscipit necessitatibus distinctio porro eius culpa laudantium!</p>
                    <br />
                    <h1>EDUCATION</h1>
                    <h2>10th</h2>
                    <h2>Government High School</h2>
                    <p style={{fontSize:'20px'}}>Kanjirankulam,Sivagangai District-630 612 .</p><br />
                    <h2>12th</h2>
                    <h2>M.N.U jeyaraj nadar Higher Scondary School</h2>
                    <p style={{fontSize:'20px'}}>Nagamalaiputhukottai,Madurai District-630 612 .</p><br />
                    <h2>College</h2>
                    <h2>K.L.N College of information technoloy</h2>
                    <p style={{fontSize:'20px'}}>Kanjirankulam,Sivagangai District-630 612 .</p>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default Resume;