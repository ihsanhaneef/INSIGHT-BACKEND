import ann from "../models/ann.js";
const controller = {};
controller.anno = async (req, res) => {
  try {
    const announcement = await ann.find();
    if (!announcement) {
      return res.status(404).json({ error: "announcement not found" });
    }
    return res.json(announcement);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
controller.create = async (req, res) => {
  try {
    const input = req.body?.value;
    console.log(input)
    await ann.create({ Anmt: input });

    return res.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export default controller;
