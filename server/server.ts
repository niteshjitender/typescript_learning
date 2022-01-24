import * as express from 'express' ;
import {Application} from "express";
import {findAllCourses} from "./queries/findAllCourses";
import {initRestApi} from "./api/api";
import {apiErrorHandlers} from "./api/apiErrorHandlers";

const bodyParser = require('body-parser') ;
const app:Application = express() ;
app.listen(8090, () => {
    console.log("Server is running at port:"+ 8090) ;
});

//Using body-parser to parse http request
// app.use(bodyParser) ;
app.use(express.json());

//Initialized the all the APIs
initRestApi(app) ;

//If some error occurs in the api then this code will be executed
app.use(apiErrorHandlers);

// console.log('Server is running');