const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    muscleGroup: {
        enum: ['Arms', 'Legs', 'Back', 'Core'],
        description: 'can be multiple enum vlaues and is required'
    },
    reps: {
        enum: ['5','10','15', '20', '25', '30'],
        description: 'can only be one enum value and is required'
    },
    weight: {
        enum: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', 
                '65', '70', '75', '80', '85', '90', '100', '105', '110', '115', '120',
                '125', '130', '135', '140', '145', '150'],
        description: 'can only be one enum value and is required'
    }
})

