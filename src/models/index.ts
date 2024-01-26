import { Sequelize } from "sequelize";
import 'dotenv/config';

const envi = process.env;

const sequelize = new Sequelize(
    `mysql://${envi.DB_USER}:${envi.DB_PASSWORD}@${envi.DB_HOST}/${envi.DB_NAME}`
);

export default sequelize;