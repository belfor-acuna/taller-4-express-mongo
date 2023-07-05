import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken, verifyToken } from "../utils/jwt.js";

async function registerUser(req, res) {
    try {
        const username = req.body.username;
        const userEmail = req.body.email;
        const password = req.body.password;
        const userPassword = bcrypt.hashSync(password, 2);
        if(!username) {return res.status(400).send({success: false, error: 'Falta campo nombre'});}
        if(!userEmail) {return res.status(400).send({success: false, error: 'Falta campo email'});}
        if(!password) {return res.status(400).send({success: false, error: 'Falta campo contraseña'});}
      await User.create({
        username: username,
        email: userEmail,
        password: userPassword,
      });
      return res.status(201).send({
        success: true});
    }catch(error) {
      console.log(error);
      return res.status(500).send({success: false, error: error.message});
    }
}

async function loginUser(req, res){
  try{
    const inputEmail = req.body.email;
    const inputPassword = req.body.password;
    const existingUser = await User.findOne({email: inputEmail});
    if (!inputEmail){
      return res.status(400).send({error: 'Falta campo email'});
    }
    if (!inputPassword){
      return res.status(400).send({error: 'Falta campo password'});
    }
    if (!existingUser){
      return res.status(404).send({logged: false});
    }
    const isMatch = await bcrypt.compare(inputPassword, existingUser.password);
    if(!isMatch){
      return res.status(401).send({logged:false});
    }
    const token = generateToken(existingUser);
    return res.status(200).send({existingUser,token});
    
  }catch(error){
    console.log(error);
    return res.status(500).send({error:error.message});
  }
}

async function getMe(req,res){

  try{

    const user = await User.findById(req.id);
    return res.status(200).json({user});

  }catch(err){
    return res.status(403).json(err);
  }

}

export {registerUser, loginUser, getMe}
