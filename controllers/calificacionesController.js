const { queryDatabase } = require('../services/dbService');


const getAllCalificaciones = async (req, res) => {
    const query = 'SELECT * FROM calificaciones';
    try {
        const results = await queryDatabase(query);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const createCalificacion = async (req, res) => {
    const { estudiante_id, maestro_id, materia_id, create_user, create_date } = req.body;
    const query = `
        INSERT INTO calificaciones (estudiante_id, maestro_id, materia_id, create_user, create_date)
        VALUES (?, ?, ?, ?, ?)
    `;
    try {
        const result = await queryDatabase(query, [estudiante_id, maestro_id, materia_id, create_user, create_date]);
        res.json({ mensaje: 'Calificación insertada exitosamente', id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = { 
    getAllCalificaciones, 
    createCalificacion, 
};
