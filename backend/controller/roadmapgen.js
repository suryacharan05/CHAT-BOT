require("dotenv").config();
const { CohereClient } = require("cohere-ai");


const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY,
});

const roadmapgen = async (req, res) => {
    const { userqury } = req.body;
console.log("genarating....");
    if (!userqury) {
        return res.status(400).json({ error: "pls enter something" });
    }

    try {
        const response = await cohere.generate({
            model: "command",
            prompt: `You are a compassionate mental health support companion 🌿. Always respond like a caring, supportive friend 🤗.
            If the user's message is short or light, reply briefly in a warm and friendly tone 😊.
            If the user shares something emotional or serious, respond with kindness, empathy, and a bit more depth 🫶.
            Use simple words and include a few relevant emojis. Never sound robotic or overly formal.

            user text: ${userqury}`,     
                        max_tokens: 10000, 
        });

        let roadmap = response.generations[0].text;
        if (response.generations[0].finish_reason === 'MAX_TOKENS') {
            roadmap += "\n\n[Response truncated due to token limit. Consider refining your request or increasing max_tokens.]";
        }
console.log(roadmap);
        res.send( roadmap );
    } catch (error) {
        console.error("Cohere API Error:", error);
        res.status(500).json({ error: "Error generating roadmap", details: error.message });
    }
};

module.exports = { roadmapgen };
