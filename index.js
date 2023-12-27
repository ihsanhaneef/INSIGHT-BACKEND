// indexedDB.js/app.js
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import technovaRegistrationRouter from "./routes/registration.js";
import replicaRegistrationRouter from "./routes/replicaregistration.js";
import langameRegistrationRouter from "./routes/langameregistration.js";
import debuggingRouter from "./routes/debugging.js";
import scoreRouter from "./routes/score.js";
import treasurehuntRouter from "./routes/treasurehunt.js";
import webdesigningRouter from "./routes/webdesigning.js";
import pubgRouter from "./routes/pubg.js";
import seminarRouter from "./routes/seminar.js";
import culturalRouter from "./routes/cultural.js";
import quizRouter from "./routes/quiz.js";
import debateRouter from "./routes/debate.js";
import papaerpresentationRouter from "./routes/paperpresentation.js";
import liveEventRouter from "./routes/liveevent.js";
import winnerrouter from "./routes/winners.js";
import Annrouter from "./routes/ann.js";




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
app.use('/api/replica', replicaRegistrationRouter);
app.use('/api/langame', langameRegistrationRouter);
app.use('/api/debugging', debuggingRouter);
app.use('/api/score', scoreRouter);
app.use('/api/treasurehunt', treasurehuntRouter);
app.use('/api/webdesigning', webdesigningRouter);
app.use('/api/pubg', pubgRouter);
app.use('/api/cultural', culturalRouter);
app.use('/api/quiz', quizRouter);
app.use('/api/debate', debateRouter);
app.use('/api/paperpresentation', papaerpresentationRouter);
app.use('/api/seminar', seminarRouter);
app.use('/api/admin', technovaRegistrationRouter);
app.use("/api/liveevent", liveEventRouter);
app.use("/api/winners",winnerrouter)
app.use("/api/anno", Annrouter)



const CONNECTION_URL =
    "mongodb+srv://ihsanhaneef:Jyryi7x3IXyvDuFC@cluster0.0ehote5.mongodb.net/insight24?retryWrites=true&w=majority";


    const PORT = process.env.PORT || 7000;

const connectDB = async () => {
    try {
        console.log("CONNNECTING TO DATABASE..............")
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


