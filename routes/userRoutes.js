const express = require("express");
const { getUsers, updateUser, login, addUser, deleteUser, getUserId, forgotPasswordEmail, sendChangePassword, sendChangeEmail, sendContactEmail, verifyToken, sendNewAccountEmail, updatePhoto, } = require("../controllers/userController");
const multer = require('multer');

const userRouter = express.Router();
const ProfilePicUpload = multer({ dest: './images-profile' })

userRouter.get('/', getUsers)
userRouter.get('/:id?', getUserId)
userRouter.put('/:id?', updateUser)
userRouter.put('/update/:id?', ProfilePicUpload.single('profilePic'), updatePhoto)
userRouter.post('/register', addUser)
userRouter.post('/login', login)
userRouter.delete('/:id?', deleteUser)
userRouter.post('/forgottenpassword', forgotPasswordEmail) // Si se olvida la contraseña fuera del login
userRouter.post('/changepassword', sendChangePassword) //verifyToken
userRouter.post('/changeemail', sendChangeEmail) //verifyToken
userRouter.post('/clientcontact', sendContactEmail) // envío de correo cuando alguien rellena el form de contacto en home
userRouter.post('/newaccount', sendNewAccountEmail) //envío de correo cuando alguien rellena el form de sign in en home

module.exports = { userRouter }
