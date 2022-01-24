import {Response} from "express";

export function onError(res:Response, message:string,err:any){
    console.error("Promise chain error:\n", message, err) ;
    res.status(500).send() ;
}

//Use of lodash
//catch(err => onError(res,"message", err)) ;
//catch(_.partial(onError,res,"message")) ;
//These two lines are equal