const express = require("express");
const { getUsers, updateUser, login, addUser, deleteUser, getUserId, forgotPasswordEmail, sendChangePassword, sendChangeEmail, sendContactEmail, verifyToken, sendNewAccountEmail, sendSetPasswordEmail, } = require("../controllers/userController");
const multer = require('multer');

const userRouter = express.Router();
const ProfilePicUpload = multer({ dest: './images-profile' })

userRouter.get('/', getUsers)
userRouter.get('/:id?', getUserId)
userRouter.put('/:id?', updateUser)
userRouter.post('/register', addUser)
userRouter.post('/login', login)
userRouter.delete('/:id?', deleteUser)
userRouter.post('/forgottenpassword', forgotPasswordEmail)
userRouter.post('/changepassword', sendChangePassword) //verifyToken
userRouter.post('/changeemail', sendChangeEmail) //verifyToken
userRouter.post('/clientcontact', sendContactEmail)
userRouter.post('/setpassword', sendSetPasswordEmail) //verifyToken
userRouter.post('/newaccount', sendNewAccountEmail)

module.exports = { userRouter }

//ProfilePicUpload.single('ProfilePhoto'), 