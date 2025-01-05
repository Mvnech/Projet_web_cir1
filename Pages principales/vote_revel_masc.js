
var nombre=0;
// Initialisation des scores pour chaque artistes
let scores = {
    "furlax": 0,
    "GAPMAN": 0,
    "fave": 0,
    "jolagreen": 0,
    "JRK-19": 0,
    "tif": 0,
    "Yame": 0};

	
let tabImages = [
    "..\\ressources\\categorie\\revelation_masculine_de_l'annee\\furlax.jpg",
    "..\\ressources\\categorie\\revelation_masculine_de_l'annee\\GAPMAN.png",
    "..\\ressources\\categorie\\revelation_masculine_de_l'annee\\fave.jpg",
    "..\\ressources\\categorie\\revelation_masculine_de_l'annee\\jolagreen.jpg",
    "..\\ressources\\categorie\\revelation_masculine_de_l'annee\\JRK-19.jpg",
    "..\\ressources\\categorie\\revelation_masculine_de_l'annee\\tif.png",
    "..\\ressources\\categorie\\revelation_masculine_de_l'annee\\Yame.jpg"];

// Fonction pour les scores
function score(image) {
	if(nombre<20){
	let image1Src = document.getElementById('Image1').src;
	let image2Src = document.getElementById('Image2').src;

	// Garder uniquement le nom
    let image1Nom = image1Src.match(/([^\/]+)\.(jpg|png)$/)[1];
    let image2Nom = image2Src.match(/([^\/]+)\.(jpg|png)$/)[1];
	// Mettre à jour les scores
	if(image=='Image1'){
		for (let nom in scores){
			if (nom==image1Nom) {
				scores[nom]+=(1+scores[image2Nom]);
				break;
			}
	}}
	else{
		for (let nom in scores){
			if (nom==image2Nom) {
				scores[nom]+=(1+scores[image1Nom]);
				break;
			}
	}}
	}
}

// Fonction pour changer les images
var index1 = 0;
var index2 = 1;
function change() {
	// Incrémente les index pour le prochain affrontement
	if(nombre<20){
		index2++;
		if (index2 >= tabImages.length) {
			index1++;
			if (index1 >= tabImages.length - 1) {
				index1 = 0;
			}
			index2 = index1 + 1;
		}
		document.getElementById('Image1').src = tabImages[index1];
		document.getElementById('Image2').src = tabImages[index2];
		nombre++;
	}
	else if(nombre==20){
		nombre++;
		meilleurs();
		
		
	}
}

function meilleurs(){
	document.getElementById('classement').innerText = "Votre Top 3 est :";
	document.getElementById('Image1').style.display="none";
	document.getElementById('Image2').style.display="none";
	document.getElementById('Image3').style.display="block";
	document.getElementById('Image4').style.display="block";
	document.getElementById('Image5').style.display="block";
	let copieScores = scores;
	var topGagnants = [];
	for (let k = 0; k < 3; k++){
		var max=0;
		var gagnant="";
		for(let nom in copieScores){
			if(copieScores[nom]>max){
				max=copieScores[nom];
				gagnant=nom;
				}
		}
		gagnant = gagnant.split('/').pop();
		topGagnants.push(gagnant);
		delete copieScores[gagnant];
	}
	var j=3;
	for(let gagnants of topGagnants){
		for(let i of tabImages){
			if(i.includes(gagnants)){
				document.getElementById('Image'+j).src = i;
				j++;
				break;
			}
		}
	}

}