//admin controller
import adminModel from "../models/admin.js";
import jwt from "jsonwebtoken";
import TechnovaRegistration from "../models/registration.js";
import ReplicaRegistration from "../models/replicaregistration.js";
import LangameRegistration from "../models/langameregistration.js";
import Cultural from "../models/cultural.js";
import Debate from "../models/debate.js";
import Seminar from  "../models/seminar.js";
import Paperpresentation from  "../models/paperpresentation.js"
import Quiz from  "../models/quiz.js"
import Debugging from "../models/debugging.js";
import TreasureHunt from  '../models/treasurehunt.js'
import Photography from "../models/photography.js";
import Videography from "../models/videography.js";
import WebDesigning from "../models/webdesigning.js"








export const technovadata = async (req, res) => {
  try {
    const techData = await TechnovaRegistration.find();
    const replicaData = await ReplicaRegistration.find();
    const langameData= await LangameRegistration.find();
    const culturalData= await Cultural.find();
    const debateData= await Debate.find();
    const seminarData= await Seminar.find();
    const pptData= await Paperpresentation.find();
    const quizData= await Quiz.find();
    const debugData=await Debugging.find()
    const TreasureHuntData= await TreasureHunt.find();
    const PhotographyData= await Photography.find();
    const VideographyData= await Videography.find();
    const WebDesignData= await WebDesigning.find();

    return res.status(200).json({ techData, replicaData, langameData, culturalData, debateData, seminarData,pptData, quizData, debugData, TreasureHuntData, PhotographyData, VideographyData, WebDesignData });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        "Registration failed due to internal server error : ${error.response}",
    });
  }
};







export const adminLogin = async (req, res) => {
  try {
    const checkPassword = await adminModel.findOne({
      password: req?.body?.password,
    });
    console.log(checkPassword);
    if (checkPassword) {
      const token = jwt.sign(
        { id: checkPassword?._id, admin: true },
        "technova2023"
      );
      console.log(token);
      return res.status(200).json({ token: token });
    }
    throw new Error("Invalid password");
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Login failed" });
  }
};

export async function togglePayment(req, res) {
  try {
    console.log(req.body);
    const { id, status, eventName } = req.body;

    switch (eventName) {
      case "technova":
        await TechnovaRegistration.findByIdAndUpdate(id, {
          paymentStatus: status,
        });
        break;

      case "replica":
        await ReplicaRegistration.findByIdAndUpdate(id, {
          paymentStatus: status,
        });
        break;
      case "langame":
        await LangameRegistration.findByIdAndUpdate(id, {
          paymentStatus: status,
        });
        break;

        case "cultural":
        await Cultural.findByIdAndUpdate(id, {
          paymentStatus: status,
        });
        break;
        case "debate":
        await Debate.findByIdAndUpdate(id, {
          paymentStatus: status,
        });
        break;

        case "seminar":
        await Seminar.findByIdAndUpdate(id, {
          paymentStatus: status,
        });
        break;
        case "ppt":
        await Paperpresentation.findByIdAndUpdate(id, {
          paymentStatus: status,
        });
        break;

        case "quiz":
        await Quiz.findByIdAndUpdate(id, {
          paymentStatus: status,
        });
        break;

        case "debugg":
        await Debugging.findByIdAndUpdate(id, {
          paymentStatus: status,
        });
        break;
        
        case "treasure":
        await TreasureHunt.findByIdAndUpdate(id, {
          paymentStatus: status,
        });
        break;

        case "photography":
        await Photography.findByIdAndUpdate(id, {
          paymentStatus: status,
        });
        break;

        case "videography":
        await Videography.findByIdAndUpdate(id, {
          paymentStatus: status,
        });
        break;
        case "webdesign":
        await WebDesigning.findByIdAndUpdate(id, {
          paymentStatus: status,
        });
        break;
        

        

      default:
        break;
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Toggle payment status failed",
    });
  }
}
