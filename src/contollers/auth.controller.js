import User from "../models/user.model.js";

async function registerUser(req, res) {
    try {
        const userName = req.body.name;
        const userEmail = req.body.email;
        const password = req.body.password;
        if(!userName) {return res.status(400).send({success: false, error: 'Falta campo nombre'});}
        if(!userEmail) {return res.status(400).send({success: false, error: 'Falta campo email'});}
        if(!password) {return res.status(400).send({success: false, error: 'Falta campo contraseña'});}
    }
    catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error: error.message});
    }
}

export {registerUser};