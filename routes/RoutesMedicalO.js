import express from "express";

// Se importan los controladores 
import { addMedicalOff, deleteMedicalOff, getAllMedicalOff, getMedicalOff, modifyMedicalOff } from '../controllers/MedicalOffController.js';

const router = express.Router();

router.post('/', addMedicalOff);
router.get('/', getAllMedicalOff);
router.get('/:id', getMedicalOff);
router.patch('/:id', modifyMedicalOff);
router.delete('/:id', deleteMedicalOff);


// Se exporta por defecto el enrutador 
export default router;