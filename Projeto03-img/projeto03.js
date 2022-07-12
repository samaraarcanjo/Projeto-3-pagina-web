function login(evento){ 
	evento.preventDefault()
	var cx_email = document.getElementById("email");
	var dado_email = cx_email.value;

	var cx_senha = document.getElementById("passwd");
	var dado_senha = cx_senha.value;

	var usuario = "samaraarcanjo09@gmail.com";
	var senha = "S09arcanjo";

	if (dado_email == usuario && dado_senha == senha) {
		alert("Seja bem vindo!");
	}
	else{
		alert("Usuario ou senha invalidos!");

	}
}

const formElemento = document.querySelector("form")

formElemento.addEventListener("submit", login)
