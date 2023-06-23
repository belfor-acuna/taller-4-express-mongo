import User from "../models/user.mode.js";
import bcrypt from "bcrypt";

async function registerUser(req, res) {
    try {
        const userName = req.body.name;
        const userEmail = req.body.email;
        const password = req.body.password;
        const userPassword = bcrypt.hashSync(password, 2);
        if(!userName) {return res.status(400).send({success: false, error: 'Falta campo nombre'});}
        if(!userEmail) {return res.status(400).send({success: false, error: 'Falta campo email'});}
        if(!password) {return res.status(400).send({success: false, error: 'Falta campo contraseña'});}
    }
}