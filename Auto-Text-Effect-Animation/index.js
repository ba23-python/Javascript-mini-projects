const containerEl = document.querySelector(".container");

const careers = [
  "am a Salesforce Marketing Cloud Specialist",
  "am a Web and Email Developer",
  "coded this animation with Javascript, HTML, CSS",
  "am Open to work",
  "..."
];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1> I ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;

    // Reset careerIndex if it reaches the end of the careers array
    if (careerIndex === careers.length) {
      careerIndex = 0;
    }

    // Set a longer timeout before starting the next career
    setTimeout(updateText, 1000); // 1 second pause between careers
  } else {
    // Regular update speed while rendering the text
    setTimeout(updateText, 100);
  }
}
