import {Response,Request} from "express";
import {findCourseDetail} from "../queries/findCourseDetail";
import * as _ from "lodash" ;
import {onSuccess} from "./success";
import {onError} from "./onError";
import {databaseErrorHandler} from "./databaseErrorHandler";

export function apiGetCourseDetail(req:Request, res: Response){
    const courseId = parseInt(req.params.id) ;
    findCourseDetail(courseId)
        .then(_.partial(onSuccess,res))
        .catch(_.partial(databaseErrorHandler,res))
        .catch(_.partial(onError,res, 'Could not find course detail for id'));
}