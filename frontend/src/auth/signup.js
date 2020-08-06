import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"
import { signup } from "./Helper/authapicall";

import M from 'materialize-css'

const Signup = ()=>{
    const [values , setValues]= useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success: false
    
      });
    
      const { name , email, password , error , success}  = values;
    
      const handleChange = name => event =>{
        setValues({...values, error:false , [name]:event.target.value });
      };
    
      
  
    const onSubmit = event => {
        event.preventDefault();
        setValues({...values , error:false})
        signup({name , email , password})
        .then( data =>{
          console.log(data) 
        if(data.errors){
            M.toast({html: data.errors,classes:"#c62828 red darken-3"})
        setValues({...values , error:data.errors , success:false})
        }else{
        setValues({
          ...values,
          name:"",
          email:"",
          password:"",
          error:"",
          success:true
    
        });
        }
        })
        .catch( console.log("Error in SignUp"));  
           
    
    }
    
    
 const successMessage = ()=>{
    return(
      <div className="row mt-4">
      <div className ="col-md-6 offset-sm-3 text-left"> 
    <div className="alert alert-primary" style={{display: success? "" :"none"}}>
    New Account was created successfully!.Please<Link to ="/">Login Here </Link>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
    </div>
    </div>
    </div>
    );

    };







    const signupForm = () =>{
        return(      
         <div>
     
          
          <div className="myCard">
                     <div className="card  auth-card input-field">
                     <h2>Register below</h2>
                     <h5>Already have an account <Link to ="/">Lognin</Link></h5>
                    
                   
                     <input
                         type="text"
                         placeholder="Name"
                         onChange={handleChange("name")}
                         value={name}
                        
                     />
        
                     <input
                         type="email"
                         placeholder="Email"
                         onChange={handleChange("email")}
                         value={email}
                        
                     />
        
                    <input
                        type="password"
                        placeholder="password"
                        onChange={handleChange("password")}
                         value={password}
                       
                    />
                     
                   <button type="button" onClick={onSubmit } className="btn btn-primary  ">Register</button>
                               
                    </div>                
                </div>    
            </div>
           
        )
    }


    return(
    <div>
    {successMessage()}
  
    {signupForm ()}
    
    </div>
    )
}

    

export default  Signup;