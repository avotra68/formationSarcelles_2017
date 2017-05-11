/// variable du score
var score = 0;

// function pour les question onclick
function question1(){
  //variable reponse + transformation en numero
  var reponse=Number(prompt("Quel est la première ligne de code en HTML\n \n 1: <doctype html> \n 2: <!Doctype><html> \n 3: <!DOCTYPE html> \n "));
  //switch verification si la reponse tapper est un numero.
  switch (reponse) {
    //dans le cas reponse est 1
    case 1:
    alert("Mauvaise réponse");
    //autoincrementation du score si mauvaise reponse
    score++;
    //break pour terminer l'instruction
      break;
      case 3:
      alert("Bonne réponse");
        break;
        case 2:
        alert("Mauvaise réponse");
        score++;
          break;
    default:
  }
}

function question2(){
  var reponse=Number(prompt("Comment créer une liste ordonnée\n \n 1: <ol><li>Jolie</li><li>Tonerre</li><li>Rouge</li></ol> \n 2: <ol><ul>Jolie</ul><ul>Tonerre</ul><ul>Rouge</ul></ol>  \n 3: <ul><li>Jolie</li><li>Tonerre</li><li>Rouge</li></ul>  \n "));
  switch (true) {
    case (reponse==2):
    alert("Mauvaise réponse");
    score+= +1;
      break;
      case (reponse==1):
      alert("Bonne réponse");
        break;
        case (reponse==3):
        alert("Mauvaise réponse");
        score+= +1;
          break;
    default:
  }
}

function question3(){
  var reponse=Number(prompt("Qui est l'instru \n \n 1: <hr> \n 2: <tr> \n 3: <br> \n "));
  switch (true) {
    case (reponse==1):
    alert("Mauvaise réponse");
    score+= +1;
      break;
      case (reponse==2):
      alert("Bonne réponse");
        break;
        case (reponse==3):
        alert("Mauvaise réponse");
        score+= +1;
          break;
    default:
  }
}

function question4(){
  var reponse=Number(prompt("Quelle propiété de Flebox existe vraiment?\n \n 1: flex-in \n 2: align-flex \n 3: flex-grow \n "));
  switch (true) {
    case (reponse==1):
    alert("Mauvaise réponse");
    score+= +1;
      break;
      case (reponse==3):
      alert("Bonne réponse");
        break;
        case (reponse==2):
        alert("Mauvaise réponse");
        score+= +1;
          break;
    default:
  }
}

function question5(){
  var reponse=Number(prompt("Qu'est-ce que le responsive \n \n 1: un site web réserver au téléphone \n 2: un site web accessible sous plusieurs format \n 3: un site web \n "));
  switch (true) {
    case (reponse==1):
    alert("Mauvaise réponse");
    score+= +1;
      break;
      case (reponse==2):
      alert("Bonne réponse");
        break;
        case (reponse==3):
        alert("Mauvaise réponse");
        score+= +1;
          break;
    default:
  }
}
