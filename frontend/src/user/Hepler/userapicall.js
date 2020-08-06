import { API } from "../../backend";


//create User
export const CreateUser=( userId , token , user) =>{
    console.log("USER is",user)
    return fetch(`${API}/create/user/${userId}` , {
        method:"POST",
        headers:{
            Accept:"Application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(user)

    })
    .then(response =>{
        return response.json()
    })
    .catch(err =>console.log(err))
};

//updateTodo

export const updateUser =( profileId, userId , token , userlist) =>{
 
    return fetch(`${API}/update/user/${profileId}/${userId}` ,  {   
        method:"PUT",
        headers:{
            Accept:"Application/json",
            Authorization:`Bearer ${token}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userlist)

    })
    .then(response =>{
        return response.json()
    })
    .catch(err =>console.log(err))
};

//delete user

export const deleteUser= ( profileId, userId , token) => {
    return fetch (`${API}/delete/user/${profileId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"Application/json",
            Authorization:`Bearer ${token}`
        }
   
    })
    .then( response =>{
        return response.json
    })
    .catch( err => console.log( err))
   }

//get  a single todolist
export const getaUser = profileId => {
    return fetch(`${API}/user/${profileId}` , {
         method:"GET"
    })
    .then(response =>{
        return response.json();
      })
    .catch(err => console.log(err));

};

//get all user
export const getuserList = () => {
    return fetch(`${API}/userList` , {
        method:"GET"
    })
    
    .then( response =>{
         return response.json();
        })
    .catch( err =>console.log(err));
};
