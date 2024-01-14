import openai  from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  try {
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613",
      messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: prompt }],
    });

    return res.choices[0].message.content;
  } catch (err:any) {
    return `ChatGPT unable to find the answer! ${err.message}`;
  }
};

export default query;
