import { Sequelize } from "sequelize";

const options = {
    host: 'localhost',
    dialect: 'mysql',
}
export const sequelize = new Sequelize('physio-records','root','password',options);

export const connect = async () => {
    try{
        await sequelize.authenticate();
        console.log('Successfully connected to database')
    } catch (err) {
        console.log(err)
    }
}

export const disconnect = async () => {
    try {
        await sequelize.close();
        console.log('Successfully disconnected');
    } catch (err) {
        console.log(err);
    }
}