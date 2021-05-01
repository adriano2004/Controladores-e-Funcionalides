const express= require('express');
const router = express.Router();

const controller = require('../controllers/professor.controller.js');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.profissao_inserir);
router.get('/listar', itemcontroller.profissao_listar);
router.get('/buscar/:id', itemcontroller.historico_buscar);
router.put('/atualizar/:id', itemcontroller.endereco_atualizar);
router.delete('/remover/:id', itemcontroller.professor_remover);

module.exports = router;