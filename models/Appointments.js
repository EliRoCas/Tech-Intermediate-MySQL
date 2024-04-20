// Importamos la configuración de la DB 
import DB from "../config/db.js";
import { DataTypes } from "sequelize";


const appointments = DB.define('appointments', {
    doctor_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    medical_specialty: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default appointments;