let button = document.getElementById("button");
let textArea = document.getElementById("textArea");
let voices = [];
let speech = new SpeechSynthesisUtterance();
/*SpeechSynthesisUtterance() is a constructor in the Web Speech API that 
creates a speech request — basically, 
an object that represents what the browser will say out loud. */

let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
  /*
      speechSynthesis is a built-in object in the browser’s Web Speech API. 
      It acts as the controller for converting text to speech using the browser's speech engine.
      
      onvoiceschanged is an event handler provided by the Web Speech API.
      It fires when the list of available voices is loaded or updated, which is important because speechSynthesis.getVoices() 
      may return an empty array at first, especially in browsers like Chrome.
      */
  voices = window.speechSynthesis.getVoices();
  /*
      The method speechSynthesis.getVoices() returns an array of available speech synthesis voices on the user's device. 
      These voices are used with the Web Speech API to convert text into spoken audio. 
      
      window
      The window object is the global object in client-side JavaScript when running in a web browser. 
      It represents the browser window or tab and acts as the container for everything related to your web page’s runtime environment.*/
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)),
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
button.addEventListener("click", () => {
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});
