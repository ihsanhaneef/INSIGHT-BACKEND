import TechnovaRegistration from "../models/registration.js";

export const technovaRegistration = async (req, res) => {
    try {
        const Data = req.body;

        const existingRegistration = await TechnovaRegistration.findOne({ email: req.body.email });

        if (existingRegistration) return res.status(400).json({ message: "Email is already registred." });

        const savedData = await TechnovaRegistration.create(Data);

        if (!savedData) return res.status(400).json({ message: "Registration is failed due to server error." })

        res.status(200).json({ message: "You are successfully registered." });

    } catch (error) {
        console.log(error);
        req.status(500).json({ message: `Registration failed due to internal server error : ${error.response}` });
    }
}