const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require("../models/User")


// *auth
exports.auth = async(req , res , next)=>{
    try {
        // fetch the token
        const token = req.body.token || req.cookies.token ||req.header("Authorisation").replace("Bearer ", "");

        // if token is missing
        if(!token){
            return res.status(401).json(
                {
                    success:false,
                    message:`Token is missing, so kindle login again`
                }
            )
        }

        // verify the token
        try {
            const decode = jwt.verify(token , process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode; //for authorisation

        } catch (error) {
            console.log(error);
            return res.status(401).json(
                {
                    success:false,
                    message:`Token is invalid`
                }
            )
        }

        next();

    } catch (error) {
        console.log(error);
        return res.status(500),json(
            {
                success:false,
                message:`Something went worng while validating the token`
            }
        )
    }
}



// *isStudent
exports.isStudent = async(req,res,next)=>{
    try {
        
        if(req.user?.accountType != "Student"){
            return res.status(401).json(
                {
                    success:false,
                    message:`This is a protected route for Student only`
                }
            )
        }

        next();

    } catch (error) {
        console.log(error);
        return res.status(500),json(
            {
                success:false,
                message:`User role cannot be verified, please try again`
            }
        )
    }
}



// *isInstructor
exports.isInstructor = async(req,res,next)=>{
    try {
        
        if(req.user?.accountType != "Instructor"){
            return res.status(401).json(
                {
                    success:false,
                    message:`This is a protected route for Instructor only`
                }
            )
        }

        next();

    } catch (error) {
        console.log(error);
        return res.status(500),json(
            {
                success:false,
                message:`User role cannot be verified, please try again`
            }
        )
    }
}



// isAdmin
exports.isAdmin = async(req,res,next)=>{
    try {
        
        if(req.user?.accountType != "Admin"){
            return res.status(401).json(
                {
                    success:false,
                    message:`This is a protected route for Admin only`
                }
            )
        }

        next()

    } catch (error) {
        console.log(error);
        return res.status(500),json(
            {
                success:false,
                message:`User role cannot be verified, please try again`
            }
        )
    }
}