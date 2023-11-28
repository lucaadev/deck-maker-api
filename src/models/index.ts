import { Sequelize } from 'sequelize';
import * as config from '../config/config.ts';

const sequelize = new Sequelize(config)

export default sequelize;