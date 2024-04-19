// Se importa express 
import express from "express";

// Se importan los controladores 
import { addAppointments } from '../controllers/AppointmentsController.js';

const router = express.Router();

router.post('/', addAppointments);


// Se exporta por defecto el enrutador
export default router;