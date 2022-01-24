import {CourseSummary} from "./course-summary";
import {Lesson} from "./lesson";

export interface CourseDetail extends CourseSummary {
    longDescription: string,
    comingSoon?: boolean,
    isNew?: boolean,
    isOngoing?: boolean,
    lessons: Lesson[]
}