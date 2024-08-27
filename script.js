document.getElementById("name").addEventListener("input", function(){
    let nome = this.value;
    this.value = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
});
document.getElementById("sobrenome").addEventListener("input", function(){
    let nome = nome.charAt(0).toUpperCase() + nome.slice(1);
});
document.getElementById("email").addEventListener("input", function(){
    const email = this.value;
    const emailValidate =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMensage = document.getElementById("email-error");

    if (!emailValidate.test(email)) {
    errorMensage.textContent = "E-mail inválido. Por favor, insira um e-mail válido";
    errorMensage.style.display = "block"
    }
    else {
    errorMensage.textContent = "";
    errorMensage.style.siplay = "none";
    }
});
document.getElementById("numero").addEventListener("input", function(event) {
    let input = event.target;
    let inputValue = input.value.replace(/\D/g, '');

    if (inputValue.length > 11) {
        inputValue = inputValue.slice(0, 11);
    }
    let formattedInput = inputValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    input.value = formattedInput;
});
document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    document.getElementById("dt-nascimento").addEventListener("input", function(){
        const dtNascimento = this.value;
        const hoje = new Date();
        const dataNascimento = new Date(dtNascimento);
        const idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mes = hoje.getMonth() - dataNascimento.getMonth();
        if(mes < 0 || (mes === 0 && hoje.getDate()< dataNascimento.getDate())){
            idade - 1;
        }
        ErrorData = document.getElementById("error-dt-nascimento")
        if(idade < 10){
        ErrorData.textContent = "Você deve ter pelo menos 10 anos."
        ErrorData.style.display = "block";
        event.preventDefault();
        }
        else{
        dataError.textContent = "";
        dataError.style.display = "none";
        }
    });    
    CPF = document.getElementById("cpf").addEventListener("input", function(){
        CPF = CPF.replace(/\D/g, '');
        if(CPF.length !== 11 || /^(\d)\1{10}$/.test(CPF)){
            return false;
        }
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    senha = document.getElementsById("senha")[0].value;
    confirmarSenha = document.getElementsById("confirmar-senha")[0].value;
    if (senha !== confirmar - senha) {
        console.log("As senha são diferentes");
        alert("As senhas não concidem. Por favor, verifique.");
    }
});
