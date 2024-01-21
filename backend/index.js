const express = require("express");
const cors = require("cors");
const app = express();
const { createTodo } = require("./checkValidations");
const { updateTodo } = require("./checkValidations");
const { todo } = require("./db");

app.use(express.json());    // use for post method
app.use(cors());

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const payload = createTodo.safeParse(createPayload);
    if(!payload.success){
        res.status(411).json({
            msg : "You send Wrong inputs!!",
        })
        return;
    }
    await todo.create({                 //put in database
        title : createPayload.title,
        description : createPayload.description,
        completed : false,
    })
    res.json({
        msg : "You data Successfully add in Database",
    })
})

app.get("/todos", async function(req, res){
    const todos = await todo.find({});

    res.json({
        todos,
    })
})

app.put("/completed", async function(req, res){
    const check = req.body;
    const payload = updateTodo.safeParse(check);
    if(!payload.success){
        res.status(411),json({
            msg : "You send Wrong Inputs!!"
        })
        return;
    }
    await todo.update({
        _id: req.body.id,
    },{
        completed : true,
    })
})

app.listen(3000);