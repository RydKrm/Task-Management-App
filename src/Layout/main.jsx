import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

const Main = () => {
   //setup local storage 
   if(localStorage.getItem('ibos-user')){
   // localStorage.setItem('ibos-user',[]);
  //  localStorage.setItem('ibos-team',[]);
  //  localStorage.setItem('ibos-task',[]);
   }

    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;