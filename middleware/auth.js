//customize the middleware
import { response } from "express";
import jwt from "jsonwebtoken";

export const auth= (req, res,next)=>{
    //In PostMan http://localhost:9002/movies  in header key:x-auth-token value:abcdefg 
    // here value can be anything
    const token=req.header("x-auth-token");
    console.log(token);
    // verify the token
    try {
        jwt.verify(token,process.env.SECRET_KEY);
         //only if next() is given response will be sent.
         next();
    } catch (error) {
        res.send({error:error.message})
    }
   


   
}
