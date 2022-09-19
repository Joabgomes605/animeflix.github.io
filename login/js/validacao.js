const campoEmail = document.querySelector("#email");
const campoSenha = document.querySelector("#senha");
const buttonSubmit = document.querySelector("#submit");

const errorMsg = document.querySelector(".msg")

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const emailValue = campoEmail.value;
    const senhaValue = campoSenha.value;

    const email = emailValue === "" || emailValue.indexOf('@')==-1 || emailValue.indexOf('.')==-1;

    if( email || senhaValue === ""){
         errorMsg.textContent = "Usuário(a) ou senha inválido(a)"
         errorMsg.classList = "error";
         setTimeout(() => {
            errorMsg.textContent = "";
            errorMsg.classList = "";
         },3000)
         return;
    }else{

    }  
});