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
        min: 0
    },
    sale: {
        type: Number, 
        min: 0,
        max: 100,
    },
    quantity: {
        type: Number,
        min: 0,
        required: true
    },
    measurement: {
        name: {
            type: String,
            default: '1kg'
        },
        desc: {
            type: String
        }
    }
}, { timestamps: true });


export default mongoose.model("Product", ProductSchema);
