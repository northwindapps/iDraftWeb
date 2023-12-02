const AWS = require('aws-sdk');
const fs = require('fs').promises;
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);


// Specify the path to the file
const filePath = './fr.text';
const polly = new AWS.Polly({
    accessKeyId: '',
    secretAccessKey: '',
    region: ''
  });

let lines = [];
const rl = readAndMakeAudioFile(filePath);

async function readAndMakeAudioFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');

        const replaceDict = {'!': '!@', '?': '?@', '.': '.@'};
        const outputString = Array.from(data, char => replaceDict[char] || char).join('');

        // Split the text based on '.', '!', and '?'
        const sentences = outputString.split('@');

        // Remove empty strings from the array (caused by consecutive delimiters)
        const lines = sentences.filter(sentence => sentence.trim() !== '');

        // Process the lines or do other operations here
        console.log(lines);
        // ... other code depending on the file content
        const voiceId = 'Lea';

        for (let i = 0; i < lines.length; i++) {
        const outputFileName = `./audio/output${i + 1}.mp3`;
        await synthesizeSpeech(lines[i], voiceId, outputFileName);
        }

        return true;
    } catch (err) {
        console.error(err);
    }
}


async function synthesizeSpeech(text, voiceId, outputFileName) {
    const outputFormat = 'mp3';
  
    const params = {
      OutputFormat: outputFormat,
      Text: text,
      VoiceId: voiceId
    };
  
    try {
      const data = await polly.synthesizeSpeech(params).promise();
      await fs.writeFile(outputFileName, data.AudioStream);
      console.log(`Speech synthesis successful! Audio saved to ${outputFileName}`);
    } catch (err) {
      console.error('Error:', err, err.stack);
    }
  }