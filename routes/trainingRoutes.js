const express = require("express");
const { getTraining, updateTraining, addTraining, deleteTraining } = require("../controllers/trainingController");

const trainingRouter = express.Router();

trainingRouter.get('/:id?', getTraining)
trainingRouter.put('/:id?', updateTraining)
trainingRouter.post('/addtraining', addTraining)
trainingRouter.delete('/:id?', deleteTraining)

module.exports = { trainingRouter }