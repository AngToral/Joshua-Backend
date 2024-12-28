const express = require("express");
const { getUsers, updateUser, login, addUser, deleteUser, getUserId, forgotPasswordEmail, sendChangePassword, sendChangeEmail, sendContactEmail, verifyToken, sendNewAccountEmail, } = require("../controllers/userController");
const multer = require('multer');

const userRouter = express.Router();
const ProfilePicUpload = multer({ dest: './images-profile' })

userRouter.get('/', getUsers)
userRouter.get('/:id?', getUserId)
userRouter.put('/:id?', ProfilePicUpload.single('ProfilePhoto'), updateUser)
userRouter.post('/register', addUser)
userRouter.post('/login', login)
userRouter.delete('/:id?', deleteUser)
userRouter.post('/forgottenpassword', forgotPasswordEmail)
userRouter.post('/changepassword', sendChangePassword) //verifyToken
userRouter.post('/changeemail', sendChangeEmail) //verifyToken
userRouter.post('/clientcontact', sendContactEmail)
userRouter.post('/newaccount', sendNewAccountEmail) //verifyToken

module.exports = { userRouter }