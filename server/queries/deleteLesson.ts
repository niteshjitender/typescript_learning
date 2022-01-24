import {LessonModel} from "../model/model";


export const deleteLesson = (id:string):Promise<any> => {
  return LessonModel.destroy({
      where: {id}
  }) ;
}