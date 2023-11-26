// Audio files and their sources
const audioFiles = [
    { src: './audio/1.mp3', text: 'Ja, dein Rad hab ich abgeholt,' },
    { src: './audio/2.mp3', text: 'ich fahre gerade drauf.' },
    { src: './audio/3.mp3', text: 'Und du wirst lachen,' },
    { src: './audio/4.mp3', text: 'das macht richtig Spaß.' },
    { src: './audio/5.mp3', text: 'Ach, scheiße.' },
    { src: './audio/6.mp3', text: 'Nein, nicht du,' },
    { src: './audio/7.mp3', text: 'mir ist die Tüte runtergefallen.' },
    { src: './audio/8.mp3', text: 'Die Brötchentüte!' },
    { src: './audio/9.mp3', text: 'Bleib mal dran.' },
    { src: './audio/10.mp3', text: 'So hier bin ich wieder Hagen.' },
    { src: './audio/11.mp3', text: 'Hagen?Hallo?' },
    { src: './audio/12.mp3', text: 'Ja!' },
    { src: './audio/13.mp3', text: 'Hagen nein,' },
    { src: './audio/14.mp3', text: 'das ist meine einzige freie Woche.' },
    { src: './audio/15.mp3', text: 'Ja ich weiß ich bin Kims Patenonkel,' },
    { src: './audio/16.mp3', text: 'aber sie hasst mich' },
    { src: './audio/17.mp3', text: 'Tut sie wohl, ' },
    { src: './audio/18.mp3', text: 'sie hat‘s mir gesagt und zwar mehrmals.' },
    { src: './audio/19.mp3', text: 'Wann bringst du sie?' },
    { src: './audio/20.mp3', text: 'Sind Sie verletzt?' },
    { src: './audio/21.mp3', text: 'Sind Sie wahnsinnig?' },
    { src: './audio/22.mp3', text: "Auf'm Fahrrad Zeitung lesen,das gibt's doch nicht." },
    { src: './audio/23.mp3', text: 'Das... He... kann das sein, dass ich Sie aus dem Fernsehen kenne?' },
    { src: './audio/24.mp3', text: 'Sie sind doch der Lustige!' },
    { src: './audio/25.mp3', text: 'Nein, ich bin Radprofi.' },
    // Add more audio files as needed
  ];

  // Function to create audio elements and buttons dynamically
  function createAudioElements() {
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
  window.onload = createAudioElements;