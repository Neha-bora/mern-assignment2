import React from "react"
import Base from "./base";
import { signout, isAutheticated } from "../auth/Helper/authapicall";
import M from 'materialize-css'

const Home = ({history}) =>{

    const { user:{ name }} = isAutheticated()
    
    return(
        <Base>
       
         <div className=" text-center home-style">
        <h1>Hey  there ,{name}</h1>
        <h5 className="mt-2"> your are logged into a full-stack MERN app</h5>
        <button  type="button" class="btn btn-outline-primary mt-4"
          onClick = { () =>{
              signout ( ()=> {
                M.toast({html: "logout Succesfully",classes:"#43a047 green darken-1"})     
               history.push("/")   })
               }} >Logout</button>
          </div>
        </Base>
    )
}
export default Home;