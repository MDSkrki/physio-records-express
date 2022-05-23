import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const attributes = {
    name: {
        type: DataTypes.STRING,
    },

    surname: {
        type: DataTypes.STRING,
    },

    email: {
        type: DataTypes.STRING,
    },

    password: {
        type: DataTypes.STRING,
    },

    phone_number: {
        type: DataTypes.STRING,
    },

    background_information: {
        type: DataTypes.TEXT,
    },

    role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user',
    },
}

export const User = sequelize.define('User', attributes);

export default User;