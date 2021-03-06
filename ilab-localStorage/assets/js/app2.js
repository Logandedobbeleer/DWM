window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

var accueil = document.getElementById("accueil"),
		form = document.getElementById("form"),
		button = document.getElementById("button"),
		userName = document.getElementById("username"),
		createProfil = document.getElementsByTagName("button")[0];

//s'il y a quelque chose dans le local storage on l'affiche
if ( localStorage['user'] ) {
	accueil.classList.remove("new-user");
	accueil.classList.add("returning-user");
	accueil.innerHTML = "Welcome " +localStorage.getItem("user")+ "!";
}

//on place dans le localStorage la valeur du formulaire
//on lance la fonction quand on click valide le formulaire
function storeUser() {
	localStorage.setItem("user", userName.value);
	return false;
	form.classList.add("hide");
}
	
	
//apparition du input au click
createProfil.addEventListener("click", function(){
	button.classList.add("hide");
	form.classList.remove("hide");
});
	