function handler(req, res) {
  res.status(200).json({ message: "The serverless fuction works!" });
}

export default handler;
