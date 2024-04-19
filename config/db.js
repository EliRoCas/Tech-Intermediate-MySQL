import { Sequelize } from "sequelize";

const DB = new Sequelize('appointmentsdb', 'root', '', { //el último parámetro es para la contraseña cuando se requiere
    host: 'localhost',
    dialect: 'mysql',
})

export default DB;