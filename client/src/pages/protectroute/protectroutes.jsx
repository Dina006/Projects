import {Outlet,Navigate} from 'react-router-dom'
const ProtectRoute=()=>{
        const local=localStorage.getItem('user');
          const userData=JSON.parse(local);
          let valls=userData === null? false:true;
         console.log(valls);
  return(
    valls?<Outlet /> : <Navigate to={'/'} />

  )
    
    

}
export default ProtectRoute;