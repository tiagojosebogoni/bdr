import sequelize from 'sequelize';
import Task from '../../models/Task';
import User from '../../models/User';
import { statusTask } from '../Task/CreateTaskService';

class MediaTasksUser {
  async execute() {
    const countTasksFinally = await Task.count({
      attributes: [[sequelize.fn('COUNT', 'id'), 'Count']],
      where: {
        status: statusTask.FINALLY,
      },
    });

    const userTasks = await User.findAll({
      attributes: ['id', 'name'],
      raw: true,
      include: [
        {
          model: Task,
          as: 'tasks',
          attributes: [[sequelize.fn('COUNT', 'description'), 'Count']],
          where: {
            status: statusTask.FINALLY,
          },
        },
      ],
      group: ['User.id'],
    });

    return userTasks.map(user => {
      console.log(user, countTasksFinally);
      return {
        id: user.id,
        name: user.name,
        taskFinally: user['tasks.Count'],
        mediaTaskFinally: (user['tasks.Count'] * 100) / countTasksFinally,
      };
    });

    //    return userTasks;
  }
}

export default MediaTasksUser;
