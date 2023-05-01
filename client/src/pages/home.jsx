import axios from 'axios';
import { useState,useEffect } from "react";
import {  Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Over from './edu';
// const data=[
//     {
//         title:"Senior Java Developer",
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         like:20,
//         day:2,
//         overview:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse blanditiis reprehenderit est doloribus sunt dicta recusandae nulla voluptate in! Rem obcaecati, dolorem maiores aut nostrum ducimus sed suscipit aperiam odit reprehenderit iste excepturi saepe impedit vero perferendis tempore ut facere iure sapiente eos possimus natus animi. Deleniti amet ab ad aliquam odit inventore quas asperiores, tempora, voluptates facilis magnam provident hic officia! Blanditiis quam molestiae voluptatem in numquam delectus necessitatibus voluptas voluptates asperiores, expedita, commodi sit, obcaecati nihil odio inventore cumque voluptatibus deleniti! Quis quia voluptatem sed quisquam cum debitis, veritatis nobis aperiam odio accusamus quae autem doloribus voluptatibus nesciunt aliquid odit ex. Delectus provident ratione quisquam quidem est expedita quos quis, architecto doloribus consequuntur? Laborum veritatis expedita quae impedit placeat doloribus ipsum soluta atque? Quod, nam sapiente optio perspiciatis itaque officia atque placeat voluptates porro voluptatem ex vitae iusto. Quas illum id similique saepe, modi cum explicabo omnis.",
//         email:"Company :Freshdesk",
//         salary:'4,00,000-8,00,000',
//         location:'Location :Chennai'
//     },
//     {
//         title:"Software Testing",
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         like:30,
//         day:5,
//         overview:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse blanditiis reprehenderit est doloribus sunt dicta recusandae nulla voluptate in! Rem obcaecati, dolorem maiores aut nostrum ducimus sed suscipit aperiam odit reprehenderit iste excepturi saepe impedit vero perferendis tempore ut facere iure sapiente eos possimus natus animi. Deleniti amet ab ad aliquam odit inventore quas asperiores, tempora, voluptates facilis magnam provident hic officia! Blanditiis quam molestiae voluptatem in numquam delectus necessitatibus voluptas voluptates asperiores, expedita, commodi sit, obcaecati nihil odio inventore cumque voluptatibus deleniti! Quis quia voluptatem sed quisquam cum debitis, veritatis nobis aperiam odio accusamus quae autem doloribus voluptatibus nesciunt aliquid odit ex. Delectus provident ratione quisquam quidem est expedita quos quis, architecto doloribus consequuntur? Laborum veritatis expedita quae impedit placeat doloribus ipsum soluta atque? Quod, nam sapiente optio perspiciatis itaque officia atque placeat voluptates porro voluptatem ex vitae iusto. Quas illum id similique saepe, modi cum explicabo omnis.",
//         salary:'4,00,000-8,00,000',
//         location:'Location :Chennai',
//         email:"Company :Wipro"
//     },
//     {
//         title:"Android Application Developer",
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         like:28,
//         day:10,
//         overview:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse blanditiis reprehenderit est doloribus sunt dicta recusandae nulla voluptate in! Rem obcaecati, dolorem maiores aut nostrum ducimus sed suscipit aperiam odit reprehenderit iste excepturi saepe impedit vero perferendis tempore ut facere iure sapiente eos possimus natus animi. Deleniti amet ab ad aliquam odit inventore quas asperiores, tempora, voluptates facilis magnam provident hic officia! Blanditiis quam molestiae voluptatem in numquam delectus necessitatibus voluptas voluptates asperiores, expedita, commodi sit, obcaecati nihil odio inventore cumque voluptatibus deleniti! Quis quia voluptatem sed quisquam cum debitis, veritatis nobis aperiam odio accusamus quae autem doloribus voluptatibus nesciunt aliquid odit ex. Delectus provident ratione quisquam quidem est expedita quos quis, architecto doloribus consequuntur? Laborum veritatis expedita quae impedit placeat doloribus ipsum soluta atque? Quod, nam sapiente optio perspiciatis itaque officia atque placeat voluptates porro voluptatem ex vitae iusto. Quas illum id similique saepe, modi cum explicabo omnis.",
//         salary:'9,00,000-12,00,000',
//         location:'Location :Bangalore',
//         email:"Comapany :Freshdesk"
//     },
//     {
//         title:"FullStack Developer",
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         like:20,
//         day:12,
//         overview:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse blanditiis reprehenderit est doloribus sunt dicta recusandae nulla voluptate in! Rem obcaecati, dolorem maiores aut nostrum ducimus sed suscipit aperiam odit reprehenderit iste excepturi saepe impedit vero perferendis tempore ut facere iure sapiente eos possimus natus animi. Deleniti amet ab ad aliquam odit inventore quas asperiores, tempora, voluptates facilis magnam provident hic officia! Blanditiis quam molestiae voluptatem in numquam delectus necessitatibus voluptas voluptates asperiores, expedita, commodi sit, obcaecati nihil odio inventore cumque voluptatibus deleniti! Quis quia voluptatem sed quisquam cum debitis, veritatis nobis aperiam odio accusamus quae autem doloribus voluptatibus nesciunt aliquid odit ex. Delectus provident ratione quisquam quidem est expedita quos quis, architecto doloribus consequuntur? Laborum veritatis expedita quae impedit placeat doloribus ipsum soluta atque? Quod, nam sapiente optio perspiciatis itaque officia atque placeat voluptates porro voluptatem ex vitae iusto. Quas illum id similique saepe, modi cum explicabo omnis.",
//         salary:'4,00,000-8,00,000',
//         location:'Location :Chennai',
//         email:"Company :Zoho"
//     },
//     {
//         title:"Data Analysis",
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         like:20,
//         day:1,
//         overview:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse blanditiis reprehenderit est doloribus sunt dicta recusandae nulla voluptate in! Rem obcaecati, dolorem maiores aut nostrum ducimus sed suscipit aperiam odit reprehenderit iste excepturi saepe impedit vero perferendis tempore ut facere iure sapiente eos possimus natus animi. Deleniti amet ab ad aliquam odit inventore quas asperiores, tempora, voluptates facilis magnam provident hic officia! Blanditiis quam molestiae voluptatem in numquam delectus necessitatibus voluptas voluptates asperiores, expedita, commodi sit, obcaecati nihil odio inventore cumque voluptatibus deleniti! Quis quia voluptatem sed quisquam cum debitis, veritatis nobis aperiam odio accusamus quae autem doloribus voluptatibus nesciunt aliquid odit ex. Delectus provident ratione quisquam quidem est expedita quos quis, architecto doloribus consequuntur? Laborum veritatis expedita quae impedit placeat doloribus ipsum soluta atque? Quod, nam sapiente optio perspiciatis itaque officia atque placeat voluptates porro voluptatem ex vitae iusto. Quas illum id similique saepe, modi cum explicabo omnis.",
//         salary:'4,00,000-8,00,000',
//         location:'Location :Madurai',
//         email:"Company :HCL"
//     }
// ];
export const Home=()=>{
const [job,setjob]=useState([]);

useEffect(()=>{
    axios.get('http://localhost:8000/jobs')
    .then((res)=>{
        setjob(res.data);

    })
},[job])
 const navigate=useNavigate();
console.log(job)

const leftF=['IT companies','Mechanical Engineering hgigieguhihguijh','IT companies','Mechanical Engineering hgigieguhihguijh','IT companies','Mechanical Engineering hgigieguhihguijh','Agriculture','Education','Civil Engineering','E-commerce in India','Building Contructions','Finance Company'
,'Civil Engineering','E-commerce in India','Building Contructions','Finance Company']
const [fivalue,setvalue] = useState("");
const [mainSearch,setSearch]=useState('');

console.log(fivalue);
    return(
        <div className="container">
            <div className="contain">
                <div className="left-nav">
                    <div className="left">
                        <div className="categories">
                            <h3>Categories</h3>
                            <br />
                            <input type="text" placeholder="filter" className="filter" onChange={e=>{setvalue(e.target.value)}}/>
                            <br />
                            <br />
                         <ul>
                            {leftF.filter((r)=>{
                               return fivalue===" "?r:r.toLowerCase().includes(fivalue.toLowerCase())
                            }).map((vale,de)=>{
                                return (
                                <li style={{marginTop:'10px'}} key={de}><a style={{textDecoration: 'none',
                                    color: 'darkslategray'}} href="/">{vale}</a></li>
                                )
                            })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="search">
                    <div className="search-box">
                    <input type="text" placeholder="Search here" className="sbox"
                    onChange={s=>setSearch(s.target.value)} />
                    <button className="sbtn" >Search</button>
                    </div>
                    {job.filter((align)=>{
                        return mainSearch===''?align:align.jobtitle.toLowerCase().includes(mainSearch.toLowerCase());

                    })?.map((val,ind)=>{

                        return (
                            <>
                            {ind.length}
                            <div className="data-container" key={ind}>
                            <div className="data" style={{boxShadow:''}}>
                                <div className="ttt">
                                <h2 className="t1" style={{
                                    color:'darkblue',cursor:'pointer'
                                }} onClick={()=>navigate('/overview',{state:val})}> {val.jobtitle }</h2>
                                <p>2 days ago</p>
                                </div><br />
                                <p className="d1">{val.description}</p>
                                <p >Salary :{val.salary}</p>
                                <p >{val.location}</p>
                                <br />
                                <div className="bot">
                                <p className="id"><i>Experience : {val.experience} year</i></p>
                
                                <button className='btnss' onClick={()=>navigate("/overview",{state:val})}>APPLY</button>
                                
                                </div>
                            </div>
             </div>
             </>
                        )
                    })||<h1>jhjkjkjk</h1>
                }

                </div>
                <div className="right-post">
                    <div className="con-post">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing e, Illo, suscipit.</h4><br />
                        
                        <Link to="/post" style={{color:'white',textDecoration:'none'}}>  <button type="submit" className="pbtn">POST</button></Link><br />
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing e, Illo, suscipit.</h4><br />

                        <Link to="/resume" style={{color:'white',textDecoration:'none'}}>  <button type="submit" className="pbtn">Resume</button></Link>

                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Home;