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
    errorMensage.style.display = "none";
    }
});
document.getElementById("numero").addEventListener("input", function() {
    let input = event.target;
    let inputValue = input.value.replace(/\D/g, '');

    if (inputValue.length > 11) {
        inputValue = inputValue.slice(0, 11);
    }
    let formattedInput = inputValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    input.value = formattedInput;
});
document.getElementById("dt-nascimento").addEventListener("input", function(){
    const dtNascimento = this.value;
    const hoje = new Date();
    const dataNascimento = new Date(dtNascimento);
    const idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    if(mes < 0 || (mes === 0 && hoje.getDate()< dataNascimento.getDate())){
        idade -= 1;
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

function validarCPF(cpf1) {
    cpf1 = cpf1.replace(/\D/g, '');

    if (cpf1.length !== 11 || /^(\d)\1{10}$/.test(cpf1)) {
        return false;
    }
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf1.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf1.charAt(9))) return false;
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf1.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf1.charAt(10))) return false;

    return true;
};
document.getElementById("cpf").addEventListener("input", function(){
    const CPF = this.value;
    const errorCpf = document.getElementById("error-cpf");
    if(!validarCPF(CPF)){
        errorCpf.textContent = "Por favor insira um CPF válido";
        errorCpf.style.display = "block";
    }
    else{
        errorCpf.textContent = "";
        errorCpf.style.display = "none";
    }
});
document.getElementById("senha").addEventListener("input", function(){
    const senha1 = this.value;
    const errorSenha = document.getElementById("error-senha");
    if (senha1.length < 6 || !/[A-Z]/.test(senha1) || !/[!@#$%^&*(),.?":{}|<>]/.test(senha1)) {
        errorSenha.textContent = "A senha deve ter pelo menos 6 caracteres, conter pelo menos uma letra maiúscula e um caractere especial.";
        errorSenha.style.display = "block";
    } else {
        errorSenha.textContent = "";
        errorSenha.style.display = "none";
    }
});
document.getElementById("confirmar-senha").addEventListener("input", function(){
    const confirmarSenha = this.value;
    const senha1 = document.getElementById("senha").value;
    const errorConfirmarSenha = document.getElementById("error-confirmar-senha")
    if(senha1 !== confirmarSenha){
        errorConfirmarSenha.textContent = "As senha devem coincidir";
        errorConfirmarSenha.style.display = "block";
    }else{
        errorConfirmarSenha.textContent = "";
        errorConfirmarSenha.style.display = "none";
    }
});
document.getElementById("btn-cadastrar").addEventListener("click", function(){
    document.getElementById("cadastroForm").submit();
});
document.getElementById("cadastroForm").addEventListener("submit", function(event){
    
});
