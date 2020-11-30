import Task from '../../models/Task';
import User from '../../models/User';

const statusTask = { OPEN: 'O', FINALLY: 'F', DOING: 'D' };

class UpdateTaskService {
  async execute({ id, user_id, status }) {
    const task = await Task.findByPk(id);

    if (!task) {
      throw 'Task not found!';
    }

    const user = await User.findByPk(user_id);

    if (!user) {
      throw 'User not found!';
    }

    switch (status) {
      case statusTask.DOING:
        task.user_id = user_id;
        task.date_initial = new Date();
        break;

      case statusTask.FINALLY:
        task.date_final = new Date();
        break;
      default:
        throw 'Status not found!';
    }

    task.status = status;

    await task.save();

    return task;
  }
}

export default UpdateTaskService;
