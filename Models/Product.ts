import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
    name: string;
    price: number;
    description: string;
    rating: number
    mediaUrl: string
}

const productSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    mediaUrl: {
        type: String,
        required: true
    }
})

export default mongoose.models.Product ||  mongoose.model<IProduct>('Product', productSchema, "Products");