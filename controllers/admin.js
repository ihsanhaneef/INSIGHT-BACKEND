import TechnovaRegistration from "../models/registration.js";
// import ReplicaRegistration from "../models/replicaregistration.js";
// import Cultural from "../models/cultural.js";







                                        // technova

export const technovadata = async (req, res) => {
    try {
        const techData = await TechnovaRegistration.find();
       
        return res.status(200).json(techData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Registration failed due to internal server error : ${error.response}' });
    }
}


                                        // replica

// export const replicadata = async (req, res) => {
//     try {
//         const replData = await Cultural.find();
       
//         return res.status(200).json(replData);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: `Registration failed due to internal server error : ${error.response}` });
//     }
// }



                                      // cultural

// export const culturaldata = async (req, res) => {
//     try {
//         const cultData = await ReplicaRegistration.find();
       
//         return res.status(200).json(cultData);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: `Registration failed due to internal server error : ${error.response}` });
//     }
// }

//                                     // langame
