let cadastros = [
    {
        usuario: "teste",
        emailUser: "teste@gmail.com",
        senhaUser: "123",
        cpfUser: "1234567890"
    }
]

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (e){
    e.preventDefault();

    var nomeUsuario = document.querySelector("#cadastrar__usuario").value;
    var email = document.querySelector("#cadastrar__email").value;
    var senha = document.querySelector("#cadastrar__senha").value;
    var confirmaSenha = document.querySelector("#confirma__senha").value;
    var cpf = document.querySelector("#cadastrar__cpf").value;
	init(cadastros);
	let conf = false;

    if (senha === confirmaSenha){
		var usuarios = getData();
        if (validarCPF(cpf)){
			for (let i = 0; i < usuarios.length; i++){
				if (nomeUsuario == usuarios[i].usuario){
					alert("Nome de usuario já existente");
					break;
				}
				if (cpf == usuarios[i].cpfUser){
					alert("CPF de usuario já existente no sistema");
					break;
				}
				if (email == usuarios[i].emailUser){
					alert("Email de usuario já existente no sistema");
					break;
				}
			}
            cadastros.push({usuario: nomeUsuario, emailUser: email, senhaUser: senha, cpfUser: cpf});
			init(cadastros);
        }
        else{
            alert("O CPF digitado não é valido");
        }
    }
    else{
        alert("As duas senhas não são iguais, gentileza informar as senhas corretamente");
    }
	init(cadastros);
	alert("Usuario cadastrado com sucesso, clique no icone da sacola para realizar o login");
});

function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}

function init(cadastros){
	localStorage.setItem('users',JSON.stringify(cadastros));
}
   
function getData(){
	if(localStorage.getItem('users') !== null){
		   var usuarios = JSON.parse(localStorage.getItem('users'));
		   return usuarios;
	}
}