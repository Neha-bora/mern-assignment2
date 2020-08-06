import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getuserList, deleteUser } from "./Hepler/userapicall";
import { isAutheticated } from "../auth/Helper/authapicall";
import M from 'materialize-css'

const Card = ({items}) =>{

    const { user , token}  = isAutheticated();
  
    const loadPage = () =>{
        window.location.reload(false);
    }

     const deleteProfile = profileId =>{
        return(
           deleteUser( profileId  , user._id , token) .then(data =>{
                if(data.error ){
                    console.log(data.error);
                }else{
                    loadPage()
                   
                    M.toast({html: "Deleted Succesfully",classes:"#43a047 green darken-1"})   
                }

            })

        )};







    return(
        items.map(( user , index) =>{
            return(
                <div  key={index}>
                <div  class="card m-4">
                <div class="card-header">
                 <h5> Name :{user.name}</h5>
                </div>
                <div class="card-body">
                  <div className="row">
                  <div className="col-sm-4 "> 
                             
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKncU7ZvrDSpdVYFT4cpVrutrpxU9XzjUNbQ&usqp=CAU" 
                    width="200px" height="200px"
                    />

                    <div className="row mt-4">
                    <div><Link type="button"  to={`updateuser/${user._id}`} class="btn btn-primary mr-4 ml-4">Edit User</Link></div>
                    
                    <div ><Link type="button"  onClick={ () => {deleteProfile(user._id)}}  class="btn btn-danger ">Delete</Link></div>
                    </div>

                </div>
              
                      <div className="col-sm-8">
                         <p>Email:  {user.email}</p> 
                         <p>phone: {user.phone}</p> 
                         <p>Job:{user.job}</p> 
                         <p>Company: {user.company}</p> 
                         <p>age:{user.age}</p> 
                         <p>City: {user.city}</p> 
              
              
              
                      </div>
                  </div>
                </div>
              </div>
              </div>

            )
        })
       
    )
}

export default Card;