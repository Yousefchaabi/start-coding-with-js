const resultText = document.getElementById("text-result");
let recognition;
const startConverting = () => {
  if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    setupRecognition(recognition);
    recognition.start();
  }
};

const setupRecognition = (recognition) => {
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";
  recognition.onresult = (event) => {
    const { finalTranscript, interTranscript } = processResult(event.results);
    resultText.innerHTML = finalTranscript + interTranscript;
  };
};

const processResult = (results) => {
  let finalTranscript = "";
  let interTranscript = "";
  for (let i = 0; i < results.length; i++) {
    let transcript = results[i][0].transcript;
    transcript.replace("/n", "<br>");
    if (results[i].isFinal) {
      finalTranscript += transcript;
    } else {
      interTranscript += transcript;
    }
  }
  return {
    finalTranscript,
    interTranscript,
  };
};

const stopConverting = () => {
  if (recognition) {
    recognition.stop();
    recognition.onend = () => {
      recognition = null;
    };
  }
};
