import { Sequelize } from "sequelize";

const options = {
  host: process.env.DB_HOST,
  dialect: "mysql",
};
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  options
);

export const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to database");
  } catch (err) {
    console.log(err);
  }
};

export const disconnect = async () => {
  try {
    await sequelize.drop();
    await sequelize.close();
    console.log("Successfully disconnected");
  } catch (err) {
    console.log(err);
  }
};
