setInterval(function() {
	// Générer le contenu d'une notification, et l'afficher
	var allText = ["JE SUIS INARRÊTABLE","Pense à check le GitHub aussi","Met une étoile au repo aussi ! (même si il est pas ... JOKE CANCELED)","Made by el stickmano","Tu veux savoir mon nom ?","Moi j'suis inarrêtable, eh ouais mon pote","tant que j'y suis, change pour chromebook","j'me présente, je m'appelle, bah pas henry :)","OSE M'ARRÊTER, TU SUBIRAS DE LOURDE CONSÉQUENCE. (oui c'est une menace)", "T'aimes bien la musique en fond ?"]
	var text = allText[Math.floor(Math.random() * allText.length)]

	self.registration.showNotification("L'inarrêtable te parle !", {
		body: text,
		vibrate: [5000, 1000, 2000, 1000, 2000, 9000, 1, 1, 1, 1, 1, 1, 50000],
	})
}, 500)
