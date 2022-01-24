import {Request, Response, RequestHandler, ErrorRequestHandler, NextFunction} from "express";

export function apiErrorHandlers(
    err: any,
    req: Request,
    res:Response,
    next:NextFunction
){
    console.error("API error handler triggers", err) ;
    res.status(500).json({erroCode: 'ERR-001',
        message:'Internal Server Error'}) ;
}