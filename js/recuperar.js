var cadastros = getData();

const btn = document.getElementById("btn");

btn.addEventListener("click", function (e){
    e.preventDefault();
    let conf = false;
    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;
    var confSenha = document.querySelector("#confSenha").value;

    for (let i = 0; i < cadastros.length; i++){
        if ((email == cadastros[i].emailUser)){
            if ((senha == confSenha)){
                conf = true;
                cadastros[i].senhaUser = senha;
                init(cadastros);
                cadastros = getData();
                alert("Senha editada com sucesso");
                break;
            }
            else{
                alert("As senhas não considem uma com a outra");
                break;
            }
        }
        if ((i == cadastros.length-1) && conf == false){
            alert("Usuario com email não encontrado");
            break;
        }
    }
});

function init(cadastros){
	localStorage.setItem('users',JSON.stringify(cadastros));
}
   
function getData(){
	if(localStorage.getItem('users') !== null){
		   var usuarios = JSON.parse(localStorage.getItem('users'));
		   return usuarios;
	}
}