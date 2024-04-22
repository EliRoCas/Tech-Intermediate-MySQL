// Se importa el modelo para los consultorios 
import medicalOffices from "../models/MedicalOffice.js";

//Métodos CRUD 

// POST agregar un consultorio
export const addMedicalOff = async (req, res) => {
    try {
        await medicalOffices.create(req.body);
        res.json({ msg: "Consultorio creado con éxito." })
    } catch (error) {
        res.json({ msg: error.message });
    }
}

// GET todos los consultorios
export const getAllMedicalOff = async (res, req) => {
    try {
        const medicalOff = await medicalOffices.findAll();
        res.json(medicalOff);
    } catch (error) {
        res.json({ msg: error.message });
    }
}

// GET mostrar un consultorio por id
export const getMedicalOff = async (req, res) => {
    try {
        const medicalOff = await medicalOffices.findAll({
            where: { id: req.params.id }
        });
        res.json(medicalOff[0]);
    } catch (error) {
        res.json({ msg: error.message });
    }
}

// PATCH modificar un consultorio 
export const modifyMedicalOff = async (req, res) => {
    try {
        await medicalOffices.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ msg: "Se modificó la oficina." });
    } catch (error) {
        res.json({ msg: error.message });
    }
}

// DELETE para eliminar un consultorio
export const deleteMedicalOff = async (req, res) => {
    try {
        const medicalOff = await medicalOffices.destroy({
            where: { id: req.params.id }
        });
        if (medicalOff === 0) {
            return res.json({ msg: "No se encontró el consultorio con ese id." });
        }
        res.json({ msg: "Se eliminó el consultorio con éxito." });
    } catch (error) {
        res.json({ msg: error.message });
    }
}