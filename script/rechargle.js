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

function firstMessage() {
	let message = document.createElement('div');
	message.className = 'delivered';
	message.style.display = 'flex';
	message.style.boxSizing = 'border-box';
	message.style.padding = '1%';
	message.style.alignItems = 'center';
	message.style.justifyContent = 'center';
	message.style.border = '2px solid black';
	message.style.borderRadius = '5px';
	message.style.marginTop = '2%';
	message.style.width = '43.5%';
	message.style.height = '80%';
	message.style.opacity = '90%';
	message.style.fontSize = 'max(0.5vw, 1.1vh)';
	message.style.textAlign = 'center';
	message.style.fontWeight = 'normal';
	message.style.backgroundColor = '#F9F7F1';
	message.textContent = "Hi ! Do u know who's that ? ⬇️⬇️";
	return message
}

const choseImg = function(nume){
	var place = document.getElementById('fond');
	
	var part = document.createElement('div');
	part.style.display = 'flex';
	part.style.height = '10%';
	part.style.marginTop = '1.5%';
	
	var divIcone = document.createElement('div');
	divIcone.style.height = '68.5%';
	divIcone.style.width = '10.85%';
	divIcone.style.margin = "0px 1% 0px 1%";
	var icone = document.createElement('img');
	icone.src = 'image/logor2.png';
	icone.alt = 'icone';
	icone.style.height = '100%';
	icone.style.width = '100%';
	divIcone.appendChild(icone);
	part.appendChild(divIcone);
	
	part.appendChild(firstMessage());

	var photo = document.createElement('img');
	photo.src = data[nume]['im1'];
	photo.alt = data[nume]['alt1'];
	photo.id = 'photo';
	photo.style.height = '100%';
	photo.style.width = 'auto';
	photo.style.opacity = '90%';
	photo.style.borderRadius = '10%';
	photo.style.marginLeft = '13%';
	var part2 = document.createElement('div');
	part2.style.height = '27.4%';
	
	place.appendChild(part);
	part2.appendChild(photo)
	place.appendChild(part2);
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
	delivered.style.backgroundColor = '#F9F7F1';
	var texte = document.createElement('div');
	texte.textContent = 'Delivered at ';
	var span = document.createElement('span');
	span.className = 'heureDelivered';
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
	if (localStorage.getItem('perte1') == null || document.getElementById('animMessage') == null){
		div.style.display = 'flex';
	}else{
		div.style.display = 'none';
	}
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
	div.style.backgroundColor = '#F9F7F1';
	
	input.id = 'reponse';
	input.placeholder = 'Type your answer ...';
	input.autocomplete = 'off';
	input.maxLength = '25';
	input.style.width = '90%';
	input.style.textAlign = 'center';
	input.style.backgroundColor = '#1fe0';
	input.style.border = '0px';
	input.style.fontSize = 'max(0.6vw, 1.2vh)';
	input.style.fontFamily = '"M PLUS 2", sans-serif;';
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
			setTimeout(() => {
				supAnimMessage();
				document.getElementById('goodRep').style.color = '#56A526';
				document.getElementById('felicitation').style.display = 'flex';
			}, 3000)
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
	div.style.backgroundColor = '#F9F7F1'
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
	div3.style.backgroundColor = '#F9F7F1';
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
	div.style.padding = '1%';
	div.style.overflow = 'hidden';
	div.style.backgroundColor = '#F9F7F1';
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
	
	var perte = Math.floor(Math.random() * 15) + 15;
	var div2 = document.createElement('div');
	div2.style.color = '#D63232';
	div2.style.display = 'none';
	div2.textContent = '-' + perte.toString() + '%';
	div2.style.fontSize = 'max(0.7vw, 1.3vh)';
	div2.style.margin = '0 6.5% 0 auto';
	div2.style.fontWeight = 'normal';
	div2.style.width = '20%';
	place.appendChild(div2);
	
	var batterie = document.getElementById('batterie');
	var val = batterie.getElementsByTagName('span');

	var rep2 = reponse();
	rep2.style.marginRight = '13%';
	rep2.style.marginTop = '4%';
	rep2.style.height = '6.25%'
	rep2.style.display = 'none';
	rep2.id = 'asup';

	if (parseInt(val[0].textContent) - perte <= 0){
		setTimeout(() => modifie_batterie(perte), 3000);
		place.appendChild(lose());
		storage.setItem('win', false);
		var delivered1 = delivered();
		delivered1.style.marginBottom = '5%';
		delivered1.style.display = 'none';
		place.appendChild(delivered1);
		setTimeout(() => {
			document.getElementById('messageLose').style.display = 'flex';
			div.style.color = '#D63232';
			div2.style.display = 'block';
			delivered1.style.display = 'flex';
			supAnimMessage();
			donneFocus();
		}, 3000)
	}else{
		if (parseInt(val[0].textContent) - perte <= 85 && document.getElementById("ligneLaugh") == null){
			setTimeout(() => modifie_batterie(perte), 3000);
			place.appendChild(messageLaugh());
			setTimeout(() => {
				document.getElementById('messageLaugh').style.display = 'flex';
				div.style.color = '#D63232';
				div2.style.display = 'block';
				rep2.style.display = 'block';
				supAnimMessage();
				donneFocus();
			}, 3000)
		}
		else if (parseInt(val[0].textContent) - perte <= 60 && document.getElementById("indice1") == null){
			setTimeout(() => modifie_batterie(perte), 3000);
			storage.setItem('indice', nb);
			place.appendChild(indice(data[num]['alt3'], 'indice1'));
			setTimeout(() => {
				supAnimMessage();
				div.style.color = '#D63232';
				div2.style.display = 'block';
				document.getElementById('indice1').style.display = 'flex';
				donneFocus();
			}, 3000)
		}else if (parseInt(val[0].textContent) - perte <= 30 && document.getElementById("indice2") == null){
			setTimeout(() => modifie_batterie(perte), 3000);
			storage.setItem('indice2', nb);
			place.appendChild(indice(data[num]['indice2'], 'indice2'));
			setTimeout(() => {
				supAnimMessage();
				div.style.color = '#D63232';
				div2.style.display = 'block';
				document.getElementById('indice2').style.display = 'flex';
				donneFocus();
			}, 3000)
		}else {
			modifie_batterie(perte);
			div.style.color = '#D63232';
			div2.style.display = 'block';
			rep2.style.display = 'flex';
		}
		
		place.appendChild(rep2);

		var div3 = document.createElement('div');
		div3.style.margin = '0 10% 0 auto';
		div3.style.height = '4.5%';
		div3.style.width = '10%';
		div3.style.position = 'relative';
		div3.style.zIndex = '2';
		div3.id = 'envoie';
		if(document.getElementById('animMessage') != null){
			div3.style.display = 'none';
		}
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

function messageLaugh() {
	var ligne = document.createElement('div');
	ligne.style.height = '10%';
	ligne.style.display = 'flex';
	ligne.style.position = 'relative';
	ligne.id = 'ligneLaugh';

	var divIcone = document.createElement('div');
	divIcone.style.height = '68.5%';
	divIcone.style.width = '10.85%';
	divIcone.style.margin = "0px 1% 0px 1%";
	var icone = document.createElement('img');
	icone.src = 'image/logor2.png';
	icone.alt = 'icone';
	icone.style.height = '100%';
	icone.style.width = '100%';
	divIcone.appendChild(icone);
	ligne.appendChild(divIcone);

	let message = document.createElement('div');
	message.id = 'messageLaugh';
	message.style.display = 'none';
	message.style.boxSizing = 'border-box';
	message.style.padding = '1%';
	message.style.alignItems = 'center';
	message.style.justifyContent = 'center';
	message.style.border = '2px solid black';
	message.style.borderRadius = '5px';
	message.style.width = '50%';
	message.style.height = '80%';
	message.style.opacity = '90%';
	message.style.fontSize = 'max(0.6vw, 1.3vh)';
	message.style.fontWeight = 'normal';
	message.style.backgroundColor = '#F9F7F1';
	message.textContent = "Ah Ah ! Not this one 😯";

	ligne.appendChild(message);
	ligne.appendChild(animMessage());
	return ligne
}

function indice(text, id){
	var ligne = document.createElement('div');
	ligne.style.height = '10%';
	ligne.style.display = 'flex';
	ligne.style.position = 'relative';

	var divIcone = document.createElement('div');
	divIcone.style.height = '68.5%';
	divIcone.style.width = '10.85%';
	divIcone.style.margin = "0px 1% 0px 1%";
	var icone = document.createElement('img');
	icone.src = 'image/logor2.png';
	icone.alt = 'icone';
	icone.style.height = '100%';
	icone.style.width = '100%';
	divIcone.appendChild(icone);
	ligne.appendChild(divIcone);

	var message = document.createElement('div');
	message.id = id;
	message.style.display = 'none';
	message.style.boxSizing = 'border-box';
	message.style.padding = '1%';
	message.style.alignItems = 'center';
	message.style.justifyContent = 'center';
	message.style.border = '2px solid black';
	message.style.borderRadius = '5px';
	message.style.width = '50%';
	message.style.height = '80%';
	message.style.opacity = '90%';
	message.style.fontSize = 'max(0.6vw, 1.3vh)';
	message.style.fontWeight = 'normal';
	message.style.backgroundColor = '#F9F7F1';
	message.textContent = text;
	ligne.appendChild(message);
	ligne.appendChild(animMessage());

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
		image.src = 'image/66.png';
	} else if (val[0].textContent <= 20){
		image.src = 'image/55.png';
	} else if (val[0].textContent <= 40){
		image.src = 'image/44.png';
	} else if (val[0].textContent <= 60){
		image.src = 'image/33.png';
	} else if (val[0].textContent <= 80){
		image.src = 'image/22.png';
	} 
	storage.setItem('batterie', parseInt(val[0].textContent));
}

function lose(){
	var ligne = document.createElement('div');
	ligne.id = 'lose';
	ligne.style.display = 'flex';
	ligne.style.position = 'relative';
	ligne.style.height = '27.4%';
	ligne.style.marginTop = '4%';

	var divIcone = document.createElement('div');
	divIcone.style.height = '25%';
	divIcone.style.width = '10.85%';
	divIcone.style.margin = "0px 1.5% 0px 1%"
	var icone = document.createElement('img');
	icone.src = 'image/logor2.png';
	icone.alt = 'icone';
	icone.style.height = '100%';
	icone.style.width = '100%';
	divIcone.appendChild(icone);
	ligne.appendChild(divIcone);
	
	var div = document.createElement('div');
	div.id = 'messageLose';
	div.style.display = 'none';
	div.style.alignItems = 'center';
	div.style.boxSizing = 'border-box';
	div.style.border = '2px solid black';
	div.style.borderRadius = '5px';
	div.style.height = '100%';
	div.style.width = '43.5%';
	div.style.opacity = '90%';
	div.style.fontSize = 'max(0.5vw, 1.3vh)';
	div.style.fontWeight = 'normal';
	div.style.textAlign = 'center';
	div.style.padding = '1%';
	div.style.backgroundColor = '#F9F7F1';
	
	var l1 = document.createElement('p');
	l1.textContent = "Oh no, your phone’s die 😢 ! Come back tomorrow to discover what was the answer of the day and try again !!";
	div.appendChild(l1);
	ligne.appendChild(div);
	

	var trouve = document.getElementById('nbechec');
	trouve.textContent = parseInt(trouve.textContent) + 1;
	if (storage.getItem('win') != 'false'){
		ajoutRate();
	}
	let waitMessage = animMessage();
	waitMessage.style.height = '24%';
	ligne.appendChild(waitMessage);
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
	div.id = 'goodRep';
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
	div.style.padding = '1%';
	div.style.overflow = 'hidden';
	div.style.backgroundColor = '#F9F7F1';
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
	ligne.style.position = 'relative';
	ligne.style.marginTop = '4%';

	var divIcone = document.createElement('div');
	divIcone.style.height = '25%';
	divIcone.style.width = '10.85%';
	divIcone.style.margin = "0px 1.5% 0px 1%"
	var icone = document.createElement('img');
	icone.src = 'image/logor2.png';
	icone.alt = 'icone';
	icone.style.height = '100%';
	icone.style.width =  '100%';
	divIcone.appendChild(icone);
	ligne.appendChild(divIcone);
	
	var div = document.createElement('div');
	div.id = 'felicitation';
	div.style.display = 'none';
	div.style.alignItems = 'center';
	div.style.boxSizing = 'border-box';
	div.style.border = '2px solid black';
	div.style.borderRadius = '5px';
	div.style.height = '100%';
	div.style.width = '43.5%';
	div.style.opacity = '90%';
	div.style.fontSize = 'max(0.45vw, 1.2vh)';
	div.style.fontWeight = 'normal';
	div.style.textAlign = 'center';
	div.style.padding = '1%';
	div.style.backgroundColor = '#F9F7F1';
	div.textContent = "Awesome, You’ve completed this Rechargle before the phone run’s out !! Come back tomorrow and discover a new image 😉";
	ligne.appendChild(div);
	let waitMessage = animMessage();
	waitMessage.style.height = '24%';
	ligne.appendChild(waitMessage);
	
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
	delivered1.style.display = 'none';
	setTimeout(() => {
		delivered1.style.display = 'flex';
	}, 3000);
	place.appendChild(delivered1);
	
	var trouve = document.getElementById('nbreussi');
	trouve.textContent = parseInt(trouve.textContent) + 1;
	ajout();
}

function animMessage() {
	var bloc = document.createElement('div');
	bloc.id = 'animMessage';
	bloc.style.height = '60%';
	bloc.style.width = '25%';
	bloc.style.backgroundColor = '#F9F7F1';
	bloc.style.position = 'absolute';
	bloc.style.top = '2%';
	bloc.style.borderRadius = '10%';
	bloc.style.border = '2px solid black';
	bloc.style.left = '13%';
	bloc.style.display = 'flex';
	bloc.style.justifyContent = 'center';
	bloc.style.alignItems = 'center';
	bloc.style.fontSize = 'min(0.7vw, 90%)';

	var span1 = document.createElement('span');
	span1.id = '1';
	span1.textContent = '⚫';
	span1.style.animation = 'wait1 1s infinite';
	var span2 = document.createElement('span');
	span2.id = '2';
	span2.style.opacity = '70%';
	span2.textContent = '⚫';
	span2.style.animation = 'wait2 1s infinite';
	var span3 = document.createElement('span');
	span3.id = '3';
	span3.style.opacity = '40%';
	span3.textContent = '⚫';
	span3.style.animation = 'wait3 1s infinite';
	bloc.appendChild(span1);
	bloc.appendChild(span2);
	bloc.appendChild(span3);

	return bloc
}

function supAnimMessage() {
	document.getElementById('animMessage').remove();
	if(document.getElementById('asup') != null){
		document.getElementById('asup').style.display = 'flex'; 
	}
	if (document.getElementById('envoie') != null){
		document.getElementById('envoie').style.display = 'block';
	}
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
		document.getElementsByClassName('heureDelivered')[0].textContent = storage.getItem('delivered1');
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
						if (i + 1 == storage.getItem('indice')){
							place.appendChild(indice(data[num]['alt3'], 'indice1'));
							supAnimMessage();
							document.getElementById('indice1').style.display = 'flex';
						} else if (i + 1 == storage.getItem('indice2')){
							place.appendChild(indice(data[num]['indice2'], 'indice2'));
							supAnimMessage();
							document.getElementById('indice2').style.display = 'flex';
						}
						if (i == 0){
							place.appendChild(messageLaugh())
							supAnimMessage();
							document.getElementById('messageLaugh').style.display = 'flex';
						}
					}
				}
				if (storage.getItem('win') == 'true'){
					place.appendChild(felicitation());
					document.getElementById('felicitation').style.display = 'flex';
					supAnimMessage();
					var delivered1 = delivered();
					delivered1.style.marginBottom = '3%';
					delivered1.getElementsByTagName('span')[0].textContent = storage.getItem('delivered2');
					place.appendChild(delivered1);
				} else {
					place.appendChild(lose());
					document.getElementById('messageLose').style.display = 'flex';
					supAnimMessage();
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
						place.appendChild(indice(data[num]['alt3'], 'indice1'));
						supAnimMessage();
						document.getElementById('indice1').style.display = 'flex';
					} else if (i + 1 == storage.getItem('indice2')){
						place.appendChild(indice(data[num]['indice2'], 'indice2'));
						supAnimMessage();
						document.getElementById('indice2').style.display = 'flex';
					}
					if (i == 0){
						place.appendChild(messageLaugh())
						supAnimMessage();
						document.getElementById('messageLaugh').style.display = 'flex';
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