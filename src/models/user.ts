import { Model, DataTypes } from 'sequelize';
import db from '.';

class UserModel extends Model {
  declare nickname: string;
  declare password: string;
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
/*   static associate(models) {
    // define association here
  } */
}
UserModel.init({
  id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
  nickname: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false
});

export default UserModel;