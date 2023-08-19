// Imports the Google Cloud client library
const fs = require('fs');
const speech = require('@google-cloud/speech');

// Creates a client

function checkWordsInLists(list1, list2) {
    for (const word of list1) {
      if (list2.includes(word)) {
        return true; // Found a common word
      }
    }
    return false; // No common words found
  }

async function transcribeAudio() {
    const client = new speech.SpeechClient();
    const filename = "testFile2.mp3"


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
    console.log('Transcription: ', transcription.split(' ').map(item => item.trim()));

    // Read the file asynchronously
    fs.readFile('badWord.csv', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // Split the data by line breaks
        const words = data.split('\n').filter(word => word.trim() !== '');
          console.log(words)

        console.log( checkWordsInLists(transcription, words) )
    });


    return transcription
}


transcribeAudio()



