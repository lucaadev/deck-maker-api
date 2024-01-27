import 'dotenv/config';
import { Options } from 'sequelize';

declare var process : {
  env: {
    PORT: number;
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_DIALECT: string;
  }
}

export const config: Options = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.PORT,
  dialect: "mysql"
};

