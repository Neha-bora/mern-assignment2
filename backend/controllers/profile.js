const Profile = require("../models/profile");

//get todo by id
exports.getProfileById = (req , res , next , id ) => {
    Profile.findById(id).exec( (err , user) => {
         if(err ){
             return res.status(400).json({
                 error: "user not found in DB"
             });
         }
         req.user= user;
         next();
     });
    
    };

//create user
exports.createUser = ( req , res) =>{
    const user = new Profile(req.body)
    user.save(( err , user) =>{
        if(err){
            return res.status(400).json({
                error:"User not able to save in db"
            })
        }
        res.json({user})

    } )
}    

//update user 
exports.updateUser = ( req , res , profileId) =>{
            
    var id = req.params.profileId
    console.log("ID" , req.params.profileId)
    var updateName= req.body.name;
    var updateEmail = req.body.email ;
    var updateCompany  = req.body.company ;
    var updateJob  = req.body.job ;
    var updatePhone  = req.body.phone ;
    var updateAge = req.body.age ;
    var updateCity  = req.body.city ;


   
        Profile .updateOne(
      { _id: id },
      { $set: { name:updateName , email:updateEmail , company:updateCompany , job:updateJob ,
                 phone:updatePhone ,age:updateAge , city:updateCity} },
      (err, updatedUser) => {
          if (err){
                      return res.status(400).json({
                          error:"Failed to update todo"
                      });
                  }
                  res.json(updatedUser);
        
        }
      
    );
      
  

}

//delete User
exports.deleteUser = (req , res) =>{
    const user = req.user;

    user.remove( (err , category) =>{
      
        if(err){
            return res.status(400).json({
                error:"Failed to delete User"
            });
        }
        res.json(
           { message:"Deleted succesfully"}
        )
    });
};

//get all user
exports.userList = (req, res) => {
    const sortBy = req.query.sort ? req.query.sort:"_id";
   
    Profile.find().sort( [ [sortBy,"desc"] ]).exec( ( err , user) =>{ 
      if(err){
          return res.status(400).json({
              error:"Not user found"
          });
      }
 
      res.json(user);
    });

};

//get a signle user
exports.getaUser= (req , res) =>{

return res.json(req.user)
};