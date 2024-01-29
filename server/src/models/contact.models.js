import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: false,
    },
    message: {
        type: String,
        required: true,
    },
    categories: {
        type: [String],
    }
});


contactSchema.index({ email: 1 }, { unique: false });


const Contact = mongoose.model("Contact", contactSchema);

export {Contact}