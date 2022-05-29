import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    products: {
        type: Array,
        default: []
    },
    total_price: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    total_quantity: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    }
}, { timestamps: true });

export default mongoose.model("Cart", ProductSchema);
