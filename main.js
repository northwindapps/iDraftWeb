// Audio files and their sources
const audioFiles = [
    { src: './1-1.m4a', text: 'Ja, dein Rad hab ich abgeholt,' },
    { src: './1-2.m4a', text: 'ich fahre gerade drauf.' }
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