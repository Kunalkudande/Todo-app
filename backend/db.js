const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://admin:!%40Kunal!%400000@cluster0.gr10c4i.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : {
        type : Boolean,
        default : false
    },
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo : todo,
}