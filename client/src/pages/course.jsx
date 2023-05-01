const Course=()=>{
    const num=[{
        name:'HTML',
        link:'https://www.w3schools.com/html/default.asp'
    },{
        name:'CSS',
        link:'https://www.w3schools.com/css/default.asp'
    },{
        name:'Javascript',
        link:'https://www.w3schools.com/js/default.asp'
    },{
        name:'React',
        link:'https://www.w3schools.com/react/default.asp'
    },{
        name:'Python',
        link:'https://www.w3schools.com/python/default.asp'
    },{
        name:'Java',
        link:'https://www.w3schools.com/java/default.asp'
    }];
    return(
        <>
        <div  style={{height:'100vh',display:'flex',flexWrap:'wrap'}}>
            <div style={{width:'100%',height:'140px',backgroundColor:'blue'}} ><br /><h1 style={{fontSize:'50px',textAlign:'center',color:'white'}}>Your skill update</h1></div><br />
        {num.map((res,i)=>{
            return(
           <div key={i} className='course-temp' style={{width:'350px',height:'450px',marginLeft:'100px',marginTop:'50px',borderRadius:"7px",backgroundColor:'orange'}}>
            <div style={{width:'100%',height:'200px',textAlign:'center'}}><h1 style={{marginTop:'20px',fontSize:'71px'}}>{res.name}</h1></div>
            <div style={{width:'100%',height:'250px'}}><p style={{margin:'10px',fontSize:'30px'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <button className='c-btn' style={{width:'300px',marginLeft:'15px',padding:'6px',border:'none',backgroundColor:'white',borderRadius:'5px','--hover-backgroundColor':'darkblue','--hover-color':'white'}}><a href={res.link} style={{fontSize:'25px',textDecoration:'none'}}>Learn more</a></button>
                </div>
        </div>
            )
        })}
        </div>
        </>
    )
}
export default Course;