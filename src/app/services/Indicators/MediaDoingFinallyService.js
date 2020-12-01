import { Op } from 'sequelize';
import { differenceInSeconds, formatDuration } from 'date-fns'

import Task from '../../models/Task';

class MediaDoingFinallyService {
  async execute() {
    const tasks = await Task.findAll({
      where: {
        date_final: {
          [Op.ne]: null,
        },
      },
    });

    const mediaTasks = tasks.map( task => {
      const diferenceInSeconds = differenceInSeconds( task.date_final, task.date_initial )

      var day = Math.floor( diferenceInSeconds / 3600 / 24);
      var hours = Math.floor( diferenceInSeconds / 3600 % 24);
      var minutes = Math.floor( (diferenceInSeconds % 3600) / 60 );
      var seconds = diferenceInSeconds % 60;

      minutes = minutes;
      seconds = seconds;
      hours = hours;

      return {
        id: task.id,
        description: task.description,
        day,
        hours,
        minutes,
        seconds
      };
    })

    return mediaTasks
  }
}

export default MediaDoingFinallyService;
