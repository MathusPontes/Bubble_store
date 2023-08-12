var cadastros = getData();

const btn = document.getElementById("btn");

btn.addEventListener("click", function (e){
    e.preventDefault();
    let conf = false;
    var email = document.querySelector("#email").value;
    var usuario = document.querySelector("#usuario").value;
    var confUsuario = document.querySelector("#confUsuario").value;

    for (let i = 0; i < cadastros.length; i++){
        if ((email == cadastros[i].emailUser)){
            if ((usuario == confUsuario)){
                conf = true;
                cadastros[i].usuario = usuario;
                init(cadastros);
                cadastros = getData();
                alert("Usuario editado com sucesso");
                break;
            }
            else{
                alert("Os usuarios não considem um com o outro");
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