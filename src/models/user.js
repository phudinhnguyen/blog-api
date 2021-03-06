const { Schema, model } = require("mongoose");
const Types = Schema.Types;

const _schema = new Schema({
    userName: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
}, { timestamps: true })

model("user", _schema);
