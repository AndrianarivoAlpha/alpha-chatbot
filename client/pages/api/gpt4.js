import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {

  const { question } = JSON.parse(req.body);

  if (question) {
    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
      });
      res.status(200).send({ data: completion.data.choices[0].message.content })
    } catch (error) {
        console.log(error);
        const errorMsg = "Une erreur s'est produite, veuillez reesayer ulterieurement."
        res.status(error.status).send({ data: errorMsg });
    }
  }
}