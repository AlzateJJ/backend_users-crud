const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll()
    return res.json(users)
});

const createUser = catchError(async(req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body
    const newUser = await User.create(
        {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            birthday: birthday
        }
    )
    res.status(201).json(newUser)
})

const remove = catchError(async(req, res) => {
    const { id } = req.params
    await User.destroy({where: { id:id }})
    res.sendStatus(204)
})

const update = catchError(async(req, res) => {
    const { id } = req.params
    const { first_name, last_name, email, password, birthday } = req.body
    const updatedUser = await User.update(
        {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            birthday: birthday
        }, { where: {id: id}, returning: true}
    )
    return res.json(updatedUser[1][0])
})

module.exports = {
    getAll, createUser, remove, update
}