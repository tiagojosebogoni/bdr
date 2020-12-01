import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    // this.belongsTo(models.Task, { foreignKey: 'user_id', as: 'tasks' });
    this.hasMany(models.Task, { foreignKey: 'user_id', as: 'tasks' });
  }
}

export default User;
