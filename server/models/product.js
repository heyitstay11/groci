import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60
    },
    desc: {
        type: String,
        required: true,
        maxlength: 200
    },
    img: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sale: {
        type: Number, 
        min: 0,
        max: 100,
    }
}, { timestamps: true });

export default mongoose.model("Product", ProductSchema);
