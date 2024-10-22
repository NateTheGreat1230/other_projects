// Contains my madlibs. Each madlib has a title, story, list of user propmpts(words) and a list of placeholder words.
const madlibs = [
    {
        title: "A Day at the Park",
        story: "It was a ${wrd1} morning, so I decided to visit the park. I packed my ${wrd2} and put on my ${wrd3}. The birds were ${wrd4}, and the sun was shining ${wrd5}. I even saw a ${wrd6} sitting on a bench!",
        words: ["Adjective", "Noun", "Clothing item", "Verb ending in -ing", "Adverb", "Animal"],
        placeholders: ["Sunny", "Ball", "Hat", "Flying", "Quickly", "Dog"]
    },
    {
        title: "The Science Experiment",
        story: "In science class, we were mixing a ${wrd1} liquid with a ${wrd2}. My partner accidentally spilled it, causing it to ${wrd3} all over the table. We quickly grabbed a ${wrd4} and tried to clean it up, but the teacher just laughed ${wrd5} and said, 'That's the fun of ${wrd6}!'",
        words: ["Adjective", "Noun", "Verb", "Object", "Adverb", "Plural noun"],
        placeholders: ["Sticky", "Beaker", "Spill", "Sponge", "Happily", "Experiments"]
    },
    {
        title: "Adventure at the Zoo",
        story: "Today, I went to the zoo and saw a ${wrd1} ${wrd2} eating ${wrd3}. The zookeeper asked if I wanted to ${wrd4} with the ${wrd2}, but I was too ${wrd5} to try! Instead, I just watched ${wrd6} from a distance.",
        words: ["Adjective", "Animal", "Food", "Verb", "Adjective", "Adverb"],
        placeholders: ["Colorful", "Giraffe", "Banana", "Jump", "Nervous", "Curiously"]
    },
    {
        title: "The Beach Day",
        story: "On a ${wrd1} day at the beach, I brought my ${wrd2} and decided to ${wrd3}. The waves were ${wrd4}, with the scent of ${wrd5} in the air. I even saw a ${wrd6} on the shore!",
        words: ["Adjective", "Noun", "Verb", "Adjective", "Noun", "Animal"],
        placeholders: ["Hot", "Towel", "Swim", "Crashing", "Salt", "Crab"]
    },
    {
        title: "The Haunted House",
        story: "I entered a ${wrd1} house on Halloween. The ${wrd2} were ${wrd3}, and I felt ${wrd4} as I walked through. Suddenly, a ${wrd5} appeared and scared me ${wrd6}!",
        words: ["Adjective", "Noun", "Adjective", "Adjective", "Noun", "Adverb"],
        placeholders: ["Spooky", "Shadows", "Dark", "Scared", "Ghost", "Suddenly"]
    },
    {
        title: "Space Adventure",
        story: "During my ${wrd1} journey to ${wrd2}, I encountered a ${wrd3} planet. The ${wrd4} were ${wrd5} and made me feel like ${wrd6}!",
        words: ["Adjective", "Noun", "Adjective", "Noun", "Adjective", "Noun"],
        placeholders: ["Mysterious", "Mars", "Purple", "Stars", "Twinkling", "Alien"]
    },
    {
        title: "The Baking Competition",
        story: "In the ${wrd1} baking competition, I had to make a ${wrd2}. My ${wrd3} was ${wrd4} rapidly as I added ${wrd5} and ${wrd6}.",
        words: ["Adjective", "Noun", "Noun", "Verb ending in -ing", "Noun", "Noun"],
        placeholders: ["Intense", "Cake", "Mixer", "Spinning", "Flour", "Eggs"]
    }
];

let played = []; // stores which madlibs have been played

// Gets elements from HTML that I need to use in the JS code.
const playAgain = document.getElementById("playAgain");
const output = document.getElementById("madlib");
const submitBtn = document.getElementById("submit");
const title = document.getElementById("title");
const playedAllerr = document.getElementById("playedAllerr");

const txt1 = document.getElementById("txt1");
const word1 = document.getElementById("word1");
const err1 = document.getElementById("err1");

const txt2 = document.getElementById("txt2");
const word2 = document.getElementById("word2");
const err2 = document.getElementById("err2");

const txt3 = document.getElementById("txt3");
const word3 = document.getElementById("word3");
const err3 = document.getElementById("err3");

const txt4 = document.getElementById("txt4");
const word4 = document.getElementById("word4");
const err4 = document.getElementById("err4");

const txt5 = document.getElementById("txt5");
const word5 = document.getElementById("word5");
const err5 = document.getElementById("err5");

const txt6 = document.getElementById("txt6");
const word6 = document.getElementById("word6");
const err6 = document.getElementById("err6");

// Initiates a madlib as the page loads and stores the current madlib object. 
let currentMadlib = pickMadlib();

// This is the event listener for the submit button. This handles the checks for valid inputs and missing inputs. 
// This also sets error messages and if the inputs are all good it will evaluate the story using the users inputs and display the story.
submitBtn.addEventListener("click", () => {
    resetErrs();
    output.textContent = "Fill out the form to the left to see the madlib here!";
    let wrd1 = word1.value;
    let wrd2 = word2.value;
    let wrd3 = word3.value;
    let wrd4 = word4.value;
    let wrd5 = word5.value;
    let wrd6 = word6.value;
    let checked = checkWrds([wrd1, wrd2, wrd3, wrd4, wrd5, wrd6]);
    if (checked.length === 0) {
        let story = eval('`' + currentMadlib.story + '`');
        output.innerHTML = story;
        resetErrs();
    } else {
        checked.forEach(([element, index]) => {
            switch (index) {
                case 0:
                    if (element === "") {
                        err1.textContent = "Please enter a word here";
                    } else {
                        err1.textContent = "'" + element + "'" + " is an invalid input";
                    }
                    break;
                case 1:
                    if (element === "") {
                        err2.textContent = "Please enter a word here";
                    } else {
                        err2.textContent = "'" + element + "'" + " is an invalid input";
                    }
                    break;
                case 2:
                    if (element === "") {
                        err3.textContent = "Please enter a word here";
                    } else {
                        err3.textContent = "'" + element + "'" + " is an invalid input";
                    }
                    break;
                case 3:
                    if (element === "") {
                        err4.textContent = "Please enter a word here";
                    } else {
                        err4.textContent = "'" + element + "'" + " is an invalid input";
                    }
                    break;
                case 4:
                    if (element === "") {
                        err5.textContent = "Please enter a word here";
                    } else {
                        err5.textContent = "'" + element + "'" + " is an invalid input";
                    }
                    break;
                case 5:
                    if (element === "") {
                        err6.textContent = "Please enter a word here";
                    } else {
                        err6.textContent = "'" + element + "'" + " is an invalid input";
                    }
                    break;
                default:
                    playedAllerr.textContent = "Unexpected Index Error. Please refresh the page.";
            }
        });        
    }
});

// Event listener for the play again button. This simply clears the mad lib and picks another one.
playAgain.addEventListener("click", () => {
    resetErrs();
    currentMadlib = pickMadlib();
    word1.value = "";
    word2.value = "";
    word3.value = "";
    word4.value = "";
    word5.value = "";
    word6.value = "";
    output.textContent = "Fill out the form to the left to see the madlib here!";
});

// This checkes that all of the user inputed words are valid and exsist. Returns empty array if all inputs are valid.
function checkWrds(wordList) {
    let result = [];
    for (let i = 0; i < wordList.length; i++) {
        const element = wordList[i];
        if (element === "" || /[^a-zA-Z]/.test(element)) {
            result.push([element, i]);
        }
    }
    return result;
}

// This resets the error messages for the whole game.
function resetErrs() {
    err1.innerHTML = "<br>";
    err2.innerHTML = "<br>";
    err3.innerHTML = "<br>";
    err4.innerHTML = "<br>";
    err5.innerHTML = "<br>";
    err6.innerHTML = "<br>";
    playedAllerr.textContent = "";
}

// This selects a madlib that has not been played yet and displays the prompt to the user. 
function pickMadlib() {
    let num = 0;
    let temp = true;
    if (played.length === madlibs.length) {
            playedAllerr.textContent = "You have played all of the mad libs. Refresh the page to play agian!";
    } else {
        while(temp) {
            num = Math.floor(Math.random() * madlibs.length);
            if (!played.includes(num)) {
                temp = false;
            }
        }
        txt1.textContent = madlibs[num].words[0] + ": ";
        txt2.textContent = madlibs[num].words[1] + ": ";
        txt3.textContent = madlibs[num].words[2] + ": ";
        txt4.textContent = madlibs[num].words[3] + ": ";
        txt5.textContent = madlibs[num].words[4] + ": ";
        txt6.textContent = madlibs[num].words[5] + ": ";
        word1.placeholder = "ex: " + madlibs[num].placeholders[0];
        word2.placeholder = "ex: " + madlibs[num].placeholders[1];
        word3.placeholder = "ex: " + madlibs[num].placeholders[2];
        word4.placeholder = "ex: " + madlibs[num].placeholders[3];
        word5.placeholder = "ex: " + madlibs[num].placeholders[4];
        word6.placeholder = "ex: " + madlibs[num].placeholders[5];
        played.push(num);
        title.innerHTML = madlibs[num].title;
        return madlibs[num];
    }
}
