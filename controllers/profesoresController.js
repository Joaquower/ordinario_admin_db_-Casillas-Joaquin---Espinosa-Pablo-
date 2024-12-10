const { queryDatabase } = require('../services/dbService');

const getAllProfesores = async (req, res) => {
    const query = 'SELECT * FROM profesores';
    try {
        const results = await queryDatabase(query);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createProfesor = async (req, res) => {
    const { nombre, edad, telefono, correo, usuario_creacio, fecha_creacion } = req.body;
    const query = `
        INSERT INTO profesores (nombre, edad, telefono, correo, usuario_creacio, fecha_creacion)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    try {
        const result = await queryDatabase(query, [nombre, edad, telefono, correo, usuario_creacio, fecha_creacion]);
        res.json({ mensaje: 'Profesor insertado exitosamente', id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAllProfesores, createProfesor };
