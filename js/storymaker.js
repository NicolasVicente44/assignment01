/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector("#choosenNoun1");
const choosenVerb = document.querySelector("#choosenVerb");
const choosenAdjective = document.querySelector("#choosenAdjective");
const choosenNoun2 = document.querySelector("#choosenNoun2");
const choosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const random = document.querySelector("#random");
const reset = document.querySelector("#reset");
const story = document.querySelector("#story");

// Variables for pre-defined arrays
var nouns = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var secondNouns = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables to store user-selected words
let chosenNoun1 = "";
let chosenVerb = "";
let chosenAdjective = "";
let chosenNoun2 = "";
let chosenSetting = "";

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // Get a random element from the nouns array
    chosenNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
    choosenNoun1.textContent = chosenNoun1;
}

function verb_on_click() {
    chosenVerb = verbs[Math.floor(Math.random() * verbs.length)];
    choosenVerb.textContent = chosenVerb;
}

function adjective_on_click() {
    chosenAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    choosenAdjective.textContent = chosenAdjective;
}

function noun2_on_click() {
    chosenNoun2 = secondNouns[Math.floor(Math.random() * secondNouns.length)];
    choosenNoun2.textContent = chosenNoun2;
}

function setting_on_click() {
    chosenSetting = settings[Math.floor(Math.random() * settings.length)];
    choosenSetting.textContent = chosenSetting;
}

// Concatenate the user story and display
function playback_on_click() {
    const userStory = chosenNoun1 + " " + chosenVerb + " " + chosenAdjective + " " + chosenNoun2 + " " + chosenSetting;
    story.textContent = userStory;
}

// Grab a random element from arrays, concatenate, and display
function random_on_click() {
    chosenNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
    chosenVerb = verbs[Math.floor(Math.random() * verbs.length)];
    chosenAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    chosenNoun2 = secondNouns[Math.floor(Math.random() * secondNouns.length)];
    chosenSetting = settings[Math.floor(Math.random() * settings.length)];

    const userStory = chosenNoun1 + " " + chosenVerb + " " + chosenAdjective + " " + chosenNoun2 + " " + chosenSetting;
    story.textContent = userStory;
}

function resetStory () {
    story.textContent = "";
    choosenNoun1.textContent = "";
    choosenVerb.textContent = "";
    choosenAdjective.textContent = "";
    choosenNoun2.textContent = "";
    choosenSetting.textContent = "";
}


function textToSpeech(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}

function playback_on_click() {
  const userStory = chosenNoun1 + " " + chosenVerb + " " + chosenAdjective + " " + chosenNoun2 + " " + chosenSetting;
  story.textContent = userStory;
  textToSpeech(userStory);
  showStoryOneWordAtATime();

}
/* Event Listeners
-------------------------------------------------- */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
reset.addEventListener("click", resetStory);
