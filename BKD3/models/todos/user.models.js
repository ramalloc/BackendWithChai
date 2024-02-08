import mongoose from "mongoose";

// We create Schema with {new} keyword
const userSchema = new mongoose.Schema(
    {
    // The below is normal declaration of schema
    /*
    username: String,
    email: String,
    isActive: Boolean
    */

    // But We can declare the fields in Schema, We define an object with respect to the filed name to access the mogoose more funcitons.
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        // We can pass array with respect to required, array consists the bool value and a message that shows if bool is false.
        required: [true, "password required"]
    }
},
// Also We want to save or store in database that when the user loggined and modified or updated, means we want to save timestamps of user.
// For the abpve task we have mongoose timestamps
// After We done with Schema Fields as first parameter then we pass {timestapms: true} as secondary parameter.
// timestamps conssts - createdAt and UpdatedAt details.
{timestamps: true}
)

// Now we have to export the schema but there is a different way to export the schema of mogoose.
// We export using mongoose's {model} method it takes two parameters - ("Which_model", On_Which_base) -> ("model_name", Schema_name)
export const User = mongoose.model("User", userSchema);
/* Whenever we named a model and when it saves in mongodb the model converts to plrual and small letters like :- "User" -> "users", It is 
    mongodb's standerdise practice or inner working.
*/