const fs = require('fs').promises;
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);


// Specify the path to the file
const filePath = './fr.text';

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
        lines = sentences.filter(sentence => sentence.trim() !== '');

        // Create an array of objects with 'src' and 'text' properties
        const jsonData = lines.map((src, index) => ({ src: `./audio/output${index+1}.mp3`, text: lines[index] }));
        console.log(jsonData);
        createAudioElements(jsonData);




    } catch (err) {
        console.error(err);
    }
}


  // Function to create audio elements and buttons dynamically
async function createAudioElements(audioFiles) {
    const audioButtonsContainer = document.getElementById('audioButtons');

    audioFiles.forEach((audio, index) => {
      // Create audio element
      const audioElement = document.createElement('audio');
      audioElement.id = `myAudio${index + 1}`;
      audioElement.innerHTML = `
        <source src="${audio.src}" type="audio/mp4">
        Your browser does not support the audio element.
      `;

      // Create button
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'exp no-border btn btn-outline-primary btn-sm shadow-none';
      button.innerText = audio.text;
      button.onclick = () => playAudio(`myAudio${index + 1}`);

      // Append elements to the container
      audioButtonsContainer.appendChild(button);
      audioButtonsContainer.appendChild(audioElement);
      const periodRegex =  /[.!?]/;
      if (periodRegex.test(audio.text)) {
        // Create a line break element
        const lineBreak = document.createElement('br');
        audioButtonsContainer.appendChild(lineBreak);
      } 
    });
  }

  // Function to play audio by ID
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.play();
    }
}

// Call the function to create audio elements on page load
//window.onload = createAudioElements;

