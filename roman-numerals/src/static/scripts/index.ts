import sendInput from './send-input.js';
import Stream from './stream.js';

const logText = function logText(message: string) {
  const responseEl =  document.getElementById('response') as HTMLSpanElement;
  responseEl.innerText += message;
  responseEl.innerHTML += "<br/>"
}

document.getElementById('form')!.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  
  const input =  document.getElementById('value') as HTMLInputElement;

  const value = parseInt(input.value);
  logText(`Requesting conversion for ${value}`);
  await sendInput(value);
});


const stream = new Stream();
stream.pipe(logText)
