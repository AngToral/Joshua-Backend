const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainingSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    tittle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Cardio', 'Boxing', 'GYM', 'Nutrition', 'Injuries', 'Stretching'],
    },
    feedback: {
        type: String,
    },
    likes: {
        type: Number,
    },
    removedAt: Date
},
    { timestamps: true }
)

const trainingModel = mongoose.model("trainingModel", trainingSchema);

module.exports = { trainingModel }