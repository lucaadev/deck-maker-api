import { Model, DataTypes } from 'sequelize';
import db from '.';

class DeckModel extends Model {

  declare name: string;
  declare ownerId: number;
  declare cards: string;

/*   static associate(models) {
    // define association here
  } */
}

DeckModel.init({
  id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
  name: { type: DataTypes.STRING, allowNull: false },
  ownerId: { type: DataTypes.INTEGER, allowNull: true },
  cards: { type: DataTypes.STRING, allowNull: true },
}, {
  sequelize: db,
  tableName: 'decks',
  timestamps: false,
});

export default DeckModel;
