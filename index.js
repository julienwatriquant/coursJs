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
    reponse.classList.toggle("show-response");
    
    reponse.style.backgroundColor = "green";
});

btn2.addEventListener("click", () =>{
    reponse.classList.toggle("show-response");
    reponse.style.backgroundColor = "red";
});
console.log(reponse);

//----------------------------------------------------------------------------------------------------------------

// MouseMove
// Mouse Events    évenements de la souris. Nous allons créer un effet
const mousemove = document.querySelector(".mouseMove");
// console.log(mousemove);

// on pointe sur la class mouseMove et l'on voit que nous sommes sur notre div mouseMove
// on verifis avec un console.log()
//console.log(mousemove);
//    window est un objet au dessus du DOM , il représente votre fenetre 
window.addEventListener("mousemove", (e) =>{
  //  console.log(e.target);  //(e) pour event permet de lister tous les parametres de l'événement "mousemove" et d'ajouter le parametres target qui nous permet de cibler tout le DOM 

    // ajout de style
    
     mousemove.style.left = e.pageX + "px";
      mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () =>{
    //  console.log("test");
      
      mousemove.style.transform = "scale(2)  translate( -25%, -25%)";  // rappel de la translate
    //  questionContainer.style.backgroundColor = "black";
});

window.addEventListener("mouseup", () =>{
       mousemove.style.transform = "scale(1)  translate( -50%, -50%)";
       mousemove.style.border = "2px solid teal";
     //  questionContainer.style.backgroundColor = "black";
});

    // ajout d'un effet rouge quand la souris va sur questionContainer
questionContainer.addEventListener("mouseenter", () =>{
      questionContainer.style.backgroundColor = "red";
});

 // ajout d'un effet rose quand la souris va sur questionContainer
questionContainer.addEventListener("mouseout", () =>{
      //  console.log("mouseout");

      questionContainer.style.backgroundColor = "pink";
        
});

// effet sur <p> sur const reponse  effet d'inclinaison de la reponse

reponse.addEventListener("mouseover", () =>{
      reponse.style.transform = "rotate(2deg)";
});



















