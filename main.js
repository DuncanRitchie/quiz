console.log("JavaScript loaded!")

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
                    a: "Hawaii",
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
        }
    ]
}]

console.log("Categories loaded!")


openCategory = (i) => {
    document.getElementById("category-list-div").remove();
    document.getElementById("category-head").textContent = categories[i].category;
    openQuestion(i,0);

}

openQuestion = (catNum, qNum) => {
    console.log("The first question of category "+catNum+" would load now.");
    document.getElementById("question-head").textContent = "Question "+(qNum+1);
    document.getElementById("question").textContent = categories[catNum].questions[qNum].q;
    
    let answers = categories[catNum].questions[qNum].answers;
    let answerList = document.getElementById("answer-list")
    answers.map((a, i)=>{
        let node = document.createTextNode(a.a);
        let button = document.createElement("button");
        button.appendChild(node);
    
        button.addEventListener("click",()=>{giveAnswer(catNum, qNum, i)});
    
        let li = document.createElement("li");
        li.appendChild(button);
        answerList.appendChild(li);
    })
}

giveAnswer = (catNum, qNum, aNum) => {
    console.log("You selected answer "+aNum+"!")
    let answerMessage = ( categories[catNum].questions[qNum].answers[aNum].correct ? "You got that right!" : "You got that wrong!" );
    document.getElementById("response").innerText = answerMessage;

    let nextQuestion = document.getElementById("next-question");
    if (categories[catNum].questions[qNum+1]) {
        nextQuestion.addEventListener("click", openQuestion(catNum, qNum+1))
    }
    else {
        nextQuestion.remove();
    }
    
}

categories.map((cat, i)=>{
    let node = document.createTextNode(cat.category);
    let button = document.createElement("button");
    button.appendChild(node);

    button.addEventListener("click",()=>{openCategory(i)});

    let li = document.createElement("li");
    li.appendChild(button);
    document.getElementById("category-list").appendChild(li);
})


