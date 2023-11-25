import { Model, DataTypes } from 'sequelize';
import db from '.';

  class CardModel extends Model {
    declare id: number;
    declare name: string;
    declare image: string;
    declare description: string;
    declare rarity: string;
    declare life: number;
    declare attack: number;
    declare defense: number;
    declare price: number;
    declare cardSuper: boolean;
    declare deckId: number;

/*     static associate(models) {
      // define association here
    } */
  }
  CardModel.init({
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
    name: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.TEXT, allowNull: true },
    description: { type: DataTypes.STRING, allowNull: false },
    rarity: { type: DataTypes.STRING, allowNull: false },
    life: { type: DataTypes.NUMBER, allowNull: false },
    attack: { type: DataTypes.NUMBER, allowNull: false },
    defense: { type: DataTypes.NUMBER, allowNull: false },
    price: { type: DataTypes.NUMBER, allowNull: false },
    cardSuper: { type: DataTypes.BOOLEAN, allowNull: false },
    deckId: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize: db,
    tableName: 'cards',
    timestamps: false,
  });

export default CardModel;