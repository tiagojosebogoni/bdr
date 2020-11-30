import CreateUserService from '../services/User/CreateUserService';
import UpdateUserService from '../services/User/UpdateUserService';
import DeleteUserService from '../services/User/DeleteUserService';
import ListUsersService from '../services/User/ListUsersService';

class UserController {
  async store(req, res) {
    const createUserService = new CreateUserService();

    const { name, email } = req.body;

    const user = await createUserService.execute({ name, email });

    return res.json(user);
  }

  async update(req, res) {
    const { name, email } = req.body;
    const { id } = req.params;

    const updateUserService = new UpdateUserService();

    try {
      const user = await updateUserService.execute({ id, name, email });

      return res.json(user);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }

  async index(req, res) {
    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute();

    return res.json(users);
  }

  async delete(req, res) {
    const { id } = req.params;

    const deleteUserService = new DeleteUserService();

    try {
      await deleteUserService.execute({ id });

      return res.json();
    } catch (error) {
      return res.status(404).json({ error });
    }
  }
}

export default new UserController();
