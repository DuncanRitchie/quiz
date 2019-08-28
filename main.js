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
                    a: "Lady Gaga",
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
    document.getElementById("question-head").textContent = "Question "+qNum;
    document.getElementById("question").textContent = categories[catNum].questions[qNum].q;
    
    let answers = categories[catNum].questions[qNum].answers;
    answers.map((a, i)=>{
        let node = document.createTextNode(a.a);
        let button = document.createElement("button");
        button.appendChild(node);
    
        button.addEventListener("click",()=>{giveAnswer(catNum, qNum, i)});
    
        let li = document.createElement("li");
        li.appendChild(button);
        document.getElementById("answer-list").appendChild(li);
    })
}

giveAnswer = (catNum, qNum, aNum) => {
    console.log("You selected answer "+aNum+"!")
    let answerMessage = ( categories[catNum].questions[qNum].answers[aNum].correct ? "You got that right!" : "You got that wrong!" );
    document.getElementById("response").innerText = answerMessage;
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


