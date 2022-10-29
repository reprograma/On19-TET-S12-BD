const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        title: {
            type: String,
            require: true,
            unique: true,
        },
        launchYear: {
            type: Number,
            require: true,

        },
        available: {
            type: Boolean,
            require: true,

        },
        publisher: {
            type: String,
            require: true,
        },
        gender: {
            type: String,
            require: true,

        },
        writer: {
            type: String,
            require: true,

        },
        pages: Number,
    }
);

const Model = mongoose.model("livro", bookSchema)

module.exports = Model
