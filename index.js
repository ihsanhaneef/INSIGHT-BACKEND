import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import technovaRegistrationRouter from "./routes/registration.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors({
    origin:"*"
}));

// const corsOptions = {
//     origin: 'http://localhost:5501',
// };

// app.use(cors(corsOptions));

app.use('/api/technova', technovaRegistrationRouter);

const CONNECTION_URL =
    "mongodb+srv://ihsanhaneef:Jyryi7x3IXyvDuFC@cluster0.0ehote5.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 7000;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(CONNECTION_URL);
        console.log(`Mongo db connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

try {
    connectDB();
    app.listen(PORT, () => console.log(`Server Running on ${PORT}`))
} catch (error) {
    console.log(error);
}


