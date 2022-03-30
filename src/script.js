function mudaTemas() {
	document.body.classList.toggle("light");
	var botao = document.querySelector("#botaoTema");
	if (botao.textContent == "Modo Dark") {
		botao.textContent = "Modo Light";
	} else {
		botao.textContent = "Modo Dark";
	}
}
