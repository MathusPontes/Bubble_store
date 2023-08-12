var cadastros = JSON.parse(localStorage.getItem('users'));

const btn = document.getElementById("btn");

btn.addEventListener("click", function (e){
    e.preventDefault();
    let conf = false;
    var usuario = document.querySelector("#usuario").value;
    var senha = document.querySelector("#senha").value;
    for (let i = 0; i < cadastros.length; i++){
        if ((usuario == cadastros[i].usuario) && (senha == cadastros[i].senhaUser)){
            conf = true;
            alert("Login realizado com sucesso");
            break;
        }
        if ((i == cadastros.length-1) && conf == false){
            alert("Usuario ou senha incorretos");
            break;
        }
    }
});