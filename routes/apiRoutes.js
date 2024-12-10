const express = require('express');
const router = express.Router();

const asignaturasController = require('../controllers/asignaturasController');
const profesoresController = require('../controllers/profesoresController');
const alumnosController = require('../controllers/alumnosController');
const calificacionesController = require('../controllers/calificacionesController');


router.get('/profesores', profesoresController.getAllProfesores);
router.get('/asignaturas', asignaturasController.getAllAsignaturas);
router.get('/alumnos', alumnosController.getAllAlumnos);
router.get('/calificaciones', calificacionesController.getAllCalificaciones);


router.post('/profesores', profesoresController.createProfesor);
router.post('/asignaturas', asignaturasController.createAsignatura);
router.post('/alumnos', alumnosController.createAlumno); 
router.post('/calificaciones', calificacionesController.createCalificacion); 

module.exports = router;
