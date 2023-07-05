import jsonwebotken from "jsonwebtoken";
import {SECRET} from "../configs/environments.js"



export function generateToken(user){

    const {_id, email} = user;
    return jsonwebotken.sign({id:_id,email}, SECRET, {
        expiresIn:"1m",
    })

}

export function verifyToken(token){
    return jsonwebotken.verify(token, SECRET);
}