import express from "express";
import cors from "cors";

// Se importa la configuración de la DB 
import DB from '../config/db.js';

// Se importa el archivo de las rutas
import routesAppointments from '../routes/RoutesAppointments.js';
import routesMedicalOff from '../routes/RoutesMedicalO.js';

// Se define la vaiable app para trabajar con express
const app = express();
app.use(cors());
app.use(express.json());
app.use('/appointments', routesAppointments);
app.use('/meddicalOffices', routesMedicalOff);

// Autenticación y verificación DB 
try {
    await DB.authenticate(); // Se usa el método 'authenticate' de la instancia de Sequelize ('DB) para 
    // verificar la conexión a la base de datos. Si la promesa es exitosa, significa que se conectó
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


// Muestra el mensaje en el navegador 
app.get("/", (req, res) => {
    res.send("¡Hola, mundo!")
});


// Configuración del puerto de escucha
app.listen(5000, () => {
    console.log("El servidor está corriendo en http://localhost:5000");
}); 