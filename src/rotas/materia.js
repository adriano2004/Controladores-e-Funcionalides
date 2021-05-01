const express= require('express');
const router = express.Router();

const controller = require('../controllers/materia.controller.js');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.materia_inserir);
router.get('/listar', itemcontroller.turma_listar);
router.get('/buscar/:id', itemcontroller.professor_buscar);
router.put('/atualizar/:id', itemcontroller.professor_atualizar);
router.delete('/remover/:id', itemcontroller.turma_remover);

module.exports = router;