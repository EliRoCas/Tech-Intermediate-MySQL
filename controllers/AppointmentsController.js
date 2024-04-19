// Se importa el modelo para las citas 
import appointments from "../models/Appointments.js";

// Métodos CRUD
// Crear una función para agregar citas

export const addAppointments = async (req, res) => {
    try {
        await appointments.create(req.body);
        res.json({ msg: "Cita creada con éxito." });
    } catch (error) {
        res.json({ msg: error.message });
    }
}