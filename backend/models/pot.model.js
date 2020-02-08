const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const potSchema = new Schema ({
    username : { type: String, required: true },
    date: { type: Date, required: true },
    flowers: [{
        description: { type: String, required: true },
        prompt: { type: String, required: true },
        type: { type: String, required: true },
    },{
        description: { type: String, required: true },
        prompt: { type: String, required: true },
        type: { type: String, required: true },
    },{
        description: { type: String, required: true },
        prompt: { type: String, required: true },
        type: { type: String, required: true },
    }],
}, {
    timestamps: true,
});

const Pot = mongoose.model('Pot', potSchema);

module.exports = Pot;