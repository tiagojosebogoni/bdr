/* eslint-disable no-unused-vars */
import CreateTaskService from '../services/Task/CreateTaskService';
import ListTasksService from '../services/Task/ListTasksService';
import UpdateTaskService from '../services/Task/UpdateTaskService';

class TaskController {
  async store(req, res) {
    const createTaskService = new CreateTaskService();

    const { description } = req.body;

    const task = await createTaskService.execute({
      description,
    });

    return res.json(task);
  }

  async update(req, res) {
    const { user_id, status } = req.body;
    const { id } = req.params;

    try {
      const updateTaskService = new UpdateTaskService();
      const task = await updateTaskService.execute({ id, user_id, status });

      return res.json(task);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }

  async index(req, res) {
    try {
      const { content_description, status, order } = req.query;
      const listTasksService = new ListTasksService();

      const tasks = await listTasksService.execute({
        content_description,
        status,
        order,
      });

      return res.json(tasks);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }
}

export default new TaskController();
