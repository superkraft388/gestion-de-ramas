const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/branches', (req, res) => {
    exec('git branch', (error, stdout, stderr) => {
        if (error) {
            return res.status(500).send(`Error al obtener ramas: ${stderr}`);
        }
        const branches = stdout.split('\n').filter(branch => branch);
        res.json({ branches });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
