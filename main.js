console.log("JavaScript loaded!")



////
//// QUESTION DATA
////


const categories = [{
    category: "Geography",
    questions: [
        {
            q: "What is the name given to a pool formed from a meander being cut off from a river?",
            answers: [
                {
                    a: "Oxbow lake",
                    correct: true
                },
                {
                    a: "Cowcrook creek",
                    correct: false
                },
                {
                    a: "Bullbend bayou",
                    correct: false
                },
                {
                    a: "Kine-kink sink",
                    correct: false
                }
            ],
            answered: false,
            answeredCorrectly: false,
            startDate: null,
            time: undefined,
        },
        {
            q: "Indonesia is currently building itself a new capital city on which island?",
            answers: [
                {
                    a: "Sumatra",
                    correct: false
                },
                {
                    a: "Borneo",
                    correct: true
                },
                {
                    a: "New Guinea",
                    correct: false
                },
                {
                    a: "JavaScript",
                    correct: false
                }
            ]
        },
        {
            q: "Burundi, DR Congo, Tanzania, and Zambia have shoreline on which lake?",
            answers: [
                {
                    a: "Lake Turkana",
                    correct: false
                },
                {
                    a: "Lake Victoria",
                    correct: false
                },
                {
                    a: "Lake Tanganyika",
                    correct: true
                },
                {
                    a: "Lake Malawi",
                    correct: false
                }
            ]
        },
        {
            q: "Which of these is not a US state capital?",
            answers: [
                {
                    a: "Jacksonville",
                    correct: true
                },
                {
                    a: "Jefferson City",
                    correct: false
                },
                {
                    a: "Carson City",
                    correct: false
                },
                {
                    a: "Madison",
                    correct: false
                }
            ]
        },
        {
            q: "What group of small islands is immediately south of St Vincent in the Caribbean?",
            answers: [
                {
                    a: "Bahamas",
                    correct: false
                },
                {
                    a: "Netherlands Antilles",
                    correct: false
                },
                {
                    a: "Hawaiʻi",
                    correct: false
                },
                {
                    a: "Grenadines",
                    correct: true
                }
            ]
        },
        {
            q: "So far this year, Brazil's National Institute for Space Research has recorded (roughly) how many wildfires in the country?",
            answers: [
                {
                    a: "40 in the Amazon, 3,000 elsewhere",
                    correct: false
                },
                {
                    a: "400 in the Amazon, 1,200 elsewhere",
                    correct: false
                },
                {
                    a: "4,000 in the Amazon, 15,000 elsewhere",
                    correct: false
                },
                {
                    a: "40,000 in the Amazon, 35,000 elsewhere",
                    correct: true
                }
            ]
        },
        {
            q: "What is the name of the mountain range that runs roughly north-south along most of mainland Italy?",
            answers: [
                {
                    a: "Golan Heights",
                    correct: false
                },
                {
                    a: "Ammonites",
                    correct: false
                },
                {
                    a: "Dolomites",
                    correct: false
                },
                {
                    a: "Apennines",
                    correct: true
                }
            ]
        },
        {
            q: "What is the deepest lake in the world?",
            answers: [
                {
                    a: "Lake Baikal",
                    correct: true
                },
                {
                    a: "Lake Maracaibo",
                    correct: false
                },
                {
                    a: "Loch Ness",
                    correct: false
                },
                {
                    a: "Lake Superior",
                    correct: false
                }
            ]
        },
        {
            q: "On their national flags, what do Albania, Kazakhstan, Kiribati, and Uganda all have in common?",
            answers: [
                {
                    a: "The colour red",
                    correct: false
                },
                {
                    a: "The sun",
                    correct: false
                },
                {
                    a: "A bird",
                    correct: true
                },
                {
                    a: "Horizontal stripes",
                    correct: false
                }
            ]
        },
        {
            q: "Which of these is furthest south?",
            answers: [
                {
                    a: "Tiger Bay",
                    correct: false
                },
                {
                    a: "Mandalay",
                    correct: false
                },
                {
                    a: "Bombay (Mumbai)",
                    correct: true
                },
                {
                    a: "Santa Fe (New Mexico)",
                    correct: false
                }
            ]
        }
    ]
},
{
    category: "Music",
    questions: [
        {
            q: "Which of these Taylor Swift albums was released first?",
            answers: [
                {
                    a: "Lover",
                    correct: false
                },
                {
                    a: "Speak Now",
                    correct: true
                },
                {
                    a: "Red",
                    correct: false
                },
                {
                    a: "1989",
                    correct: false
                }
            ]
        },
        {
            q: "'Clair de Lune' is a famous piece composed around 1890 by which French composer?",
            answers: [
                {
                    a: "Hector Berlioz",
                    correct: false
                },
                {
                    a: "Georges Bizet",
                    correct: false
                },
                {
                    a: "Frédéric Chopin",
                    correct: false
                },
                {
                    a: "Claude Debussy",
                    correct: true
                }
            ]
        },
        {
            q: "What is the refrain in 'Hey Jude' by the Beatles?",
            answers: [
                {
                    a: "Raa raa raa rarararaaa rarararaaa, hey Jude",
                    correct: false
                },
                {
                    a: "Laa laa laa lalalalaaa lalalalaaa, hey Jude",
                    correct: false
                },
                {
                    a: "Baa baa baa banananaaa banananaaa, hey Jude",
                    correct: false
                },
                {
                    a: "Naa naa naa nanananaaa nanananaaa, hey Jude",
                    correct: true
                }
            ]
        },
        {
            q: "'When We All Fall Asleep Where Do We Go?' is an album by what artist?",
            answers: [
                {
                    a: "Panic! At The Disco",
                    correct: false
                },
                {
                    a: "Billie Eilish",
                    correct: true
                },
                {
                    a: "Mike Posner",
                    correct: false
                },
                {
                    a: "Pink",
                    correct: false
                }
            ]
        },
        {
            q: "In the UK, the Official Charts company publishes its top 40 on which day?",
            answers: [
                {
                    a: "Wednesday",
                    correct: false
                },
                {
                    a: "Sunday",
                    correct: false
                },
                {
                    a: "Friday",
                    correct: true
                },
                {
                    a: "Monday",
                    correct: false
                }
            ]
        },
        {
            q: "Who won the Eurovision Song Contest for the Netherlands in 2019?",
            answers: [
                {
                    a: "Duncan Laurence",
                    correct: true
                },
                {
                    a: "Duncan Sheik",
                    correct: false
                },
                {
                    a: "Gary Duncan",
                    correct: false
                },
                {
                    a: "Lincoln Duncan",
                    correct: false
                }
            ]
        },
        {
            q: "What was number one in the UK singles chart when I was born?",
            answers: [
                {
                    a: "'Love Is All Around' by Wet Wet Wet",
                    correct: false
                },
                {
                    a: "'C'est La Vie' by B*Witched",
                    correct: false
                },
                {
                    a: "'I Wanna Dance With Somebody (Who Loves Me)' by Whitney Houston",
                    correct: false
                },
                {
                    a: "'Killing Me Softly' by the Fugees",
                    correct: true
                }
            ]
        },
        {
            q: "What is the bestselling single of all time in the UK?",
            answers: [
                {
                    a: "'Happy' by Pharrell Williams",
                    correct: false
                },
                {
                    a: "'Candle in the Wind' by Elton John",
                    correct: true
                },
                {
                    a: "'Do They Know It's Christmas?' by Band Aid",
                    correct: false
                },
                {
                    a: "'Relax' by Frankie Goes To Hollywood",
                    correct: false
                }
            ]
        },
        {
            q: "Which of these is a song by Sia, featuring Sean Paul?",
            answers: [
                {
                    a: "How Hard It Is",
                    correct: false
                },
                {
                    a: "Cheap Thrills",
                    correct: true
                },
                {
                    a: "Do What You Love",
                    correct: false
                },
                {
                    a: "Can't Go Home Again",
                    correct: false
                }
            ]
        },
        {
            q: "What Glaswegian band comprises Lauren Mayberry, Iain Cook, and Martin Doherty?",
            answers: [
                {
                    a: "Texas",
                    correct: false
                },
                {
                    a: "Franz Ferdinand",
                    correct: false
                },
                {
                    a: "Chvrches",
                    correct: true
                },
                {
                    a: "Mogwai",
                    correct: false
                }
            ]
        }
    ]
},
{
    category: "Sport",
    questions: [
        {
            q: "What shape is a football (soccerball)?",
            answers: [
                {
                    a: "Sphere",
                    correct: true
                },
                {
                    a: "Cylinder",
                    correct: false
                },
                {
                    a: "Cube",
                    correct: false
                },
                {
                    a: "Pyramid",
                    correct: false
                }
            ]
        }
    ]
}]

console.log("Categories loaded!")



////
//// DEFINING DOM ELEMENTS
////


const categoryListDiv = document.getElementById("category-list-div");
const categoryList = document.getElementById("category-list");
const categoryHead = document.getElementById("category-head");
const questionHead = document.getElementById("question-head");
const questionDiv = document.getElementById("question-div");
const question = document.getElementById("question");
const answerList = document.getElementById("answer-list");
const responseDiv = document.getElementById("response-div");
const response = document.getElementById("response");
let nextQuestion = document.getElementById("next-question"); // This button is regenerated after every question, hence 'let'.
const endOfCategory = document.getElementById("end-of-category");
const endOfCategoryDiv = document.getElementById("end-of-category-div");
const backToCategories = document.getElementById("back-to-categories");
const scoresDiv = document.getElementById("scores-div");
const scoresList = document.getElementById("scores-list");
const progressTrack = document.getElementById("progress-track");
const progressBar = document.getElementById("progress-bar");
const catAnswerCount = document.getElementById("cat-answer-count");
const catPotentialCount = document.getElementById("cat-potential-count");
const pointsP = document.getElementById("points-p");
const ifPreviouslyAnswered = document.getElementById("if-previously-answered");
const ifPreviouslyAnsweredVerdict = document.getElementById("if-previously-answered-verdict");
const responseTime = document.getElementById("response-time");
const pointsBar = document.getElementById("points-bar");
const pointsCount = document.getElementById("points-count");
const pointsMaximum = document.getElementById("points-maximum");



////
//// GAMEPLAY VARIABLES
////

let scoresArray = categories.map(()=>{return 0});
let maxArray = categories.map((cat, i)=>{return categories[i].questions.length});
console.log(scoresArray)
console.log(maxArray)

const pointsPerRightAnswer = 40; // Users get forty points per correct answer regardless of time.
const maxSeconds = 60; // Sixty seconds to answer to get the time points.


// getMaximumPoints() only runs on startup.
getMaximumPoints = () => {
    let maximumPoints = 0;
    for (let i = 0; i < categories.length; i++) {
        for (let j = 0; j < categories[i].questions.length; j++) {
            maximumPoints += pointsPerRightAnswer + maxSeconds;
        }
    }
    pointsMaximum.textContent = maximumPoints;
    return maximumPoints;
}

const maximumPoints = getMaximumPoints();


////
//// FUNCTIONS
////


openCategory = (i) => {
    categoryListDiv.style.display = "none";
    categoryHead.textContent = categories[i].category;

    scoresArray[i] = 0;
    updateScores();

    openQuestion(i,0);
}

openQuestion = (catNum, qNum) => {
    console.log("Question "+(qNum+1)+" of category "+(catNum+1)+" should load now.");

    const catLength = categories[catNum].questions.length;

    // E.g. "Question 3 of 10"
    questionHead.textContent = "Question "+(qNum+1)+" of "+catLength;
    questionHead.style.display = "initial";
    questionDiv.style.display = "initial";

    // If the question has been previously answered, declare so.
    if (categories[catNum].questions[qNum].answeredCorrectly) {
        ifPreviouslyAnswered.style.display = "initial";
        ifPreviouslyAnsweredVerdict.textContent = "right";
    }
    else if (categories[catNum].questions[qNum].answered) {
        ifPreviouslyAnswered.style.display = "initial";
        ifPreviouslyAnsweredVerdict.textContent = "wrong";
    }
    else {
        ifPreviouslyAnswered.style.display = "none";
    }

    // Display the question.
    question.textContent = categories[catNum].questions[qNum].q;
    
    // Display the possible answers.
    const answers = categories[catNum].questions[qNum].answers;
    answers.map((a, i)=>{
        let node = document.createTextNode(a.a);
        let button = document.createElement("button");
        button.appendChild(node);
    
        button.className = "answer-button";
        button.addEventListener("click",()=>{giveAnswer(catNum, qNum, i)});
    
        let li = document.createElement("li");
        li.appendChild(button);
        answerList.appendChild(li);
    })

    // Start the timer.
    startTimer(catNum, qNum);
    
    // The response div should not display.
    responseDiv.style.display = "none";
    
}

giveAnswer = (catNum, qNum, aNum) => {
    console.log("The verdict on the answer to question "+(qNum+1)+" of category "+catNum+" should load now.");
    questionDiv.style.display = "none";

    // Clear any pre-existing answer options.
    while (answerList.firstChild) {
        answerList.removeChild(answerList.firstChild);
        console.log("Removing the first child of answer-list!")
    }
    console.log("All children of answer-list have been removed.")

    console.log("You selected answer "+(aNum+1)+"!")

    // The question has now been answered.
    categories[catNum].questions[qNum].answered = true;

    // If there is a next question, we show a button to it.
    const nextQNum = qNum+1;

    // Remove any previous event listener by replacing the button with a clone.
    newButton = nextQuestion.cloneNode();
    nextQuestion.replaceWith(newButton);
    nextQuestion = newButton;
    nextQuestion.textContent = "Next question"

    nextQuestion.addEventListener("click", ()=>{
        console.log("Opening Question "+(nextQNum+1));
        openQuestion(catNum, nextQNum)
    })
    responseDiv.style.display = "initial";
    nextQuestion.style.display = "initial";

    // Update scores if answered correctly.
    if (categories[catNum].questions[qNum].answers[aNum].correct) {
        // The user has certainly answered the question right.
        categories[catNum].questions[qNum].answeredCorrectly = true;

        // Increment the relevant value of scores-array.
        scoresArray[catNum]++;
        updateScores();

        // Tell the user they were right.
        response.innerText = "You got that right!"

        // Stop the timer and display the new time.
        endTimer(catNum, qNum);

        // Calculate the new points and tell the user.
        updatePoints();
    }
    else {
        // The user may have answered the answer right before, in which case answeredCorrectly should stay true.
        categories[catNum].questions[qNum].answeredCorrectly = categories[catNum].questions[qNum].answeredCorrectly || false;

        // Tell the user they were wrong.
        response.innerText = "You got that wrong!"

        // Hide the response time p.
        responseTime.style.display = "none"
    }

    // Increase the progress bar.
    updateProgress(qNum+1, categories[catNum].questions.length);

    // Console logs.
    if (categories[catNum].questions[nextQNum]) {
        console.log("There is a next question.")
    }
    else {
        console.log("There are no more questions in this category.")
        endCategory();
    }
}

endCategory = () => {
    nextQuestion.style.display = "none";
    endOfCategoryDiv.style.display = "initial";
}

returnToCategories = () => {
    questionHead.style.display = "none";
    categoryListDiv.style.display = "initial";
    endOfCategoryDiv.style.display = "none";
    categoryHead.style.display = "none";
    responseDiv.style.display = "none";

    updateProgress(0,0);
}

startTimer = (catNum, qNum) => {
    startDate = new Date();
    categories[catNum].questions[qNum].startDate = startDate;
}

// endTimer calculates the time the question was most recently answered in, and 
// changes categories[catNum].questions[qNum].time if that new time is less.
endTimer = (catNum, qNum) => {
    endDate = new Date();
    console.log("endDate = "+endDate)
    newTime = endDate - categories[catNum].questions[qNum].startDate;
    console.log("newTime = "+newTime)
    
    if (newTime < categories[catNum].questions[qNum].time || categories[catNum].questions[qNum].time==undefined) {
        categories[catNum].questions[qNum].time = newTime;
    }

    responseTime.style.display = "block";
    responseTime.textContent = `You answered that question in ${newTime/1000} seconds. Your best time for this question is ${categories[catNum].questions[qNum].time/1000} seconds.`
}


updateProgress = (numerator, denominator) => {
    // Set the values in the progress-bar label.
    catAnswerCount.textContent = numerator;
    catPotentialCount.textContent = denominator;

    // The new progress-bar length is the quotient of the two parameters as a percentage.
    // If we're going to be dividing by zero, divide by one instead.
    if (!denominator) {denominator=1}
    const newLength = 100*numerator/denominator
    
    console.log("Progress bar should be "+newLength+"%")
    progressBar.style.width = newLength+"%";
}

updatePoints = () => {
    let points = 0;
    for (let i = 0; i < categories.length; i++) {
        for (let j = 0; j < categories[i].questions.length; j++) {
            // Points are awarded for any question answered correctly.
            if (categories[i].questions[j].answeredCorrectly) {
                points += pointsPerRightAnswer;
            }
            // Further points are awarded for speed of answering correctly.
            if (categories[i].questions[j].time) {
                let timePoints = Math.round(maxSeconds - categories[i].questions[j].time/1000);
                // No points are awarded here if the time exceeds maxSeconds.
                if (timePoints > 0) {
                    points += timePoints;
                }
            }
        }
    }
    pointsP.textContent = points;
    pointsCount.textContent = points;

    newLength = 100*points/maximumPoints;
    pointsBar.style.width = newLength+"%";
    console.log("The points bar should now be "+newLength+"%.")
}

updateScores = () => {
    while (scoresList.firstChild) {
        scoresList.removeChild(scoresList.firstChild);
        console.log("Removing the first child of scores-list!")
    }

    scoresArray.map((score, i)=>{
        const text = categories[i].category+": "+score+" of "+maxArray[i];
        const node = document.createTextNode(text);
        const li = document.createElement("li");
        li.appendChild(node);
        scoresList.appendChild(li);
    })
}



////
//// INITIALISING LISTS OF CATEGORIES AND SCORES
////


categories.map((cat, i)=>{
    let node = document.createTextNode(cat.category);
    let button = document.createElement("button");
    button.appendChild(node);

    button.addEventListener("click",()=>{openCategory(i)});

    let li = document.createElement("li");
    li.appendChild(button);
    categoryList.appendChild(li);
})

updateScores();


////
//// EVENT LISTENERS
////

backToCategories.addEventListener("click",()=>{returnToCategories()});