import User from "./models/user.model.js";
import { verifyToken } from "./utils/jwt.js";

export function authRequired(req,res,next){
    
    const authorizationHeader = req.headers.authorization || req.headers.Authorization;
    try{
        const token = authorizationHeader.split(" ")[1];
        if(!token){
            throw new Error("Sin token");
        }
        const {id} = verifyToken(token);
        req.params.userId = id;
        return next();

    }catch(err){

        return res.status(403).send({error: "no tienes los permisos (falta token o está exiprado)"});

    }

}

export function hasRole(role){

    return async function(req,res,next){
        const {roles} = await User.findById(req.params.userId).exec();
        if(roles.includes(role)){
            return next();
        }
        return res.status(401).send({error:`Usuario no tiene el rol ${role}`});
    }

}