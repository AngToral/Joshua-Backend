const { trainingModel } = require('../models/training.model');

const getTraining = async (req, res) => {
    try {
        const trainings = await trainingModel.find({ removedAt: { $eq: null } })
        res.status(200).json(trainings)
    } catch (error) {
        res.status(500).json({ msg: "Error getting trainings", error: error.message })
    }
}

const getTrainingId = async (req, res) => {
    try {
        const training = await trainingModel.findById(req.params.id)
        if (training) { return res.status(200).json(training) }
        else return res.status(404).json({ msg: "Training not found" })
    } catch (error) {
        return res.status(403).json({ msg: "Forbidden", error: error.message })
    }
}

const updateTraining = async (req, res) => {
    try {
        const training = await trainingModel.findByIdAndUpdate(req.params.id, { ...req.body })
        if (training) { return res.status(200).json({ msg: "Training updated" }) }
        else return res.status(404).json({ msg: "Training not found" })
    } catch (error) {
        res.status(400).json({ msg: "You missed some parameter", error: error.message })
    }
}

const addTraining = async (req, res) => {
    try {
        const training = await trainingModel.create({ ...req.body })
        console.log(training)
        res.status(201).json({ msg: "Training created", id: training._id })
    } catch (error) {
        res.status(400).json({ msg: "You missed some parameter", error: error.message })
    }
}

const deleteTraining = async (req, res) => {
    try {
        const training = await trainingModel.findByIdAndUpdate(req.params.id, { removedAt: new Date(), })
        if (training) { return res.status(200).json(training) }
        else return res.status(404).json({ msg: "Training not found" })
    } catch (error) {
        res.status(403).json({ msg: "Forbidden", error: error.message })
    }
}

module.exports = {
    getTraining,
    getTrainingId,
    updateTraining,
    addTraining,
    deleteTraining
}