const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.onclick= function(){
    container.classList.add("active");
}
loginBtn.onclick= function(){
    container.classList.remove("active");
}


