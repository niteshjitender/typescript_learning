import * as ORM from "Sequelize";
import { Sequelize } from "Sequelize" ;
import {initCourseModel} from "./initCourseModel";
import {initLessonModel} from "./initLessonModel";
//Here we link the database to the server using Sequelize
const sequelize:Sequelize = new ORM.Sequelize("complete-typescript-course","postgres","Database@123",{
    benchmark:true,
    logging:console.log,
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
}) ;
//Accessing the model, so we can use it later to access the data that is associated with it.
export const CourseModel = initCourseModel(sequelize) ;
export const LessonModel = initLessonModel(sequelize) ;

//Relating the table (one to many relationship)
CourseModel.hasMany(LessonModel, {foreignKey: 'courseId'}) ;
LessonModel.belongsTo(CourseModel,{foreignKey: 'courseId'}) ;

