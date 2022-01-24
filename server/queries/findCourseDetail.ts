import {CourseModel, LessonModel} from "../model/model";
import {CourseDetail} from "../../shared/model/course-details";
import {createCourseDetail} from "../../shared/model/createCourseDetail";
import * as Bluebird from "bluebird";


export function findCourseDetail(courseId:number): Promise<CourseDetail> {

    return CourseModel.findByPk(courseId, {
        include: [
            {
                model: LessonModel
            }
        ]
    })
        .then(createCourseDetail);
}