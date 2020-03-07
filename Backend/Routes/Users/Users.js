const users = require("express").Router()

const {createUser, deleteUser, getUser} = require("../../queries/users/users")


//Nested Route
const usersImagesRouter = require('./Images/Images');

users.use('/', usersImagesRouter);

users.post("/", createUser)

users.delete("/:id", deleteUser)

users.get("/:id", getUser)



module.exports = users;