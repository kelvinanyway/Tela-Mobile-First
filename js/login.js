document.addEventListener("DOMcontentloaded", function(){
const userInput = document.getElementById("user"); 
const passwordInput = document.getElementById("password")
const defaultUser = "admin";
const defaultPassword ="admin";
const login = document.getElementById("loginButton");
login.addEventListener("click", function(){
        if(userInput.value.trim ()!== "" && passwordInput.value.trim() !== ""){
            if(userInput.value = defaultUser && passwordInput.value == defaultPassword) {
             window.location.href = "../Page/telaPokemon.html"
         }else{
            alert( "Usuario ou senha incorreta!");
         }
         
        }else{
               alert("Preencha todos os campos!");
         }
});

});