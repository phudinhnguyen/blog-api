const { Schema, model } = require("mongoose");
const Types = Schema.Types;

const ownersSchema = new Schema({
    ownerId: {
        type: Types.ObjectId,
        require: true
    }
})

const _schema = new Schema({
    createdBy: {
        type: Types.ObjectId,
        required: true
    },
    targetId: {
        type: String,
        require: true
    },
    owners: {
        type: [ownersSchema],
        default: []
    }
}, { timestamps: true })

model("categories", _schema);
