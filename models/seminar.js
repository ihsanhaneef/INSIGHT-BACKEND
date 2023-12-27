import mongoose from "mongoose";

const SeminarSchema = mongoose.Schema({
    collegename: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    participants: [
        {
            username: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            },
            isAdmin: {
                type: Boolean,
                default: false
            }
        }
    ],
    paymentStatus: {
        type: Boolean,
        default: false
    }
});

const Seminar = mongoose.model('seminar', SeminarSchema);

export default Seminar;