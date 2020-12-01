import User from "../../models/User";

class CreateUserService {
  async execute({ name, email, admin }) {
    const user = await User.create({ name, email, admin });

    return user;
  }
}

export default CreateUserService;
