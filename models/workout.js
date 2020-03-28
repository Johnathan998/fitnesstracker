var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: "name of workout"
        },
        weight: {
            type: Number,
            required: "weight used"
        },
        reps: {
            type: Number,
            required: "number of reps"
        },
        sets: {
            type: Number,
            required: "number of sets"
        },
        distance: {
            type: Number,
            required: "distance"
        },
        duration: {
            type: Number,
            required: "exercise time"
        }

    }],
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;