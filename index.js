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
//--------------------------------------------------------------------------------------------------------------------  evenement qui réagit avec les touches de clavier
                  // keyPress event 
// création d'une constante keypressContainer qui pointe sur la div keypress box
const keypressContainer = document.querySelector(".keypress");
// console.log(keypressContainer);

// création d'une constante key qui pointe sur le <span> avec l'id key
const key = document.getElementById("key");

// création d'une fonction pour lire le son mp3
// cette fonction permet d'emettre un son de sonnette a chaque fois que l'on presse une touche
const ring = () => {
    const audio = new Audio();
  //  console.log(Audio);
    
    audio.src ="./sonnette.mp3";
   // console.log(audio.src);
    
    audio.play();
}

// (e) pour voir les events et les éléments de l'event keypress
document.addEventListener("keypress", (e) =>{
    // textContent permet d'écrire du texte et e.key pointe sur l'élément key de keypress ce qui permet d'afficher la lettre ou la touche du clavier
    key.textContent = e.key;
    // condition en fonction de la lettre la couleur de la div keypress change
    if(e.key === "g"){
        keypressContainer.style.backgroundColor = "red";
    }else if(e.key === "f"){
        keypressContainer.style.backgroundColor = "blue";
    }else{
        keypressContainer.style.backgroundColor = "purple";
    }
    // execution de la fonction ring() 
    // ring();
 // fonction ring mit en commentaires pour eviter le son de la sonnette   
});

/*   ----------------------------------------------------------------------------
                           Scroll Event
        événement sur le scroll
*/

const nav = document.querySelector("nav");
 //console.log(nav);

 window.addEventListener("scroll", () =>{
   // console.log(e);
 // console.log(window.scrollY); // avec scrollY nous avons la valeur en pixel de notre scroll
   
   // faire une condition : si window.scrollY superieur a 120 pixel alors j'aimerais voir la nav . celle ci qui en css est a -50px  changera en 0px
   
   if(window.scrollY > 120){
    nav.style.top = 0;
   }else{
    nav.style.top = "-50px";
   }
    
 });

 /* événement sur un input du formulaire ajouté sur index.html 
                 Form Event    */
// nous declarons toujours les constantes en premier ensuite les variables et apres les fonctions 
const form = document.querySelector("form");
// console.log(form);

// création d'une constante inputName qui pointe sur l'input
const inputName = document.querySelector("input[type = text]");
 console.log(inputName);

 const select = document.querySelector("select");
 let pseudo = "";
 let language = "";
// ajout d'un evenement : 
//  inputName.addEventListener("input", (e) =>{
//     // console.log(e) permet de voir tous les elements liés a l'évenement

//     // permet de pointer sur l'élément target et de pointer ensuite sur value pour voir ce que l'on a saisi dans <input>
//     console.log(e.target.value);
    
//  });
     // événement pour recuperer le pseudo
     // il suffira de taper un console.log(pseudo) pour voir apparaitre la value dans le terminal
inputName.addEventListener("input", (e) =>{
    pseudo = e.target.value;
});
       // événement pour recuperer le language
       // il suffira de taper un console.log(planguage) pour voir apparaitre la value dans le terminal
select.addEventListener("input", (e) =>{
    language = e.target.value;
});




















