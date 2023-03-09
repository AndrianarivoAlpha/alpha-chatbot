import { ChatGPTAPI } from 'chatgpt';

const api = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API_KEY
})

export default async function handler(req, res) {

  const { question } = JSON.parse(req.body);
  if (question) {
    try {
      const response = await api.sendMessage(question)
      res.status(200).json({ data: response.text })
    } catch (error) {
      if (error) console.log(error);
      res.status(error.status).json({ data: error.statusText });
    }
  }
}