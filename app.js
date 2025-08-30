const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint para obtener las ramas del repositorio git
app.get('/branches', (req, res) => {
    exec('git branch', (error, stdout, stderr) => {
        // Manejar el error si ocurre
        if (error) {
            return res.status(500).send(`Error al obtener ramas: ${stderr}`);
        }
        // Dividir la salida en ramas y filtrar líneas vacías
        const branches = stdout.split('\n').filter(branch => branch.trim());
        // Verificar si no hay ramas
        if (branches.length === 0) {
            return res.status(404).send('No se encontraron ramas.');
        }
        // Enviar la respuesta con las ramas encontradas
        res.json({ branches });
    });
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});