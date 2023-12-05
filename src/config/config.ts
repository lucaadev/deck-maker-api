import 'dotenv/config';
import { Options } from 'sequelize';

export const config: Options = {
  dialect: "mysql",
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQLHOST,
};
