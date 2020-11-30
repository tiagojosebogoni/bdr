import User from "../../models/User";

class DeleteUserService {
  async execute({ id }) {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error();
    }

    await user.destroy();
  }
}

export default DeleteUserService;
