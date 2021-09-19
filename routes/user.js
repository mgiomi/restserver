const { Router } = require('express');

const { getUser, createUser, updateUser, deleteUser } = require('../controllers/user');

const router = Router();

router.get('/', getUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/', deleteUser);

module.exports = router;
