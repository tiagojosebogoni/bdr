import User from '../../models/User';

class UpdateUserService {
  async execute({ id, name, email }) {
    const user = await User.findOne({ where: { id } });

    if (!user) {
      throw 'User not found!';
    }

    user.name = name;
    user.email = email;

    await user.save();

    return user;
  }
}

export default UpdateUserService;
