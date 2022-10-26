import {Sequelize} from 'sequelize';
import config from "../config";

const db = new Sequelize({
    dialect: "postgres",
    database: config.POSTGRES_DB,
    password: config.POSTGRES_PASSWORD,
    username: config.POSTGRES_USER,
    host: config.POSTGRES_HOST,
    port: +config.POSTGRES_PORT
});

(async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
