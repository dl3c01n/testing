const sujets = ["je", "tu", "il", "nous", "vous", "ils"];
const conjpremier = ["e", "es", "e", "ons", "ez", "ent"];
const conjsecond = ["is","is","it","issons","issez","issent"];
let premier = false;
let second = false;

var verbe = prompt("Quel verbe voulez-vous convertir? ");

if(verbe.slice(-2) == "er"){
  alert("Il appartient au premier groupe");
  this.premier = true;
}else{
  alert("Il appartient au second groupe");
  this.second = true
}

if(premier = true){
  for (var i = 0; i < conjpremier.length; i++) {
    document.write(sujets[i] + " " + verbe.substr(0, verbe.length-2)+conjpremier[i]+"<hr>");
  }
}else if(second = true){
  for (var e = 0; e < conjsecond.length; e++) {
    document.write(sujets[e]+ " " + verbe.slice(0, verbe.length-2)+conjsecond[e]+"<hr>");
  }
}else{
  alert("Ne me tente pas, il est du troisième groupe!")
}
