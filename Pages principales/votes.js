
var nombre=0;
// Initialisation des scores pour chaque artistes
var scores = {"lafeveimg": 0,
	"Adcimg": 0,
	"diamantimg": 0,
	"solaluneimg": 0,
	"sdmimg": 0,
	"luidjiimg": 0,
	"hamzaimg": 0};

// Tableaux d'images pour la fonction change()
var tabImages = ["..\\ressources\\categorie\\Album_de_l'annee\\24-LaFeve\\lafeveimg.jpg",
	"..\\ressources\\categorie\\Album_de_l'annee\\ADC-FreezeCorleone\\Adcimg.jpg",
	"..\\ressources\\categorie\\Album_de_l'annee\\diamantdubled-Zola\\diamantimg.jpg",
	"..\\ressources\\categorie\\Album_de_l'annee\\Lenfantdelapluie-Solalune\\solaluneimg.jpg",
	"..\\ressources\\categorie\\Album_de_l'annee\\Liendusang-Sdm\\sdmimg.jpg",
	"..\\ressources\\categorie\\Album_de_l'annee\\saison00-Luidji\\luidjiimg.jpg",
	"..\\ressources\\categorie\\Album_de_l'annee\\sincerement-Hamza\\hamzaimg.jpg"];

// Fonction pour les scores
function score(image) {
	if(nombre<20){
	let image1Src = document.getElementById('Image1').src;
	let image2Src = document.getElementById('Image2').src;

	// Garder uniquement le nom
    let image1Nom = image1Src.match(/([^\/]+)\.(jpg)$/)[1];
    let image2Nom = image2Src.match(/([^\/]+)\.(jpg)$/)[1];
	//alert("image1Nom :"+image1Nom);
	// Mettre à jour les scores
	if(image=='Image1'){
		for (let nom in scores){
			//alert("nom "+ nom);
			if (nom==image1Nom) {
				scores[nom]+=(1+scores[image2Nom]);
				//alert(scores[nom]);
				break;
			}
	}}
	else{
		for (let nom in scores){
			if (nom==image2Nom) {
				scores[nom]+=(1+scores[image1Nom]);
				//alert(scores[nom]);
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
	// alert("baka");
	document.getElementById('classement').innerText = "Votre Top 3 est :";
	document.getElementById('Image1').style.display="none";
	document.getElementById('Image2').style.display="none";
	document.getElementById('Image3').style.display="block";
	document.getElementById('Image4').style.display="block";
	document.getElementById('Image5').style.display="block";
	// alert("ssggg");
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
		// alert(gagnant);
		topGagnants.push(gagnant);
		delete copieScores[gagnant];
	}
	//alert(gagnant);
	var j=3;
	for(let gagnants of topGagnants){
		// alert(gagnants);
		for(let i of tabImages){
			if(i.includes(gagnants)){
				// alert("vaaamooos");
				document.getElementById('Image'+j).src = i;
				// alert(j);
				j++;
				break;
			}
		}
	}

}