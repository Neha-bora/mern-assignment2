import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../App.css"
import { signin, authenticate, isAutheticated } from "./Helper/authapicall";
import M from 'materialize-css'


const Signin = ()=>{
    
const [ values , setValues] = useState({
 
    email:"",
    password:"",
    error:"",
    didRedirect:false

    })

//destructuring
const { email , password , error , didRedirect} = values;
const{ user} = isAutheticated;


const handleChange = name => event =>{
setValues({...values, error:false , [name]:event.target.value });
};

const onSubmit = event=>{
event.preventDefault();
setValues({ ...values , error:false});
signin({email, password})

.then( data =>{
  console.log(data)
  

  if(data.errors){
    M.toast({html: data.errors,classes:"#c62828 red darken-3"})
    
    setValues({ ...values , error:data.errors });
  }else{
    M.toast({html: "LogedIn Succesfully",classes:"#43a047 green darken-1"})  
    authenticate(data ,()=>{
      setValues({
        ...values,
        didRedirect:true
      });

    });
  }
})
.catch(console.log("signin  process failed"));

};

const performRedirect = ()=>{

if(didRedirect){

    return <Redirect to="/home"/>
  
}


};





 const signinForm = () =>{
     return(
        <div>
      
    
      <div className="myCard mt-4">
                 <div className="card  auth-card input-field">
                 <h2>Lognin below</h2>
                 <h5>Don't have an account <Link to ="signup">Register</Link></h5>
                
                 <input
                     type="email"
                     placeholder="Email"
                     onChange={ handleChange("email")}
                     value={email}
                    
                 />
    
                <input
                    type="password"
                    placeholder="password"
                   onChange={ handleChange("password")}
                   value={password}
                />
                 
               <button type="button"  onClick={onSubmit}  className="btn btn-primary  ">Lognin</button>
                                    
                </div>               
            </div>  
        </div>

     )
 }


    return(
        <div>
    
       {signinForm()}
      {performRedirect()}
       </div>
  )
}

    

export default  Signin;