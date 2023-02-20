import { ChatGPTAPI } from 'chatgpt';

const api = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API_KEY
})


export default async function handler(req, res) {
  const { question } = JSON.parse(req.body);
  console.log(question);

  if (question) {
    const response = await api.sendMessage(question)
    console.log(response);
    res.status(200).json({data: response.text})
  }
}