import MediaTasksUserService from '../services/Indicators/MediaTasksUserService';
import TaskCompletedService from '../services/Indicators/TaskCompletedService';
import MediaOpenDoingService from '../services/Indicators/MediaOpenDoingService';
import MediaDoingFinallyService from '../services/Indicators/MediaDoingFinallyService';

class IndicatorController {
  async tasksCompleted(req, res) {
    const taskCompletedService = new TaskCompletedService();
    const tasks = await taskCompletedService.execute();

    return res.json(tasks);
  }

  async mediaTasksUser(req, res) {
    const mediaTasksUserService = new MediaTasksUserService();
    const tasks = await mediaTasksUserService.execute();

    return res.json(tasks);
  }

  async mediaOpenDoing(req, res) {
    const mediaOpenDoingService = new MediaOpenDoingService();
    const tasks = await mediaOpenDoingService.execute();

    return res.json({tasks});
  }

  async mediaTasksUser(req, res) {
    const mediaTasksUserService = new MediaTasksUserService();
    const tasks = await mediaTasksUserService.execute();

    return res.json(tasks);
  }

  async mediaDoingFinally(req, res) {
    const mediaDoingFinallyService = new MediaDoingFinallyService();
    const tasks = await mediaDoingFinallyService.execute();

    return res.json(tasks);
  }
}

export default new IndicatorController();
