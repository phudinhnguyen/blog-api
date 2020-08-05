const { Schema, model } = require("mongoose");
const Types = Schema.Types;

const _schema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        require: true
    },
}, { timestamps: true })

model("categories", _schema);
