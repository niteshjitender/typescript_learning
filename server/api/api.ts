import {Application} from "express";
import {apiGetAllCourses} from "./apiGetAllCourses";
import {apiGetCourseDetail} from "./apiGetCourseDetail";
import {apiPatchLesson} from "./apiPatchLesson";
import {apiCreateLesson} from "./apiCreateLesson";
import {apiDeleteLesson} from "./apiDeleteLesson";

//Used to define the routes of different APIs (Parent function containing all the APIs)
export function initRestApi(app: Application){
    app.route('/api/courses').get(apiGetAllCourses) ;
    app.route('/api/courses/:id').get(apiGetCourseDetail) ;
    app.route('/api/lesson').post(apiCreateLesson) ;
    //This request is used to modify the some of the data, while in case of POST request whole data is modified
    app.route('/api/lesson/:id').patch(apiPatchLesson) ;
    app.route('/api/lesson/:id').delete(apiDeleteLesson) ;
}