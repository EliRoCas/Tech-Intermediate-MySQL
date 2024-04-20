// Se importa el modelo para las citas 
import appointments from "../models/Appointments.js";

// Métodos CRUD
// Crear una función para agregar citas - Método POST

export const addAppointments = async (req, res) => {
    try {
        await appointments.create(req.body);
        res.json({ msg: "Cita creada con éxito." });
    } catch (error) {
        res.json({ msg: error.message });
    }
}

// Método GET para mostrar todas las citas 
export const getAllAppoints = async (req, res) => {
    try {
        const apoint = await appointments.findAll();
        res.json(apoint);
    } catch (error) {
        res.json({ msg: err.message });
    }
}

// Método GET para mostra una única cita 
export const getAppoint = async (req, res) => {
    try {
        const appoint = await appointments.findAll({
            where: { id: req.params.id }
        });
        res.json(appoint[0]);
    } catch (error) {
        res.json({ msg: error.message });
    }
}

// Método PATCH para modificar una cita 
export const modidyAppoint = async (req, res) => {
    try {
        await appointments.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ msg: "Se modificó la cita con éxito." })
    } catch (error) {
        res.json({ msg: error.message })
    }
}

// Método DELETE para eliminar una cita 
export const deleteAppoint = async (req, res) => {
    try {
        const appoint = await appointments.destroy({
            where: { id: req.params.id }
        })
        if (appoint === 0) {
            return res.json({ msg: "No se encontró la cita con ese ID" });
        }
        res.json({ msg: "Se eliminó la cita con éxito" })
    } catch (error) {
        res.json({ msg: error.message })
    }
}
