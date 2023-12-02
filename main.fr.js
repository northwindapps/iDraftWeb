const audioFiles = [
    {
      src: './audio/output1.mp3',
      text: 'Je déversais sur lui tout le fond de mon cœur avec des bondissements mêlés de joie et de colère.'
    },
    {
      src: './audio/output2.mp3',
      text: ' Il avait l’air si certain, n’est-ce pas ?'
    },
    {
      src: './audio/output3.mp3',
      text: ' Pourtant, aucune de ses certitudes ne valait un cheveu de femme.'
    },
    {
      src: './audio/output4.mp3',
      text: ' Il n’était même pas sûr d’être en vie puisqu’il vivait comme un mort.'
    },
    {
      src: './audio/output5.mp3',
      text: ' Moi, j’avais l’air d’avoir les mains vides.'
    },
    {
      src: './audio/output6.mp3',
      text: ' Mais j’étais sûr de moi, sûr de tout, plus sûr que lui, sur de ma vie et de cette mort qui allait venir.'
    },
    { src: './audio/output7.mp3', text: ' Oui, je n’avais que cela.' },
    {
      src: './audio/output8.mp3',
      text: ' Mais du moins, je tenais cette vérité autant qu’elle me tenait.'
    },
    {
      src: './audio/output9.mp3',
      text: ' J’avais eu raison, j’avais encore raison, j’avais toujours raison.'
    },
    {
      src: './audio/output10.mp3',
      text: ' J’avais vécu de telle façon et j’aurais pu vivre de telle autre.'
    },
    {
      src: './audio/output11.mp3',
      text: ' J’avais fait ceci et je n’avais pas fait cela.'
    },
    {
      src: './audio/output12.mp3',
      text: ' Je n’avais pas fait telle chose alors que j’avais fait cette autre.'
    },
    { src: './audio/output13.mp3', text: ' Et après ?' },
    {
      src: './audio/output14.mp3',
      text: ' C’était comme si j’avais attendu pendant tout le temps cette minute et cette petite aube où je serais justifié.'
    },
    {
      src: './audio/output15.mp3',
      text: ' Rien, rien n’avait d’importance et je savais bien pourquoi.'
    },
    { src: './audio/output16.mp3', text: ' Lui aussi savait pourquoi.' },
    {
      src: './audio/output17.mp3',
      text: ' Du fond de mon avenir, pendant toute cette vie absurde que j’avais menée, un souffle obscur remontait vers moi à travers des années qui n’étaient pas encore venues et ce souffle égalisait sur son passage tout ce qu’on me proposait alors dans les années pas plus réelles que je vivais.'
    }
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


