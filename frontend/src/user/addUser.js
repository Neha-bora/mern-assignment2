import React, { useState } from "react"
import Base from "../core/base"
import { CreateUser } from "./Hepler/userapicall"
import { isAutheticated } from "../auth/Helper/authapicall"
import M from 'materialize-css'
import { Redirect } from "react-router-dom"

const Adduser = () =>{

  const {user , token} = isAutheticated()

  const [values , setValues] = useState({
     
      name:"",
      email:"",
      phone:"",
      job:"",
      company:"",
      age:"",
      city:"",
      error:"",
      getaRedirect:false
     
     
  });

  const{ name , email ,phone , job , company , age, city ,  getaRedirect} = values;
   
  const onSubmit = event =>{
    event.preventDefault();
    setValues({  ...values , error:"" , loading:true});
    CreateUser(user._id, token, {name , email ,phone , job , company , age, city })
    .then( data =>{
      console.log(data)
      if(data.error){
        M.toast({html: data.error,classes:"#c62828 red darken-3"})
       setValues({ ...values , error:data.error});
      }else{
        M.toast({html: "Added Succesfully",classes:"#43a047 green darken-1"})   
        setValues({
          ...values,
          name:"",
          email:"",
          phone:"",
          job:"",
          company:"",
          age:"",
          city:"",
          getaRedirect:true
               
        });
      }
    });
   
  };
  
  
  const performRedirect = ()=>{
    if( getaRedirect){
    
        return <Redirect to="/users"/>    
    }
   };
const handleChange = name => event =>{
  setValues({...values, error:false , [name]:event.target.value });
  };




    const addForm = () =>{
        return(
           <div className="add-form">
           
<form >
 
  <div class="form-group row ">
    <label class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">   
    <textarea className="form-control" placeholder="Enter Name"
            onChange={handleChange("name")}
            value={name}
            ></textarea>
    </div>
  </div>

  <div class="form-group row"> 
   <label  class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
    <textarea className="form-control" rows="50" cols="25"
         placeholder="Enter Email"
         onChange={handleChange("email")}
            value={email}
        ></textarea>
    </div>
  </div>

  <div class="form-group row"> 
   <label class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-10">
    <textarea className="form-control" 
         placeholder="Enter Phone"
         onChange={handleChange("phone")}
            value={phone}
       
        ></textarea>
    </div>
  </div>

  <div class="form-group row"> 
   <label class="col-sm-2 col-form-label">Job</label>
    <div class="col-sm-10">
    <textarea className="form-control" 
         placeholder="Enter Job"
         onChange={handleChange("job")}
            value={job}
        ></textarea>
    </div>
  </div>

  <div class="form-group row"> 
   <label  class="col-sm-2 col-form-label">Company</label>
    <div class="col-sm-10">
    <textarea className="form-control" 
         placeholder="Enter Company"
         onChange={handleChange("company")}
            value={company}
        ></textarea>
    </div>
  </div>

  <div class="form-group row"> 
   <label  class="col-sm-2 col-form-label">Age</label>
    <div class="col-sm-10">
    <textarea className="form-control"
         placeholder="Enter Age"
         onChange={handleChange("age")}
            value={age}
        ></textarea>
    </div>
  </div>

  <div class="form-group row"> 
   <label  class="col-sm-2 col-form-label">City</label>
    <div class="col-sm-10">
    <textarea className="form-control"
         placeholder="Enter City"
         onChange={handleChange("city")}
            value={city}
        ></textarea>
    </div>
  </div>
 
  <div class="form-group row">
    <div class="col-sm-10">
    <button type="button"  onClick={onSubmit} class="btn btn-warning btn-lg p-2">Add User</button>
    </div>
  </div>

</form>

           </div>
        )
    }



    return(
        <Base>
      {addForm()}
      {performRedirect()}
        </Base>
    )
}

export default Adduser ;