"use server";

import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey });

// Function to generate a children's bedtime story
export async function generateBedtimeStory() {
  const generatedStory = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0613", // or the model of your choice
    messages: [
      {
        role: "system",
        content:
          "Create a unique and enchanting children's bedtime story notmore than 50 words. Tailor the narrative for children aged 4-8, emphasizing imagination and positive values. Introduce fresh characters, themes, and plot elements in each story. Conclude the tale with a relevant and uplifting moral that is distinct from previous stories. The moral should impart a valuable lesson or insight inspired by the events of the unique plot. Strive for brevity while maintaining a captivating narrative, ensuring that each story stands alone with its own characters, themes, and moral lessons.",
      },
    ],
  });
  return generatedStory.choices[0].message.content;
}

// Function to convert text to audio using TTS (Text-to-Speech)
export async function generateAudioFromText(text: string) {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "onyx", // or the voice of your choice
    input: text,
  });

  const buffer = Buffer.from(await mp3.arrayBuffer());
  return buffer;
}
