import {Request, Response} from "express";
import {findAllCourses} from "../queries/findAllCourses";
import * as _ from'lodash' ;
import {onError} from "./onError";
import {onSuccess} from "./success";
import {databaseErrorHandler} from "./databaseErrorHandler";

//This function run function to retrieve data and send that as response
export function apiGetAllCourses(req:Request,res:Response) {
    findAllCourses()
        //Error present here will make the request stuck and the browser wait for the response for some time,
        //in short hanging http request, one of the reason of this error is error in promise chain
        // .then(() => {
        //     throw new Error('Error') ;
        // })
        //Sending Result
        // .then(result => {
        //     // console.log(JSON.stringify(result)) ;
        //     res.status(200).json({result});
        // })
        //The more modular code for the above using lodash
        .then(_.partial(onSuccess,res))
        //Hanging Http Request error is resolved here
        // .catch(err =>{
        //     console.error("Internal Server Error:\n" + err) ;
        //     res.status(500).send();
        // });
        //The more modular code for the above using lodash
        .catch(_.partial(databaseErrorHandler,res))
        .catch(_.partial(onError,res,"Find All Courses Failed")) ;
}