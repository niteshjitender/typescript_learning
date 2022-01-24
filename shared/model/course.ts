import {Lesson} from "./lesson";

export interface Course {
    description: string;
    readonly url:string ;
    longDescription: string ;
    iconUrl: string ;
    courseListIcon: string ;
    seqNo: string ;
    comingSoon?: string ;
    isNew?: boolean ;
    isOngoing: boolean ;
    readonly Lessons: Lesson [];
}