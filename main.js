console.log("JavaScript loaded!")



////
//// QUESTION DATA
////


const categories = [{
    category: "Geography",
    questions: [
        {
            q: "What is the name given to a pond formed from a meander being cut off from a river?",
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
                    a: "Auroch-arc reservoir",
                    correct: false
                }
            ]
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
            q: "On their national flags, what do Kazakhstan, Kiribati, Montenegro, and Uganda all have in common?",
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
            q: "What's that coming over the hill?",
            answers: [
                {
                    a: "Is it a monster?",
                    correct: true
                },
                {
                    a: "Is it a monster?",
                    correct: true
                },
                {
                    a: "Is it a monstaaaa?",
                    correct: true
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
            q: "All the options for the previous question are names of studio albums by which band?",
            answers: [
                {
                    a: "Paramore",
                    correct: false
                },
                {
                    a: "Jefferson Airplane",
                    correct: false
                },
                {
                    a: "Big Brother and the Holding Company",
                    correct: true
                },
                {
                    a: "Nickelback",
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
let nextQuestion = document.getElementById("next-question"); // This button is regenerated after every question.
const endOfCategory = document.getElementById("end-of-category");
const endOfCategoryDiv = document.getElementById("end-of-category-div");
const backToCategories = document.getElementById("back-to-categories");



////
//// FUNCTIONS
////


openCategory = (i) => {
    categoryListDiv.remove();
    categoryHead.textContent = categories[i].category;
    openQuestion(i,0);

}

openQuestion = (catNum, qNum) => {
    console.log("Question "+(qNum+1)+" of category "+(catNum+1)+" should load now.");

    questionHead.textContent = "Question "+(qNum+1);
    questionDiv.style.display = "initial";
    question.textContent = categories[catNum].questions[qNum].q;
    
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

    responseDiv.style.display = "none";
        
    nextQuestion.removeEventListener("click",this)
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

    // Change the response depending on the answer option.
    let answerMessage = ( categories[catNum].questions[qNum].answers[aNum].correct ? "You got that right!" : "You got that wrong!" );
    response.innerText = answerMessage;

    // If there is a next question, we show a button to it.
    const nextQNum = qNum+1;

    if (categories[catNum].questions[nextQNum]) {
        console.log("There is a next question.")

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
    }
    else {
        console.log("There are no more questions in this category.")
        endCategory(catNum);
    }
    
}

endCategory = (catNum) => {
    questionHead.style.display = "none";
    endOfCategoryDiv.style.display = "initial";
}



////
//// INITIALISING CATEGORY LIST
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
