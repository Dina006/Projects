import {Outlet,Navigate} from 'react-router-dom'
const Recuriterprotect=()=>{
        const local=localStorage.getItem('jobrecuriter');
          const userData=JSON.parse(local);
          let valls=userData === null? false:true;
         console.log(valls);
  return(
    valls?<Outlet /> : <Navigate to={'/'} />

  )
    
    

}
export default Recuriterprotect;