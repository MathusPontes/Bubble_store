document.getElementById("comment-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var comment = document.getElementById("content-input").value;

    if (comment !== "") {
        var commentItem = document.createElement("div");
        commentItem.className = "comentario__itens";

        var commentName = document.createElement("h3");
        commentName.className = "corpo__post__comentarios__itens__nome";
        commentName.textContent = "@Usuário";

        var commentDescription = document.createElement("p");
        commentDescription.className = "corpo__post__comentarios__itens__descricao";
        commentDescription.textContent = comment;
        commentItem.appendChild(commentName);
        commentItem.appendChild(commentDescription);

        var commentsContainer = document.getElementById("comments-container");
        commentsContainer.appendChild(commentItem);
        document.getElementById("content-input").value = "";
    }
});