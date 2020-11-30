import User from "../../models/User";

class CreateUserService {
  async execute({ name, email }) {
    const user = await User.create({ name, email });

    return user;
  }
}

export default CreateUserService;
