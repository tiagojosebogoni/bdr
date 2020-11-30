/* eslint-disable no-unused-vars */
import { Op } from 'sequelize';
import Task from '../../models/Task';
import User from '../../models/User';

class ListTasksService {
  async execute({ content_description, status, order }) {
    const where = {};

    if (content_description)
      where.description = { [Op.iLike]: `%${content_description}%` };

    if (status) {
      where.status = { [Op.iLike]: `%${status}%` };
    }

    const tasks = await Task.findAll({
      where,
      include: [
        {
          model: User,
          as: 'user',
          order: ['name', order],
          attributes: ['name', 'email'],
        },
      ],
      order: [['status', order], ['created_at', order]],
    });

    return tasks;
  }
}

export default ListTasksService;
