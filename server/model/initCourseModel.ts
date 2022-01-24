import * as ORM from "Sequelize";
import { Sequelize } from "Sequelize" ;
//This is used to define the table, we can say the model
export function initCourseModel (sequelize: Sequelize){
    return sequelize.define('Course',{
        description: ORM.STRING,
        url: ORM.STRING,
        longDescription: ORM.TEXT,
        iconUrl: ORM.STRING,
        courseListIcon: ORM.STRING,
        seqNo: ORM.INTEGER,
        comingSoon: ORM.BOOLEAN,
        isNew: ORM.BOOLEAN,
        isOngoing:ORM.BOOLEAN
    }) ;
}