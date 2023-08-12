const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    var usuarios = getData();
    
    if (usuarios.length == 0) {
        console.log("Não há cadastros no sistema.");
        return;
    }

    console.log("Cadastros no sistema:");
    var cpf = document.querySelector("#cpf");

    var identContainer = document.getElementById("consulta");
    identContainer.innerHTML = "";

    for (let i = 0; i < usuarios.length; i++){
        if (cpf.value == usuarios[i].cpfUser){
            var ident = document.createElement("div");
            ident.className = "identifica";

            var nome = document.createElement("p");
            nome.className = "usuario";
            nome.textContent = "Usuário: " + usuarios[i].usuario;

            var emailUser = document.createElement("p");
            emailUser.className = "emailUser";
            emailUser.textContent = "Email: " + usuarios[i].emailUser;

            var cpfUser = document.createElement("p");
            cpfUser.className = "cpfUser";
            cpfUser.textContent = "CPF: " + usuarios[i].cpfUser; // Corrigir a concatenação

            ident.appendChild(nome);
            ident.appendChild(emailUser);
            ident.appendChild(cpfUser);

            identContainer.appendChild(ident);

            console.log("Usuário:", usuarios[i].usuario);
            console.log("Email:", usuarios[i].emailUser);
            console.log("CPF:", usuarios[i].cpfUser);
            console.log("---------------------");
        }
    }
});

function getData(){
	if(localStorage.getItem('users') !== null){
		   var usuarios = JSON.parse(localStorage.getItem('users'));
		   return usuarios;
	}
}