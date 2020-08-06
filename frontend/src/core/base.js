import React, { Children } from "react";
import Menu from "./menu";


const Base = ({
  
    className = "p-4 ",
    children 

}) =>(
        <div>
        <Menu/>

           <div className="container">
           <div className={className}>{children}</div>

           </div> 
       
        </div>
    );


export default Base;