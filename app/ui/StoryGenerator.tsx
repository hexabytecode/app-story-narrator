import { useState } from "react";
import { generateBedtimeStory } from "@/app/lib/openai";

export default function ExpandableStory() {
  const [bedtimeStory, setBedtimeStory] = useState<string | null>("");

  async function handleGenerate() {
    try {
      const generatedStory = await generateBedtimeStory();
      setBedtimeStory(generatedStory);

      // Now you can use bedtimeStory as needed, for example, set it in the component state
    } catch (error) {
      console.error("Error generating bedtime story:", error);
      // Handle errors accordingly
    }
  }

  return (
    <main className="flex flex-col justify-center items-center">
      <button
        onClick={handleGenerate}
        className="bg-orangePastel text-orange py-2 px-4 rounded hover:font-medium"
      >
        Generate
      </button>
      {bedtimeStory && (
        <p className={`text-orange bg-orangePastel rounded-xl w-3/4 p-3 my-5`}>
          {bedtimeStory}
        </p>
      )}
    </main>
  );
}
