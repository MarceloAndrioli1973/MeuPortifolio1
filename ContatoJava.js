function btn_form() {
    var nome = document.getElementById("nome").value;
    var nascimento = document.getElementById("nascimento").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;

    if (nome == "" || nascimento == "" || telefone == "" || email == "" || cpf == "") {
        alert("Preencha todos os campos.")
    }
    else {
        alert(" Formulário enviado. Retorno o mais breve possível")

        document.getElementById("nome").value = "";
        document.getElementById("nascimento").value = "";
        document.getElementById("telefone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("cpf").value = "";
    };
};

function btn_reset() {
    document.getElementById("nome").value = "";
    document.getElementById("nascimento").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cpf").value = "";
};