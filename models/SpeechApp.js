// Imports the Google Cloud client library
const fs = require("fs");
const ytdl = require("ytdl-core");
const ffmpeg = require("fluent-ffmpeg");
const speech = require("@google-cloud/speech");

const videoURL = "https://www.youtube.com/shorts/Zz0zgy0TNTg"; // Replace with the YouTube video URL
const outputVideoPath = "video.mp4"; // The path to save the downloaded video
const outputAudioPath = "audio.mp3"; // Path to save the audio

async function downloadVideo() {
  try {
    const videoInfo = await ytdl.getInfo(videoURL);
    const videoStream = ytdl(videoURL, { quality: "highestaudio" });

    videoStream.pipe(fs.createWriteStream(outputVideoPath));

    videoStream.on("end", () => {
      console.log("Video downloaded successfully.");
      convertVideoToAudio();
    });
  } catch (error) {
    console.error("Error downloading video:", error);
  }
}

function convertVideoToAudio() {
  ffmpeg()
    .input(outputVideoPath)
    .output(outputAudioPath)
    .on("end", () => {
      console.log("Video converted to audio successfully.");
      transcribeAudio();
    })
    .on("error", (error) => {
      console.error("Error converting video to audio:", error);
    })
    .run();
}

// Creates a client

function checkWordsInLists(list1, list2) {
  for (const word of list1) {
    console.log(word);
    if (list2.includes(word)) {
      return true; // Found a common word
    }
  }
  return false; // No common words found
}

async function transcribeAudio() {
  const client = new speech.SpeechClient();

  const config = {
    encoding: "MP3",
    sampleRateHertz: 16000,
    languageCode: "en",
  };

  const audio = {
    content: fs.readFileSync(outputAudioPath).toString("base64"),
  };

  // var audioFile = speech.RecognitionAudio(audio.content)

  const request = {
    config: config,
    audio: audio,
  };

  const [response] = await client.recognize(request);
  const transcription = response.results
    .map((result) => result.alternatives[0].transcript)
    .join("\n");
  // console.log('Transcription: ', transcription.split(' ').map(item => item.trim()));

  // Read the file asynchronously
  fs.readFile("badWord.csv", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    // Split the data by line breaks
    const words = data.split("\n").filter((word) => word.trim() !== "");
    // console.log(words)

    console.log(
      checkWordsInLists(
        transcription.split(" ").map((item) => item.trim()),
        words
      )
    );
  });

  return transcription;
}

downloadVideo();
