function handler(req, res) {
  const OpenAI = require("openai-api");
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  const openai = new OpenAI(OPENAI_API_KEY);

  const prompt = req.body.message.trim();

  if (req.method === "POST") {
    res.status(200).json({ message: "Hi my name is Sahil" });
  } else {
    res.status(500);
    res.end();
  }
}

export default handler;
