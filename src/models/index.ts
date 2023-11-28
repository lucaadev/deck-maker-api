import { Sequelize } from 'sequelize';
import * as config from '../config/config.ts';
import { type } from 'os';

type config = {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: string;
}

const sequelize = new Sequelize(config)

export default sequelize;