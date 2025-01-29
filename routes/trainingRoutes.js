const express = require("express");
const { getTraining, updateTraining, addTraining, deleteTraining, getTrainingId } = require("../controllers/trainingController");

const trainingRouter = express.Router();

trainingRouter.get('/', getTraining)
trainingRouter.get('/:id?', getTrainingId)
trainingRouter.post('/addtraining', addTraining)
trainingRouter.put('/:id?', updateTraining)
trainingRouter.delete('/:id?', deleteTraining)

module.exports = { trainingRouter }