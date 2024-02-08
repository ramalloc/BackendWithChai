import mongoose from "mongoose";

// Major Todo which consists many sub todos
const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            uniquie: true
        },
        // It ticked marked when all its sub todos gets done or marked then it should also marked
        complete: {
            type: Boolean,
            default: false
        },
        // User data who created this todo, There should be relation b/w the user and this field
        // So there are two things that we should understant that It is special type of data in mongoose/mongodb 
        // And giving the refernce of user/data model name. 
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            // After this we have to give reference of model
            ref: "User"
        },
        // We are taking sub todos which consistes in an array
        subTodos: [
            {
                // We are taking referance here from sub_todo
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ]
    },
    { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);