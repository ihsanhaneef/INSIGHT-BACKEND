import Pubg from "../models/pubg.js";

export const pubg = async (req, res) => {
    try {
        const { email, collegename, participants } = req.body;
        console.log(req.body)
        if (!email || !collegename || !participants) return res.status(400).json({ message: "Missing of essential data from request body." });

        const existingRegistration = await Pubg.findOne({ email: req.body.email });

        if (existingRegistration) return res.status(400).json({ message: "Email is already registred." });

        const savedData = await Pubg.create(req.body);
        
        if (!savedData) return res.status(400).json({ message: "Registration is failed due to server error." })
    
        res.status(200).json({ message: "You are successfully registered." });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Registration failed due to internal server error : ${error.response}` });
    }
}