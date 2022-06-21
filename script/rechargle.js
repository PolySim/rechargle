let nb = 0;
let storage = localStorage;
	
function donneFocus(){
	var input = document.getElementsByTagName('input')[0];
	if (input != null){
		input.focus();
	}
}

function modifieNum(){
	$.ajax({
		type: "POST",
		url: '../date.php',
		success: function(reponse){
			let a = 0;
		},
		error: function(){
			let a = 0;
		}
	})
}

modifieNum();

function modifieHier(){
	var hier = document.getElementById('hier');
	hier.getElementsByTagName('img')[0].src = data[num]['im2'];
	hier.getElementsByTagName('img')[0].alt = data[num]['alt2'];
	hier.getElementsByTagName('p')[1].textContent = data[num]['alt2'];
}

window.addEventListener('load', modifieHier);

var modifie_heure = function(){
	var bHeure = document.getElementById('heure');
	var heure = bHeure.getElementsByTagName('span');
	var today = new Date();
	if (today.getHours().toString().length == 1 && today.getMinutes().toString().length == 1){
		heure[0].textContent = '0' + today.getHours() + '.0' + today.getMinutes() + ' ';
	}
	else if(today.getHours().toString().length == 1){
		heure[0].textContent = '0' + today.getHours() + '.' + today.getMinutes() + ' ';
	}
	else if(today.getMinutes().toString().length == 1){
		heure[0].textContent = today.getHours() + '.0' + today.getMinutes() + ' ';
	}
	else{
		heure[0].textContent = today.getHours() + '.' + today.getMinutes() + ' ';
	}
	bonneHeure();
}

function bonneHeure(){
	var today = new Date();
	var heure = document.getElementById('heure');
	var chiffre = heure.getElementsByTagName('span');
	if (parseInt(chiffre[0].textContent) > 12){
		if (Math.round(chiffre[0].textContent - 12).toString().length == 1 && today.getMinutes().toString().length == 1){
			chiffre[0].textContent = '0' + Math.round(chiffre[0].textContent - 12) + ".0" + today.getMinutes() + ' ';
		}
		else if(Math.round(parseInt(chiffre[0].textContent) - 12).toString().length == 1){
			chiffre[0].textContent = '0' + Math.round(chiffre[0].textContent - 12) + "." + today.getMinutes() + ' ';
		}
		else if(today.getMinutes().toString().length == 1){
			chiffre[0].textContent = Math.round(chiffre[0].textContent - 12) + ".0" + today.getMinutes() + ' ';
		}
		else{
			chiffre[0].textContent = Math.round(chiffre[0].textContent - 12) + "." + today.getMinutes() + ' ';
		}
		chiffre[1].textContent = 'p.m';
	}
} 

window.addEventListener('keyup', modifie_heure);
window.addEventListener('load', modifie_heure);

const choseImg = function(nume){
	var place = document.getElementById('fond');
	
	var part = document.createElement('div');
	part.style.display = 'flex';
	part.style.height = '27.4%';
	part.style.marginTop = '5%';
	
	var divIcone = document.createElement('div');
	divIcone.style.height = '25%';
	divIcone.style.width = '10.85%';
	divIcone.style.margin = "0px 1% 0px 1%";
	var icone = document.createElement('img');
	icone.src = 'image/logor.png';
	icone.alt = 'icone';
	icone.style.height = '100%';
	icone.style.width = '100%';
	divIcone.appendChild(icone);
	part.appendChild(divIcone);
	
	var photo = document.createElement('img');
	photo.src = data[nume]['im1'];
	photo.alt = data[nume]['alt1'];
	photo.id = 'photo';
	photo.style.height = '100%';
	photo.style.width = 'auto';
	photo.style.opacity = '90%';
	photo.style.borderRadius = '10%';
	part.appendChild(photo);
	
	place.appendChild(part);
	place.appendChild(delivered());
	
	var rep = document.createElement('div');
	rep.id = 'asup';
	rep.style.display = 'flex';
	rep.style.height = '6.25%';
	rep.style.marginTop = '4%';
	rep.appendChild(reponse());
	var divIcone2 = document.createElement('div');
	divIcone2.style.height = '100%';
	divIcone2.style.width = '9.85%';
	divIcone2.style.margin = "0px 1% 0px 1%";
	var icone2 = document.createElement('img');
	icone2.src = 'image/icone.png';
	icone2.alt = 'icone';
	icone2.style.height = '100%';
	icone2.style.width = '100%';
	divIcone2.appendChild(icone2);
	rep.appendChild(divIcone2);
	place.appendChild(rep);

	var div = document.createElement('div');
	div.style.position = 'relative';
	div.style.margin = '1% 5% 0px auto';
	div.style.height = '4.5%';
	div.style.width = '15%';
	div.id = 'envoie';
	div.style.zIndex = '2';
	var envoie = document.createElement('img');
	envoie.src = 'image/envoie.png';
	envoie.alt = 'envoie';
	envoie.style.height = '100%';
	envoie.style.width = 'auto';
	envoie.style.width = 'auto';
	envoie.style.opacity = '90%';
	envoie.style.cursor = 'pointer';
	div.appendChild(envoie);
	place.appendChild(div);

	div.addEventListener('click', function(){
		valide(num);
		donneFocus();
	})
}

var delivered = function(){
	var heure = document.getElementById('heure');
	var delivered = document.createElement('div');
	delivered.className = 'delivered';
	delivered.style.display = 'flex';
	delivered.style.alignItems = 'center';
	delivered.style.justifyContent = 'center';
	delivered.style.border = '2px solid black';
	delivered.style.borderRadius = '5px';
	delivered.style.marginLeft = '13%';
	delivered.style.marginTop = '2%';
	delivered.style.width = '43.5%';
	delivered.style.height = '4%';
	delivered.style.opacity = '90%';
	delivered.style.fontSize = 'max(0.7vw, 1.3vh)';
	delivered.style.fontWeight = 'normal';
	var texte = document.createElement('div');
	texte.textContent = 'Delivered at ';
	var span = document.createElement('span');
	span.textContent = heure.getElementsByTagName('span')[0].textContent;
	texte.appendChild(span);
	delivered.appendChild(texte);
	if (storage.getItem('delivered1') == null){
		storage.setItem('delivered1', span.textContent);
	} else if (storage.getItem('delivered2') == null){
		storage.setItem('delivered2', span.textContent);
	}
	return delivered;
}

window.addEventListener('load', function(){
	choseImg(num);
})

function repOk(){
	var rep = document.getElementById('reponse').value.split(' ');
	var goodRep = '';
	rep.forEach(element => {
		if (element != ""){
			goodRep = goodRep + element + ' ';
		}
	});
	return goodRep.substring(0, goodRep.length -1);
}

var reponse = function(){
	var div = document.createElement('div');
	var input = document.createElement('input');
	div.id = 'placeRep';
	div.style.display = 'flex';
	div.style.alignItems = 'center';
	div.style.justifyContent = 'center';
	div.style.position = 'relative';
	div.style.zIndex = '2';
	div.style.boxSizing = 'border-box';
	div.style.border = '2px solid black';
	div.style.borderRadius = '5px';
	div.style.width = '43.5%';
	div.style.height = '100%'
	div.style.opacity = '90%';
	div.style.fontSize = 'max(0.7vw, 1.3vh)';
	div.style.fontWeight = 'normal';
	div.style.marginLeft = 'auto';
	
	input.id = 'reponse';
	input.placeholder = 'Type your answer ...';
	input.autocomplete = 'off';
	input.maxLength = '25';
	input.style.width = '90%';
	input.style.textAlign = 'center';
	input.style.backgroundColor = '#1fe0';
	input.style.border = '0px';
	input.style.fontSize = 'max(0.6vw, 1.2vh)';
	input.style.fontFamily = 'Inika';
	input.style.outline = 'none';
	
	div.appendChild(input);
	return div;
}

var valide = function(nume){
	var rep = document.getElementById('reponse');
	var envoie = document.getElementById('envoie');
	if (rep.value == ''){
		envoie.style.animation = 'nope 0.4s forwards';
		setTimeout(enleveAnim, 400);
	}else{
		var reponse = repOk();
		envoie.style.animation = 'none';
		if (reponse.toLowerCase() == data[nume]['reponse']){
			win()
		}
		else {
			erreur()
		}
	}
}

window.onkeyup = (key) => {
	if (key.which == 13 && document.getElementById('lose') == null && document.getElementById('win') == null){
		valide(num);
		donneFocus();
	}
}

function enleveAnim(){
	var envoie = document.getElementById('envoie');
	envoie.style.animation = 'none';
}

function ajoutReponse(reponse, color, indice){
	var place = document.getElementById('fond');

	var ligne = document.createElement('div');
	ligne.style.display = 'flex';
	ligne.style.height = '6.25%';
	ligne.style.marginTop = '4%';

	var div = document.createElement('div');
	div.style.display = 'flex';
	div.style.flexWrap = 'wrap';
	div.style.position = 'relative';
	div.style.zIndex = '2';
	div.style.justifyContent = 'center';
	div.style.alignItems = 'center';
	div.style.textAlign = 'center';
	div.style.boxSizing = 'border-box';
	div.style.border = '2px solid black';
	div.style.borderRadius = '5px';
	div.style.width = '43.5%';
	div.style.height = '100%'
	div.style.opacity = '90%';
	div.style.fontSize = 'max(0.7vw, 1.3vh)';
	div.style.fontWeight = 'normal';
	div.style.marginLeft = 'auto';
	div.style.color = color;
	div.style.padding = '1%';
	div.style.overflow = 'hidden';
	div.textContent = reponse;

	if (indice == 0){
		var icone2 = document.createElement('img');
		icone2.src = 'image/icone.png';
		icone2.alt = 'icone';
		icone2.style.height = '100%';
		icone2.style.width = '9.85%';
		icone2.style.margin = '0 1% 0 1%';
		ligne.appendChild(div);
		ligne.appendChild(icone2);
	}else{
		div.style.marginRight = '13%';
		ligne.appendChild(div);
	}
	place.appendChild(ligne);
}

function ajoutInput(){
	var place = document.getElementById('fond');
	var rep2 = reponse();
	rep2.style.marginRight = '13%';
	rep2.style.marginTop = '4%';
	rep2.style.height = '6.25%'
	rep2.id = 'asup';
	place.appendChild(rep2);

	var div3 = document.createElement('div');
	div3.style.margin = '0 10% 0 auto';
	div3.style.height = '4.5%';
	div3.style.width = '10%';
	div3.style.position = 'relative';
	div3.style.zIndex = '2';
	div3.id = 'envoie';
	var envoie2 = document.createElement('img');
	envoie2.src = 'image/envoie.png';
	envoie2.alt = 'envoie';
	envoie2.style.height = '100%';
	envoie2.style.width = 'auto';
	envoie2.style.opacity = '90%';
	envoie2.style.cursor = 'pointer';
	div3.appendChild(envoie2);
	place.appendChild(div3);

	div3.addEventListener('click', function(){
		valide(num);
	})
}

function ajoutPerte(valeur){
	var place = document.getElementById('fond');
	var div2 = document.createElement('div');
	div2.style.color = '#D63232';
	div2.textContent = '-' + valeur + '%';
	div2.style.fontSize = 'max(0.7vw, 1.3vh)';
	div2.style.margin = '0 6.5% 0 auto';
	div2.style.fontWeight = 'normal';
	div2.style.width = '20%';
	place.appendChild(div2);
}

var erreur = function(){
	var rep = document.getElementById('reponse');
	storage.setItem('rep' + nb, rep.value);
	var place = document.getElementById('fond');
	
	supInput();

	var ligne = document.createElement('div');
	ligne.style.display = 'flex';
	ligne.style.height = '6.25%';
	ligne.style.marginTop = '4%';

	var div = document.createElement('div');
	div.style.display = 'flex';
	div.style.flexWrap = 'wrap';
	div.style.position = 'relative';
	div.style.zIndex = '2';
	div.style.justifyContent = 'center';
	div.style.alignItems = 'center';
	div.style.textAlign = 'center';
	div.style.boxSizing = 'border-box';
	div.style.border = '2px solid black';
	div.style.borderRadius = '5px';
	div.style.width = '43.5%';
	div.style.height = '100%'
	div.style.opacity = '90%';
	div.style.fontSize = 'max(0.7vw, 1.3vh)';
	div.style.fontWeight = 'normal';
	div.style.marginLeft = 'auto';
	div.style.color = '#D63232';
	div.style.padding = '1%';
	div.style.overflow = 'hidden';
	div.textContent = rep.value;
	
	if (nb == 0){
		nb = 1;
		var icone2 = document.createElement('img');
		icone2.src = 'image/icone.png';
		icone2.alt = 'icone';
		icone2.id = 'djune';
		icone2.style.height = '100%';
		icone2.style.width = '9.85%';
		icone2.style.margin = '0 1% 0 1%';
		ligne.appendChild(div);
		ligne.appendChild(icone2);
	}else{
		nb = nb + 1;
		div.style.marginRight = '13%';
		ligne.appendChild(div);
	}
	storage.setItem('nb', nb);
	place.appendChild(ligne);
	
	var perte = Math.floor(Math.random() * 10) + 10;
	var div2 = document.createElement('div');
	div2.style.color = '#D63232';
	div2.textContent = '-' + perte.toString() + '%';
	div2.style.fontSize = 'max(0.7vw, 1.3vh)';
	div2.style.margin = '0 6.5% 0 auto';
	div2.style.fontWeight = 'normal';
	div2.style.width = '20%';
	place.appendChild(div2);
	
	modifie_batterie(perte);
	var batterie = document.getElementById('batterie');
	var val = batterie.getElementsByTagName('span');
	if (val[0].textContent == '0'){
		place.appendChild(lose());
		storage.setItem('win', false);
		var delivered1 = delivered();
		delivered1.style.marginBottom = '5%';
		place.appendChild(delivered1);
	}else{
		if (parseInt(val[0].textContent) <= 50 && document.getElementById("indice") == undefined){
			storage.setItem('indice', nb);
			place.appendChild(indice());
		}
		var rep2 = reponse();
		rep2.style.marginRight = '13%';
		rep2.style.marginTop = '4%';
		rep2.style.height = '6.25%'
		rep2.id = 'asup';
		place.appendChild(rep2);

		var div3 = document.createElement('div');
		div3.style.margin = '0 10% 0 auto';
		div3.style.height = '4.5%';
		div3.style.width = '10%';
		div3.style.position = 'relative';
		div3.style.zIndex = '2';
		div3.id = 'envoie';
		var envoie2 = document.createElement('img');
		envoie2.src = 'image/envoie.png';
		envoie2.alt = 'envoie';
		envoie2.style.height = '100%';
		envoie2.style.width = 'auto';
		envoie2.style.opacity = '90%';
		envoie2.style.cursor = 'pointer';
		div3.appendChild(envoie2);
		place.appendChild(div3);

		div3.addEventListener('click', function(){
			valide(num);
			donneFocus();
		})
	}	
}

function indice(){
	var ligne = document.createElement('div');
	ligne.style.height = '10%';
	ligne.style.display = 'flex';
	ligne.id = 'indice';

	var divIcone = document.createElement('div');
	divIcone.style.height = '68.5%';
	divIcone.style.width = '10.85%';
	divIcone.style.margin = "0px 1% 0px 1%";
	var icone = document.createElement('img');
	icone.src = 'image/logor.png';
	icone.alt = 'icone';
	icone.style.height = '100%';
	icone.style.width = '100%';
	divIcone.appendChild(icone);
	ligne.appendChild(divIcone);

	var photo = document.createElement('img');
	photo.src = data[num]['indice'];
	photo.alt = data[num]['alt3'];
	photo.style.height = '100%';
	photo.style.width = 'auto';
	photo.style.opacity = '90%';
	photo.style.borderRadius = '10%';
	ligne.appendChild(photo);

	return ligne;
}

var modifie_batterie = function(valeur){
	if (valeur != 0){
		storage.setItem('perte' + nb, valeur);
	}
	var batterie = document.getElementById('batterie');
	var val = batterie.getElementsByTagName('span');
	var image = document.getElementById('barre').getElementsByTagName('img')[1];
	val[0].textContent = val[0].textContent - valeur;
	if (val[0].textContent <= 0){
		val[0].textContent = '0';
		image.src = 'image/6.png';
	} else if (val[0].textContent <= 20){
		image.src = 'image/5.png';
	} else if (val[0].textContent <= 40){
		image.src = 'image/4.png';
	} else if (val[0].textContent <= 60){
		image.src = 'image/3.png';
	} else if (val[0].textContent <= 80){
		image.src = 'image/2.png';
	} 
	storage.setItem('batterie', parseInt(val[0].textContent));
}

function lose(){
	var ligne = document.createElement('div');
	ligne.id = 'lose';
	ligne.style.display = 'flex';
	ligne.style.height = '27.4%';
	ligne.style.marginTop = '4%';

	var divIcone = document.createElement('div');
	divIcone.style.height = '25%';
	divIcone.style.width = '10.85%';
	divIcone.style.margin = "0px 1.5% 0px 1%"
	var icone = document.createElement('img');
	icone.src = 'image/logor.png';
	icone.alt = 'icone';
	icone.style.height = '100%';
	icone.style.width = '100%';
	divIcone.appendChild(icone);
	ligne.appendChild(divIcone);
	
	var div = document.createElement('div');
	div.style.display = 'flex';
	div.style.alignItems = 'center';
	div.style.boxSizing = 'border-box';
	div.style.border = '2px solid black';
	div.style.borderRadius = '5px';
	div.style.height = '100%';
	div.style.width = '43.5%';
	div.style.opacity = '90%';
	div.style.fontSize = 'max(0.7vw, 1.3vh)';
	div.style.fontWeight = 'normal';
	div.style.textAlign = 'center';
	div.style.padding = '1%';
	
	var l1 = document.createElement('p');
	l1.textContent = "Oh no, your phone’s die 😢 ! Come back tomorrow to discover what was the answer of the day and try again !!";
	div.appendChild(l1);
	ligne.appendChild(div);
	

	var trouve = document.getElementById('nbechec');
	trouve.textContent = parseInt(trouve.textContent) + 1;
	if (storage.getItem('win') != 'false'){
		ajoutRate();
	}
	return ligne
}

function supInput(){
	var place = document.getElementById('fond');
	var asup = document.getElementById('asup');
	place.removeChild(asup);
	var envoie = document.getElementById('envoie');
	place.removeChild(envoie);
}

function goodRep(){
	var rep = document.getElementById('reponse');
	storage.setItem('rep' + (nb - 1), rep.value);

	var ligne = document.createElement('div');
	ligne.style.display = 'flex';
	ligne.style.height = '6.25%';
	ligne.style.marginTop = '4%';
	
	var div = document.createElement('div');
	div.style.display = 'flex';
	div.style.flexWrap = 'wrap';
	div.style.position = 'relative';
	div.style.zIndex = '2';
	div.style.justifyContent = 'center';
	div.style.alignItems = 'center';
	div.style.textAlign = 'center';
	div.style.boxSizing = 'border-box';
	div.style.border = '2px solid black';
	div.style.borderRadius = '5px';
	div.style.width = '43.5%';
	div.style.height = '100%'
	div.style.opacity = '90%';
	div.style.fontSize = 'max(0.7vw, 1.3vh)';
	div.style.fontWeight = 'normal';
	div.style.marginLeft = 'auto';
	div.style.color = '#56A526';
	div.style.padding = '1%';
	div.style.overflow = 'hidden';
	div.textContent = rep.value;

	if (document.getElementById('djune') == null){
		var icone2 = document.createElement('img');
		icone2.src = 'image/icone.png';
		icone2.alt = 'icone';
		icone2.style.height = '100%';
		icone2.style.width = '9.85%';
		icone2.style.margin = '0 1%';
		ligne.appendChild(div);
		ligne.appendChild(icone2);
	} else {
		div.style.marginRight = '13%';
		ligne.appendChild(div);
	}
	return ligne;
}

function felicitation(){
	var ligne = document.createElement('div');
	ligne.id = 'win';
	ligne.style.display = 'flex';
	ligne.style.height = '27.4%';
	ligne.style.marginTop = '4%';

	var divIcone = document.createElement('div');
	divIcone.style.height = '25%';
	divIcone.style.width = '10.85%';
	divIcone.style.margin = "0px 1.5% 0px 1%"
	var icone = document.createElement('img');
	icone.src = 'image/logor.png';
	icone.alt = 'icone';
	icone.style.height = '100%';
	icone.style.width =  '100%';
	divIcone.appendChild(icone);
	ligne.appendChild(divIcone);
	
	var div = document.createElement('div');
	div.style.display = 'flex';
	div.style.alignItems = 'center';
	div.style.boxSizing = 'border-box';
	div.style.border = '2px solid black';
	div.style.borderRadius = '5px';
	div.style.height = '100%';
	div.style.width = '43.5%';
	div.style.opacity = '90%';
	div.style.fontSize = 'max(0.6vw, 1.2vh)';
	div.style.fontWeight = 'normal';
	div.style.textAlign = 'center';
	div.style.padding = '1%';
	div.textContent = "Awesome, You’ve completed this Rechargle before the phone run’s out !! Come back tomorrow and discover a new image 😉";
	ligne.appendChild(div);
	
	return ligne
}

function win(){
	storage.setItem('win', true);
	nb += 1;
	storage.setItem('nb', nb);
	var place = document.getElementById('fond');
	place.appendChild(goodRep());
	supInput();
	place.appendChild(felicitation());
	var delivered1 = delivered();
	delivered1.style.marginBottom = '3%';
	place.appendChild(delivered1);
	
	var trouve = document.getElementById('nbreussi');
	trouve.textContent = parseInt(trouve.textContent) + 1;
	ajout();
}

function ajout(){
	$.ajax({
		type: "POST",
		url: '../ajout1.php',
		success: function(reponse){
			var trouve = document.getElementById('nbreussi').textContent;
			trouve = parseInt(trouve) + 1;
		},
		error: function(){
			var trouve = document.getElementById('nbreussi').textContent;
		}
	})
}

function ajoutRate(){
	$.ajax({
		type: "POST",
		url: '../rate.php',
		success: function(reponse){
			var trouve = document.getElementById('nbechec');
			trouve.textContent = parseInt(trouve.textContent) + 1;
		},
		error: function(){
			var trouve = document.getElementById('nbechec').textContent;
		}
	})
}

function marginTop(){
	var tel = document.getElementById("iphone");
	var back = document.getElementById("back");
	back.style.marginTop = tel.offsetTop + (tel.height * 0.025) + 'px';
}

function twitterTop(){
	var tel = document.getElementById('iphone');
	var twitter = document.getElementById('twitter-share-button');
	twitter.style.top = tel.offsetTop / 2 + 'px';
	twitter.style.transform = 'translateY(-50%)';
	twitter.style.width = tel.width * 0.7 + 'px';
}

function twitterTopRes(){
	var tel = document.getElementById('iphone');
	var twitter = document.getElementById('twitter-share-button');
	twitter.style.top = (tel.offsetTop + tel.height) + 'px';
	twitter.style.transform = 'translateY(50%)';
	twitter.style.width = tel.width * 0.7 + 'px';
}

function ajusteTaille(){
	var widthTel = document.getElementById("iphone");
	var widthBack = document.getElementById("back");
	widthBack.style.width = (widthTel.width * 0.89) + 'px';
	widthBack.style.marginTop = (widthTel.height * 0.09) + 'px';
	var heightFont = document.getElementById("fond");
	heightFont.style.height = (widthTel.height * 0.7) + 'px';
	marginTop();
}

window.addEventListener('load', ajusteTaille);

function modifieRegle(){
	var droite = document.getElementById("droite");
	if (droite.querySelector('#regle') != undefined){
		var regle = document.getElementById("regle");
		droite.removeChild(regle);
		document.getElementsByTagName("body")[0].appendChild(regle);
	}
}

function modifieRegleInverse(){
	var ligne = document.getElementById('ligneReponse');
	var droite = document.getElementById("droite");
	if (droite.querySelector('#regle') == undefined){
		var regle = document.getElementById("regle");
		document.getElementsByTagName("body")[0].removeChild(regle);
		droite.removeChild(ligne);
		droite.appendChild(regle);
		droite.appendChild(ligne);
	}
}

function modifieFooter(){
	var gauche = document.getElementById("gauche");
	if (gauche.getElementsByTagName('footer')[0] != undefined){
		var footer = document.getElementsByTagName("footer")[0];
		gauche.removeChild(footer);
		document.getElementsByTagName("body")[0].appendChild(footer);
	}
}

function modifieFooterInverse(){
	var gauche = document.getElementById("gauche");
	if (gauche.getElementsByTagName('footer')[0] == undefined){
		var footer = document.getElementsByTagName("footer")[0];
		document.getElementsByTagName("body")[0].removeChild(footer);
		gauche.appendChild(footer);
	}
}

function widthBack(){
	var back = document.getElementById('back');
	var tel = document.getElementById('iphone');
	back.style.width = tel.width * 0.9 + 'px';
}

function responsive(){
	if (document.getElementsByTagName('body')[0].offsetWidth < 800){
		modifieRegle();
		modifieFooter();
		widthBack();
		twitterTopRes();
	} else {
		modifieRegleInverse();
		modifieFooterInverse();
		twitterTop();
	}
}

function onResize(){
	responsive();
	ajusteTaille();
}

window.addEventListener('load', responsive);
window.onresize = onResize;

function majStorage(){
	if (num != storage.getItem('numero')){
		storage.clear();
		storage.setItem('numero', num);
		storage.setItem('batterie', 100);
	} else {
		document.getElementsByClassName('delivered')[0].getElementsByTagName('span')[0].textContent = storage.getItem('delivered1');
		if (storage.getItem('batterie') != 100 || storage.getItem('win') == 'true'){
			supInput();
			nb = parseInt(storage.getItem('nb'));
			var place = document.getElementById('fond');
			if (storage.getItem('win') != null){
				for (var i = 0; i < nb; i++){
					if (i == nb - 1 && storage.getItem('win') == 'true'){
						ajoutReponse(storage.getItem('rep' + i), '#56A526', i);
					} else {
						ajoutReponse(storage.getItem('rep' + i), '#D63232', i);
						ajoutPerte(storage.getItem('perte' + (i + 1)));
						if (i == storage.getItem('indice')){
							place.appendChild(indice());
						}
					}
				}
				if (storage.getItem('win') == 'true'){
					place.appendChild(felicitation());
					var delivered1 = delivered();
					delivered1.style.marginBottom = '3%';
					delivered1.getElementsByTagName('span')[0].textContent = storage.getItem('delivered2');
					place.appendChild(delivered1);
				} else {
					place.appendChild(lose());
					var delivered1 = delivered();
					delivered1.style.marginBottom = '5%';
					delivered1.getElementsByTagName('span')[0].textContent = storage.getItem('delivered2');
					place.appendChild(delivered1);
				}
			} else {
				for (var i = 0; i < nb; i++){
					ajoutReponse(storage.getItem('rep' + i), '#D63232', i);
					ajoutPerte(storage.getItem('perte' + (i + 1)));
					if (i + 1 == storage.getItem('indice')){
						place.appendChild(indice());
					}
				}
				ajoutInput();
			}
			var batterie = document.getElementById('batterie').getElementsByTagName('span')[0];
			batterie.textContent = storage.getItem('batterie');
			modifie_batterie(0);
		}
	}
}

window.addEventListener('load', majStorage);
window.addEventListener('load', donneFocus)