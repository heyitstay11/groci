import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        maxlength: 300
    },
    phone: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true,
        min: 0,
    },
    status: {
        type: String,
        default: "processing"
    },
    payment_method: {
        type: String,
        default: "cash_on_delivery",
        required: true,
    },
}, { timestamps: true })

export default mongoose.model("Order", OrderSchema);
