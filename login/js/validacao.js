const campoEmail = document.querySelector("#email");
const campoSenha = document.querySelector("#senha");
const buttonSubmit = document.querySelector("#submit");

const errorMsg = document.querySelector(".msg");
const msgSucesso = document.querySelector(".sucesso");

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const emailValue = campoEmail.value;
    const senhaValue = campoSenha.value;

    const email = emailValue === "" || emailValue.indexOf('@')==-1 || emailValue.indexOf('.')==-1;

    if( email || senhaValue === ""){
         errorMsg.textContent = "Usuário(a) ou senha inválido(a)"
         errorMsg.classList = "error";
         campoEmail.style.border = "2px solid #DD1918"
         campoSenha.style.border = "2px solid #DD1918"
         return;
    }else{
        msgSucesso.style.display = "flex"
        campoEmail.style.border = "2px solid #00ff99";
        campoSenha.style.border = "2px solid #00ff99";
        msgSucesso.textContent = "Logado com sucesso 😊";
        msgSucesso.classList = "sucesso"
        alert("Olá! Bem vindo de volta.");
        setTimeout(()=>{
            window.location.href = "../homepage/index.html"
        },2000);
    }  
});