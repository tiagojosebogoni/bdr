import User from "../../models/User";

class ListUsersService {
  async execute() {
    const users = await User.findAll();

    return users;
  }
}

export default ListUsersService;
