import {  useEffect, useState } from "react";
import { Link} from "react-router-dom";
const NavBar = () => {
    const [isLog,setIsLog] = useState(false); 
    const [name,setName] = useState(null);
    useEffect(()=>{
      if(localStorage.getItem('ibos-login')){
        setIsLog(true);
       let userName = JSON.parse(localStorage.getItem('ibos-login')).email;
        setName(userName);
        console.log("first",userName)
    }  
    },[])
    

    const logoutHandle = ()=>{
        localStorage.removeItem('ibos-login');
;
        setIsLog(false);
    }

    return (
            <nav className="navbar bg-gray-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            <li ><Link to='addCategory'>Add Category</Link></li>
                            
                        </ul>
                    </div>  
                    <Link to='/' className="btn btn-ghost normal-case text-xl">IBos App</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {isLog ? <li className="flex flex-row"> <p className="me-2 text-black">{name}</p> <button className="btn btn-ghost" onClick={logoutHandle}>Logout</button>  </li> : 
                        <li><Link to='login'>Login</Link> </li>
                       }
                       <li><Link to='team'>Add Team</Link></li>
                    </ul>
                </div>
               
            </nav>


        
    );
};

export default NavBar;