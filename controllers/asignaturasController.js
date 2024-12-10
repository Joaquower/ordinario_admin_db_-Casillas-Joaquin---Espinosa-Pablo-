const { queryDatabase } = require('../services/dbService');

const getAllAsignaturas = async (req, res) => {
    const query = 'SELECT * FROM asignaturas';
    try {
        const results = await queryDatabase(query);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createAsignatura = async (req, res) => {
    const { nombre, profesor_id, create_user, create_date } = req.body;
    const query = `
        INSERT INTO asignaturas (nombre, profesor_id, create_user, create_date)
        VALUES (?, ?, ?, ?)
    `;
    try {
        const result = await queryDatabase(query, [nombre, profesor_id, create_user, create_date]);
        res.json({ mensaje: 'Asignatura insertada exitosamente', id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAllAsignaturas, createAsignatura };
