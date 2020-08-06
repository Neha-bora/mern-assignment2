var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const { isSignedIn, isAuthenticated, getUserById } = require('../controllers/auth');
const { createUser, getProfileById, updateUser, deleteUser, getaUser, userList } = require('../controllers/profile');

router.param("userId" , getUserById)
router.param("profileId" , getProfileById)

router.post("/create/user/:userId" , [
    check('name', " Name should be atleast 3 char").isLength({min:3}),
    check("email" , "email should be required").isEmail(),
    check("phone" , "Phone Number should be required").not().isEmpty(),
    check("job" , "Job should be required").not().isEmpty(),
    check("company" , "Company should be required").not().isEmpty(),
    check("age" , "Age should be required").not().isEmpty(),
    check("city" , "City should be required").not().isEmpty()
],isSignedIn , isAuthenticated, createUser )


router.put("/update/user/:profileId/:userId" , 
[
    check('name', " Name should be atleast 3 char").isLength({min:3}),
    check("email" , "email should be required").isEmail(),
    check("phone" , "Phone Number should be required").not().isEmpty(),
    check("job" , "Job should be required").not().isEmpty(),
    check("company" , "Company should be required").not().isEmpty(),
    check("age" , "Age should be required").not().isEmpty(),
    check("city" , "City should be required").not().isEmpty()
] ,
 isSignedIn , isAuthenticated , updateUser)
//delete
router.delete("/delete/user/:profileId/:userId",isSignedIn,isAuthenticated,   deleteUser );

router.get("/userList" ,userList)
router.get("/user/:profileId" , getaUser);
module.exports =router;