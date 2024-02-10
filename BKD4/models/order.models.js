import mongoose from "mongoose";

const orderedItemSchema = new mongoose.Schema(
    {
        // Here we will store the individual product's id and there quantity.
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            rquired: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }
);

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        // Now we have to check how much items were ordered by customer because it is possible that customer oredered multiple products/items.
        // We can tkae the type of orderedItems in Array but we should have something to place that item in Array 
        // But we don't have any record for that.
        // So we should have a Schema which in consists these details that which product is ordered and the quantity of that product ordered.
        // Therefore we need to make one schema here which helps in making schema of order, they called mini models.
        orderedItems: {
            // The type will be an array which consists multiple products and each product have their quantity
            type: [orderedItemSchema],
            required: true  
        },
        address: {
            type: String,
            required: true
        },
        // Now we will define the status of Order which cannot be changed by using enum (enumeration)
        status: {
            type: String,
            enum: ["PENDING", "CANCELLED", "DELIVERED"],
            default: "PENDING"
        }
    },
    {timestamps: true}
);

export const Order = mongoose.model("Order", orderSchema);