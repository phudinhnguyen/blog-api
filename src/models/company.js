const { Schema, model } = require("mongoose");
const Types = Schema.Types;

const _schema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    star: {
        type: String,
        required: true
    },
    decription: {
        type: String,
        require: true
    },
    logo: {
        type: String,
        require: true
    },
    reviewArticleIds: {
        type: String,
        require: true
    },
    categoriesId: {
        type: [Types.ObjectId],
        require: true
    },
    status: {
        type: Number,
        require: true
    },
}, { timestamps: true })

model("company", _schema);
