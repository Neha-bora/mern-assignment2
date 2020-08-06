
const User = require("../models/user");
const { check, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');


exports.signup =( req , res)  =>{
 
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors:errors.array()[0].msg
        })
    }


    const user =  new User(req.body);
    user.save((err , user) =>{
        if(err){
            res.status(422).json({
                err:"not able to save user in db"
            })
        }
        res.json({
                name: user.name,
                email: user.email,
                id: user._id
        })
    }) 
}


exports.signin = (req , res) => {
    const errors = validationResult(req);
    const { email , password} = req.body;


    if(!errors.isEmpty() ){
        return res.status(422).json({
            errors:errors.array()[0].msg
         
        });
 
    }
    User.findOne({email} , (err , user) =>{
        if(err || !user){
             return res.status(400).json({
                errors:"USER email does not found"
                
                
            });
        }
        if(!user.autheticate(password) ){
            return res.status(401).json({
                errors:"password is not match"
            });

        }

    //   Create token
        const token = jwt.sign({_id:user._id}, process.env.SECRET);
  
     // put token in cookie/browser
    res.cookie("token" , token ,{ expire :new Date() +9999} );
   
    // send Response to front end
    const {_id , name ,email , role} = user;
    return res.json({ token, user: {_id ,name,  email,  role}});

    });



};


exports.signout = (req, res) => {
    res.clearCookie("token");
  res.json({
    message: "User signout successfully"
  });
};


// protected route
exports.isSignedIn = expressJwt({
    secret: process.env.SECRET,
    algorithms: ['HS256'],
    userProperty:"auth"
})

//custom middleware

exports.isAuthenticated = (req , res , next) => {
    
    let checker = req.profile && req.auth && req.profile._id == req.auth._id;
    if(!checker){
        return res.status(403).json({
            error:"Acces denied"

        });
    }
    next();
};

exports.getUserById = (req , res   ,   next , id  ) => {
    User.findById(id).exec((err , user) => {
         console.log(user)
       
        if(err || !user){
            return res.status(400).json({
 
              error:"No user was found in DB"
            }); 
         }
         req.profile = user;
         next();
     });
 };
 