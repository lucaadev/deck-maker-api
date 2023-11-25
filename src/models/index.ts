import { Sequelize } from 'sequelize';
import * as config from '../config/config.js';

const sequelize = new Sequelize(config)

export default sequelize;