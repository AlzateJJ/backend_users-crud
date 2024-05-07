const { getAll, createUser, remove, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/users")
	.get(getAll)
    .post(createUser)

userRouter.route("/users/:id")
    .delete(remove)
    .put(update)

module.exports = userRouter;