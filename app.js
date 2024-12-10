const express = require('express');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = 3003;

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
