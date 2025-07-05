const express = require('express');
const router = express.Router();
const FileController = require('../controllers/fileController');
const empresasData = require('../../src/data/empresas.json');

router.get('/empresaList', (req, res) => {
    res.json(empresasData);
});

router.get('/empresa/:id', (req, res) => {
    const id = req.params.id;
    const empresa = empresasData.find(e => String(e.orden) === id);
    if (empresa) {
        res.json(empresa);
    } else {
        res.status(404).json({ error: 'Empresa no encontrada' });
    }
});


// Ruta para enviar una imagen
router.get('/getFile/:id/:name', FileController.sendImage); 

module.exports = router;  