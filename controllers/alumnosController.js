const { queryDatabase } = require('../services/dbService');

const getAllAlumnos = async (req, res) => {
    const query = 'SELECT * FROM alumnos';
    try {
        const results = await queryDatabase(query);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const createAlumno = async (req, res) => {
    const { nombre, apellidos, email, matricula, edad, semestre, usuario_creacio, fecha_creacion } = req.body;
    const query = `
        INSERT INTO alumnos (nombre, apellidos, email, matricula, edad, semestre, usuario_creacio, fecha_creacion)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    try {
        const result = await queryDatabase(query, [nombre, apellidos, email, matricula, edad, semestre, usuario_creacio, fecha_creacion]);
        res.json({ mensaje: 'Alumno insertado exitosamente', id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = { 
    getAllAlumnos, 
    createAlumno 
};
    