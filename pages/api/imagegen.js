import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {

  const { question } = JSON.parse(req.body);

  try {
    const response = await openai.createImage({
      prompt: question,
      n: 1,
      size: "1024x1024",
    });
    const imageUrl = response.data.data[0].url;
    res.status(200).json({ data: imageUrl })
  } catch (error) {
    console.log(error);
    res.status(error.status).json({ data: error.statusText });
  }
}