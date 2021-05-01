const express= require('express');
const router = express.Router();

const controller = require('../controllers/aluno.controller.js');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.aluno_inserir);
router.get('/listar', itemcontroller.historico_listar);
router.get('/buscar/:id', itemcontroller.cpf_buscar);
router.put('/atualizar/:id', itemcontroller.nota_atualizar);
router.delete('/remover/:id', itemcontroller.aluno_remover);

module.exports = router;