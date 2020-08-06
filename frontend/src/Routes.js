import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./core/home";
import Signin from "./auth/signin";
import Signup from "./auth/signup";

import Users from "./user/users";
import PrivateRoute from "./auth/Helper/privateRoutes";
import Adduser from "./user/addUser";
import Updateuser from "./user/updateuser";


const Routes = () =>{
    return(
       <BrowserRouter>
           <Switch>
               <Route path="/" exact component={Signin}/>
               <Route path="/signup" exact component={Signup}/>
             
               <PrivateRoute path="/home" exact component={Home}/>
               <PrivateRoute path="/adduser" exact component={Adduser}/>

               <PrivateRoute path="/updateuser/:profileId" exact component={Updateuser}/>

               <PrivateRoute path="/users" exact component={Users }/>



           </Switch>
       </BrowserRouter>
    )
}

export default Routes;