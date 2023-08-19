from youtube_transcript_api import YouTubeTranscriptApi
import string

file = YouTubeTranscriptApi.get_transcript('6ZRgVX8SYX4')
check = open('badWord.csv', 'r')

wordsList = []
for line in check:
    wordsList.append(line[:-1])
print(wordsList)


def removeP(word):
    last = len(word)-2
    if last < 0:
        return word
    if word[last] == "," or word[last] == ".":
        return word[0:last+1]
    return word

def remove_punctuation(word):
    if word and word[-1] in string.punctuation:
        return word[:-1]
    return word


for line in file:
    curLine = line['text'].split(' ')
    for word in curLine:
        word = remove_punctuation(word).lower()
        # print(word)
        if word in wordsList:
            print("\n\nword: " + word + "    \n " + line['text'] + "   starts at: " + str(line['start']))
    # print(item['text'])




# import argparse

# from google.cloud import speech


# def transcribe_file(speech_file: str) -> speech.RecognizeResponse:
#     """Transcribe the given audio file."""
#     client = speech.SpeechClient()

#     with open(speech_file, "rb") as audio_file:
#         content = audio_file.read()

#     audio = speech.RecognitionAudio(content=content)
#     config = speech.RecognitionConfig(
#         encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
#         sample_rate_hertz=16000,
#         language_code="en-US",
#     )

#     response = client.recognize(config=config, audio=audio)

#     # Each result is for a consecutive portion of the audio. Iterate through
#     # them to get the transcripts for the entire audio file.
#     for result in response.results:
#         # The first alternative is the most likely one for this portion.
#         print(f"Transcript: {result.alternatives[0].transcript}")

#     return response

# print(transcribe_file('testFile.mp3'))