import mongoose from "mongoose";

const PubgSchema = mongoose.Schema({
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

const Pubg = mongoose.model('pubg', PubgSchema);

export default Pubg;