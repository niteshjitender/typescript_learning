import {Request,Response} from "express";
import * as _ from "lodash" ;
import {createLesson} from "../queries/createLesson";
import {onSuccess} from "./success";
import {onError} from "./onError";
import {databaseErrorHandler} from "./databaseErrorHandler";

const hri = require('human-readable-ids').hri ;

export function apiCreateLesson(req:Request, res: Response){
    createLesson(req.body)
        .then(_.partial(onSuccess,res))
        //Sending the database error
        // .catch(err => {
        //     console.error(err) ;
        //     //Sending the database error to the client is always risky , like below So alternative of that is in next line
        //     // res.status(500).json({code:'ERR-002', message:err.message}) ;
        //     const id = hri.random() ;
        //     console.error("Database error occurred", id, err) ;
        //     res.status(500).json({code: 'ERR-002', message: `Creation of lesson failed error code: ${id}` }) ;
        // })
        .catch(_.partial(databaseErrorHandler,res))
        .catch(_.partial(onError,res,"Could not create lesson"));
}