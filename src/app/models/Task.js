import { Model, DataTypes } from 'sequelize';

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        description: DataTypes.STRING,
        status: DataTypes.ENUM('O', 'F', 'D'),

        date_initial: DataTypes.DATE,
        date_final: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Task;
