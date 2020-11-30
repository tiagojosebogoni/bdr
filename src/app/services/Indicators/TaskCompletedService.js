import Task from '../../models/Task';
import User from '../../models/User';
import { statusTask } from '../Task/CreateTaskService';

class TaskCompletedService {
  async execute() {
    const tasks = await Task.findAll({
      where: { status: statusTask.FINALLY },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return tasks;
  }
}

export default TaskCompletedService;
