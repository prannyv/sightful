// Imports the Google Cloud client library
const fs = require('fs');
const speech = require('@google-cloud/speech');

// Creates a client

async function transcribeAudio() {
    const client = new speech.SpeechClient();
    const filename = "testFile.mp3"


    const config = {
        encoding: 'MP3',
        sampleRateHertz: 16000,
        languageCode: 'en',
    };

    const audio = {
    content: fs.readFileSync(filename).toString('base64'),
    };

    // var audioFile = speech.RecognitionAudio(audio.content)

    const request = {
        config: config,
        audio: audio,
    };

    const [response] = await client.recognize(request);
    const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
    console.log('Transcription: ', transcription);
}

transcribeAudio().catch(console.error);
