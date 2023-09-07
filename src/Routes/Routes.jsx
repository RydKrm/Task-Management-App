import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Team from "../Pages/Team/Team";
import AddMember from "../Pages/Team/AddMember";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path:'login',
          element:<Login/>
        },{
          path:'signUp',
          element:<SignUp/>
        },{
          path:'team',
          element:<Team/>
        },{
          path:'addMember/:teamName',
          element:<AddMember/>
        }
      ]
    },
  ]);