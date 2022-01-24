import {CourseModel} from "../model/model";
import {CourseSummary, createCourseSummaries, createCourseSummary} from "../../shared/model/course-summary";


export const findAllCourses = (): Promise<CourseSummary[]>=> {
    return CourseModel.findAll({
        order:['seqNo']
    })
        .then(createCourseSummaries) ;
}