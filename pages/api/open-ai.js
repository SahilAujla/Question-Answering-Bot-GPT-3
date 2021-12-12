function handler(req, res) {
  const OpenAI = require("openai-api");
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  console.log(OPENAI_API_KEY);

  const openai = new OpenAI(OPENAI_API_KEY);

  const prompt = req.body.message.trim();

  console.log(prompt);

  (async () => {
    const gptResponse = await openai.answers({
      documents: [],
      question: `${prompt}`,
      search_model: "ada",
      model: "ada",
      examples_context: "",
      examples: [
        ["What is human life expectancy in the United States?", "78 years."],
      ],
      max_tokens: 64,
      stop: ["\n", "<|endoftext|>", "."],
    });

    res.status(200).json({ answer: gptResponse.data.answers[0] });
  })();
}

export default handler;