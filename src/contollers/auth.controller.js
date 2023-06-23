import User from "../models/user.model.js";
import bcrypt from "bcrypt";

async function registerUser(req, res) {
    try {
        const username = req.body.username;
        const userEmail = req.body.email;
        const password = req.body.password;
        const userPassword = bcrypt.hashSync(password, 2);
        if(!userName) {return res.status(400).send({success: false, error: 'Falta campo nombre'});}
        if(!userEmail) {return res.status(400).send({success: false, error: 'Falta campo email'});}
        if(!password) {return res.status(400).send({success: false, error: 'Falta campo contraseña'});}
      await User.create({
        username: username,
        email: userEmail,
        password: userPassword,
      });
      return res.status(201).send({
        success: true
      });
    }catch(error) {
      console.log(error);
      return res.status(500).send({success: false, error: error.message});
    }
}

export {registerUser}
