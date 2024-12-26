const express = require("express");
const { getUser, updateUser, login, addUser, deleteUser, } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get('/:id?', getUser)
userRouter.put('/:id?', updateUser)
userRouter.post('/register', addUser)
userRouter.post('/login', login)
userRouter.delete('/:id?', deleteUser)
// userRouter.post('/forgottenpassword', forgotPasswordEmail)
// userRouter.post('/changepassword', verifyToken, sendChangePassword)
// userRouter.post('/changeemail', verifyToken, sendChangeEmail)
// userRouter.post('/clientcontact', sendContactEmail)

module.exports = { userRouter }