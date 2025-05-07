const express = require('express');
const router = express.Router();
const produtoController =
    require('../controllers/produtoController');

router.get('/', produtoController.obterTodos);
router.get('/:id', produtoController.obterPorId);
router.post('/', produtoController.inserir);
router.put('/:id', produtoController.editar);
router.delete('/:id', produtoController.remover);


module.exports = router;
