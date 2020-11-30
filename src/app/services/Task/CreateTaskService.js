import Task from '../../models/Task';

export const statusTask = { OPEN: 'O', FINALLY: 'F', DOING: 'D' };

class CreateTaskService {
  async execute({ description }) {
    const status = statusTask.OPEN;

    const task = await Task.create({
      description,
      status,
    });

    return task;
  }
}

export default CreateTaskService;
