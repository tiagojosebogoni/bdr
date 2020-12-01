import { Model, DataTypes} from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        admin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
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
