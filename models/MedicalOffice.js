import DB from "../config/db.js";
import { DataTypes } from "sequelize";


const medicalOffices = DB.define('medicalOffices', {
    office_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    floor :{
        type: DataTypes.STRING,
        allowNull: false
    }
})