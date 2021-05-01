const express= require('express');
const router = express.Router();

const controller = require('../controllers/adriano.controller.js');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.nota_inserir);
router.get('/listar', itemcontroller.boletim_listar);
router.get('/buscar/:id', itemcontroller.nome_buscar);
router.put('/atualizar/:id', itemcontroller.nota_atualizar);
router.delete('/remover/:id', itemcontroller.nome_remover);

module.exports = router;
