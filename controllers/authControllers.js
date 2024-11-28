const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const hashPassword = async(x) => {
    return await bcrypt.hash(x, 12);
}

const generateToken = (x)=>{
    return jwt.sign({userId: x}, process.env.SECRET, { 
        expiresIn: '90d',
    });
}

const signup = async (req,res) => {
    try{
        const {email,password}  =  req.body;
        if(!email || !password){
            return res.status(401).json({
                status : 'fail',
                message : "Invalid email or password"
            })
        }
        const existingUser = await userModel.findOne({ email });
        console.log("Existing user:", existingUser); 
        if (existingUser) {
            return res.status(400).json({
                status: 'fail',
                message: "User with the same email already exists"
            });
        }

        const newPassword = await hashPassword(password);
        const user = await userModel.create({email,password:newPassword});

        res.status(201).json({
            status : 'success',
            data : {
                user : user,
                token: generateToken(user._id),
            }
        })
    }
    catch(err){
        res.status(500).json({
            status : 'fail',
            message : err?.message,
        })
    }
}

const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(401).json({
                status: 'fail',
                message: "Invalid email or password",
            })
        }
    
        const user = await userModel.findOne({email});
        if(user){
            const hashedPassword = user.password;
            const result = await bcrypt.compare(password, hashedPassword);
            if(result){
                res.status(201).json({
                    status: 'success',
                    data:{
                        user: generateToken(user._id),
                    }
                });
            }
            else{
                res.status(401).json({
                    status: 'fail',
                    message: "Email or password is incorrect",
                })
            }
        }
        else{
            res.status(401).json({
                status: 'fail',
                message: "Email or password is incorrect",
            })
        }
        
    }
    catch(err){
        res.status(500).json({
            status: 'fail',
            message: err?.message,
        })
    }
}

module.exports = {
    signup,
    login
}