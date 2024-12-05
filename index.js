const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi API!');
});
app.get('/api', (req, res) => {
    res.json({ mensaje: 'Este es un endpoint de la API' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
