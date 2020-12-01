import sequelize, { Op } from 'sequelize';
import { parseISO, addHours, addMonths, addMinutes, addYears, addSeconds } from 'date-fns'

import Task from "../../models/Task";
import User from "../../models/User";
import { statusTask } from '../Task/CreateTaskService';

export default class PerfomaceUserService{
  async execute({ date_initial, date_final }) {
    let dateInitialFormatted = parseISO(date_initial)
    let month = dateInitialFormatted.getMonth() + 1

    dateInitialFormatted = new Date(
      dateInitialFormatted.getFullYear() + '-' +
      month + '-' +
      dateInitialFormatted.getDate()
    )

    let dateFinalFormatted = parseISO(date_final)
    month = dateFinalFormatted.getMonth() + 1

    dateFinalFormatted = new Date(
      dateFinalFormatted.getFullYear() + '-' +
      month + '-' +
      dateFinalFormatted.getDate()
    )
    dateFinalFormatted = addHours(dateFinalFormatted, 23)
    dateFinalFormatted = addMinutes(dateFinalFormatted, 59)
    dateFinalFormatted = addSeconds(dateFinalFormatted, 59)

    const tasksFinally = await Task.count({
      where: {
        user_id: {
          [Op.not]: null,
        },
        [Op.and]:{
          status:statusTask.FINALLY,
          date_initial: {
            [Op.gte]: dateInitialFormatted,
          },
          date_final: {
            [Op.lte]: dateFinalFormatted,
          },
        }
      },
    });

    const userTasks = await User.findAll({
      attributes: ['id', 'name'],
      raw: true,
      include: [
        {
          model: Task,
          as: 'tasks',
          attributes: [[sequelize.fn('COUNT', 'description'), 'Finally']],
          where: {
            user_id: {
              [Op.not]: null,
            },
            [Op.and]:{
              status:statusTask.FINALLY,
              date_initial: {
                [Op.gte]: dateInitialFormatted,
              },
              date_final: {
                [Op.lte]: dateFinalFormatted,
              },
            }
          },
        },
      ],
      group: ['User.id'],
    });

    return userTasks.map(userTask => {
      const taskFinally = userTask['tasks.Finally']

      return {
        id: userTask.id,
        name:userTask.name,
        tasksFinally,
        percentageTasksFinally: (( taskFinally * 100 ) / tasksFinally).toFixed(2)
      }
    })


  }
}

