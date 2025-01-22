// alert("bienvenue"); 
// SELECTEURS
// document.querySelector('h4').style.backgroundColor="yellow";
 const baliseHtml = document.querySelector('h4');
 console.log(baliseHtml);
 
// click event
// création d'une constante afin de pointer la class .click-event de la <div>
const questionContainer = document.querySelector('.click-event');
//console.log(questionContainer);
// ajout automatique du css sur la const questionContainer
questionContainer.style.borderRadius="150px";

const btn1 = document.querySelector("#btn-1");
// console.log(btn1);
const btn2 = document.getElementById("btn-2")
// console.log(btn2);
const reponse = document.querySelector("p");
console.log(reponse);


questionContainer.addEventListener('click', () => {
    // ajout direct de css dans questionContainer
    // questionContainer.style.backgroundColor = "red";
    // questionContainer.style.border = "3px solid teal";

    
    // ajout d'une class .question-click dans mon ficher css et ensuite retour sur mon fichier js et ajout de la class dans mon questionContainer
    // a chaque clique le css se met automatiquement 

    // questionContainer.classList.add('question-click');

    // mais avec le add on ne peut pas revenir en arriere pour ça nous utilisons toggle
    questionContainer.classList.toggle('question-click');
    
});
btn1.addEventListener("click", () => {
    reponse.style.visibility = "visible";
    reponse.style.backgroundColor = "green";
});

btn2.addEventListener("click", () =>{
    reponse.style.visibility = "visible";
    reponse.style.backgroundColor = "red";
});















//----------------------------------------------------------------------------------------------------------------

