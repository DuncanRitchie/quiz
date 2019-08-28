console.log("JavaScript loaded!")

const categories = [{
    category: "Geography",
    questions: [
        {
            q: "What is the name given to a pond formed from a meander cut off from a river after it forms a more direct channel?",
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
                    a: "Aurocharc reservoir",
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
}]

console.log("Categories loaded!")


openCategory = (i) => {
    document.getElementById("category-list-div").remove();
    console.log("The first question of category "+i+" would load now.");
    document.getElementById("category-head").textContent = categories[i].category;

}

let categoryList = categories.map((cat, i)=>{
    let node = document.createTextNode(cat.category);
    let button = document.createElement("button");
    button.appendChild(node);

    button.addEventListener("click",()=>{openCategory(i)});

    let li = document.createElement("li");
    li.appendChild(button);
    document.getElementById("category-list").appendChild(li);
})


