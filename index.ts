import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

export async function uuidv4() {
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
        messages: [{ role: 'user', content: 'Output a valid UUID v4 ONLY. do not include any other output' }],
        model: 'gpt-4o-mini',
    };

    const chatCompletion = await client.chat.completions.create(params);

    return chatCompletion.choices[0].message.content;
}
