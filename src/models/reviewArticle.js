const { Schema, model } = require("mongoose");
const Types = Schema.Types;

const reactionSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        require: true
    },
    type: {
        type: Number,
        require: true
    },
    comment: {
        type: String,
        require: false
    },
})

const _schema = new Schema({
    reviewerId: {
        type: Types.ObjectId,
        required: true
    },
    companyId: {
        type: Types.ObjectId,
        required: true
    },
    reactions: {
        type: [reactionSchema],
        default: []
    }

}, { timestamps: true })

model("user", _schema);
