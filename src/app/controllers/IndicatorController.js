import TaskCompletedService from '../services/Indicators/TaskCompletedService';

class IndicatorController {
  async list(req, res) {
    const taskCompletedService = new TaskCompletedService();
    const tasks = await taskCompletedService.execute();

    res.json(tasks);
  }
}

export default new IndicatorController();
