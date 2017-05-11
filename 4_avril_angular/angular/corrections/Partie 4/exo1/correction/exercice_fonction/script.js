var age = parseInt(prompt("Quel est votre age?"));

if (age<12) {
  alert("vous ne pouvez pas louer de video");
} else if (age<18){
  msg12();
} else {
  msg18();
  alert(age);
}
//variable déclarée à l'intérieur de la fonction
function msg12() {
  var txt ="Vous pouvez louer que la catégorie moins de 18ans";
  return alert(txt);
}

function msg18(){
  var txt="Vous pouvez louer n'importe quelle video";
  return alert(txt);
}
