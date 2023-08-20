// Imports dependencies
const fs = require("fs");
const ytdl = require("ytdl-core");
const ffmpeg = require("fluent-ffmpeg");
const speech = require("@google-cloud/speech");

const outputVideoPath = "video.mp4"; // Path to save the downloaded video
const outputAudioPath = "audio.mp3"; // Path to save the audio

// Read the curse word file and place the words into list
var curseWords = [];
fs.readFile("curseWords.csv", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Split the data by line breaks
  curseWords = data.split("\n").filter((word) => word.trim() !== "");
});

//Read the hateword file and place the words into list
var hateWords = [];
fs.readFile("hateWords.csv", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Split the data by line breaks
  hateWords = data.split("\n").filter((word) => word.trim() !== "");
});

// download video into mp4 format from youtube url
async function downloadVideo(videoURL, badWordSet, hateCheck, curseCheck) {
  try {
    const videoInfo = await ytdl.getInfo(videoURL);
    const videoStream = ytdl(videoURL, { quality: "highestaudio" });

    return new Promise((resolve, reject) => {
      videoStream.pipe(fs.createWriteStream(outputVideoPath));

      videoStream.on("end", () => {
        console.log("Video downloaded successfully.");
        resolve(convertVideoToAudio(badWordSet, hateCheck, curseCheck));
      });
    });
  } catch (error) {
    console.error("Error downloading video:", error);
  }
}

// convert mp4 video file to mp3 audio file
async function convertVideoToAudio(badWordSet, hateCheck, curseCheck) {
  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(outputVideoPath)
      .output(outputAudioPath)
      .on("end", () => {
        console.log("Video converted to audio successfully.");
        return transcribeAudio(badWordSet, hateCheck, curseCheck);
      })
      .on("error", (error) => {
        console.error("Error converting video to audio:", error);
      })
      .run();
  });
}

// transcribe mp3 audio file and performs checks
async function transcribeAudio(badWordSet, hateCheck, curseCheck) {
  // return final list of bad words that were flagged
  var finalList = [];

  // configure and use Google Cloud Speech-to-Text
  const client = new speech.SpeechClient();

  const config = {
    enableWordTimeOffsets: true,
    encoding: "MP3",
    sampleRateHertz: 16000,
    languageCode: "en",
  };

  const audio = {
    content: fs.readFileSync(outputAudioPath).toString("base64"),
  };

  const request = {
    config: config,
    audio: audio,
  };

  const [response] = await client.recognize(request);

  // Get
  response.results.forEach((result) => {
    console.log(`Transcription: ${result.alternatives[0].transcript}`);
    result.alternatives[0].words.forEach((wordInfo) => {
      const startSecs =
        `${wordInfo.startTime.seconds}` +
        "." +
        wordInfo.startTime.nanos / 100000000;

      //check for hateful words if that is enabled
      if (hateCheck && hateWords.includes(`${wordInfo.word}`)) {
        finalList.push([`${wordInfo.word}`, startSecs]);
      }
      //check for bad words if that is enabled
      if (curseCheck && curseWords.includes(`${wordInfo.word}`)) {
        finalList.push([`${wordInfo.word}`, startSecs]);
      }
      //check for selected flags if list is not empty!
      if (badWordSet && badWordSet.includes(`${wordInfo.word}`)) {
        finalList.push([`${wordInfo.word}`, startSecs]);
      }
    });
  });

  // output successful transcription
  console.log("Transcription Successful");

  return finalList;
}

// run file
// downloadVideo(
//   "https://www.youtube.com/shorts/ZGHwlOb82PQ",
//   ["truck"],
//   true,
//   true
// )
//   .then((finalList) => {
//     console.log("Final List:", finalList);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
