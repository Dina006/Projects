import { Link } from "react-router-dom";
const Footer=()=>{
    return(
        <div className="foot-container">
            <div className="foot-content" style={{display:"flex",
        justifyContent:'space-between',
        padding:'10px'}}>
            <div>
                <h1>IShare</h1><br /><br />
                <p><i>Created at DineshKumar P</i></p>
                </div>
                <div style={{marginTop:'15px'}}>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquid.</h4>
                    <Link to="post" style={{color:'white',textDecoration:'none'}}>  <button type="submit" className="pbtn">POST</button></Link>
                </div>
                <div>
                    <h3><a href="/">Suggestion</a></h3>
                    <h3><a href="/">Login</a></h3>
                    <h3><a href="/">SignUp</a></h3>
                    <h3><a href="/">Subscribe</a></h3>
                </div>
            </div>
        </div>
    )
}
export default Footer;