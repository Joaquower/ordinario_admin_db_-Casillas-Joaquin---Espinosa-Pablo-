const express = require('express');
const db = require('./config/dbConfig.js');
const app = express();
const PORT = 3003;


app.use(express.json());


app.get('/api/profesores', (req, res) => {
    const query = 'SELECT * FROM profesores';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


app.get('/api/asignaturas', (req, res) => {
    const query = 'SELECT * FROM asignaturas';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


app.post('/api/profesores', (req, res) => {
    const { nombre, edad, telefono, correo, usuario_creacio, fecha_creacion } = req.body;
    const query = `
        INSERT INTO profesores (nombre, edad, telefono, correo, usuario_creacio, fecha_creacion)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [nombre, edad, telefono, correo, usuario_creacio, fecha_creacion], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ mensaje: 'Dato insertado exitosamente', id: result.insertId });
    });
});

app.post('/api/asignaturas', (req, res) => {
    const { nombre, profesor_id, create_user, create_date } = req.body;
    const query = `
        INSERT INTO asignaturas (nombre, profesor_id, create_user, create_date)
        VALUES (?, ?, ?, ?)
    `;
    db.query(query, [nombre, profesor_id, create_user, create_date], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ mensaje: 'Asignatura insertada exitosamente', id: result.insertId });
    });
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
