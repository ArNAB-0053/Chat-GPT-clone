import quary from "@/lib/quaryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDB } from "@/firebaseAdmin";

type Data = {
  answer: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(200).json({ answer: "Please provide prompt" });
    return;
  }

  if (!chatId) {
    res.status(200).json({ answer: "Please provide provide a valid chat ID" });
    return;
  }

  //ChatGPT quary
  const responce = await quary(prompt, chatId, model);

  const message: Message = {
    text: responce || "ChatGPT unnable to find the answer",
    createAt: admin.firestore.FieldValue.serverTimestamp(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };

  await adminDB
    .collection("users")
    .doc(session?.user?.email!)
    .collection("chats")
    .doc(chatId)
    .collection("message")
    .add(message);

    // console.log("Message", message.text)

    res.status(200).json({ answer: message.text });

};

export default handler;
