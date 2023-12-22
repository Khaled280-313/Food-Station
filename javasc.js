let btn = document.querySelector("#btn");

let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active1");
}

 let list = document.querySelectorAll('.item');
list.forEach(item => {
    item.addEventListener('click', function (event) {
        if (event.target.classList.contains('add')) {
            var itemNew = item.cloneNode(true)
            document.querySelector('.list-cart').appendChild(itemNew);
        }
        
    })

})
let iconCard = document.getElementById('icon-card');
let cart = document.getElementById('cart')
iconCard.onclick = function () {
    cart.classList.toggle("active2");
}
