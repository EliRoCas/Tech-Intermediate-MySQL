// Se importa express 
import express from "express";

// Se importan los controladores 
import { addAppointments, deleteAppoint, getAllAppoints, getAppoint, modidyAppoint } from '../controllers/AppointmentsController.js';

const router = express.Router();

router.post('/', addAppointments);
router.get('/', getAllAppoints);
router.get('/:id', getAppoint);
router.patch('/:id', modidyAppoint);
router.delete('/:id', deleteAppoint);


// Se exporta por defecto el enrutador
export default router;