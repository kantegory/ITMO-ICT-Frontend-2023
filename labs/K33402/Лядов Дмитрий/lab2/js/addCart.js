let ModalOrder = new bootstrap.Modal(document.getElementById("modal-order"))
var ModalCart = new bootstrap.Modal(document.getElementById("modal-cart"))
var cart = []
var currentProduct, currentprice, currentImg, currentProduct = []
localStorage.setItem('cart', JSON.stringify(cart))

function getCartProduct(product) {

    return `
    <div class="d-flex flex-row justify-content-evenly align-items-center cat-item">

              <img src="${product[2]}" class="cart-img">
              <div class="d-flex flex-column ">
                <h4>${product[0]}</h4>
                ${product[1]}
              </div>
            </div>
    `
}
function loadCart() {
    if(localStorage.getItem("cart")!='[]'){
        document.getElementById("cartContainer").innerHTML = ""
    products = JSON.parse(localStorage.getItem("cart"))
    console.log("parsed", products)
    for (product of products[0]) {
        // console.log("cicle",typeof product,product)
        document.getElementById("cartContainer").innerHTML += getCartProduct(product)
    }
    }
    
}
function OpenModal(name, price, imgSrc) {
    document.getElementById("addName").innerHTML = name
    ModalOrder.show()
    currentName = name
    currentprice = price
    currentImg = imgSrc
    product = [name, price, imgSrc]
    currentProduct.push(product)

}
function addProduct(event) {
    event.preventDefault()
    cart.push(currentProduct)
    localStorage.setItem("cart", JSON.stringify(cart))
    loadCart()
    // localStorage.setItem("cart",JSON.stringify())
    cart = []
    ModalOrder.hide()
}
async function MakeOrder(event) {
    event.preventDefault()


    if (localStorage.getItem("accessToken")) {
        var order = JSON.parse(localStorage.getItem("cart"))
        console.log(order[0])
        var user = localStorage.getItem("user")
        var profileUsername = JSON.parse(user).id
        console.log(profileUsername)
        var date = new Date()


        for(product of order[0]){
            console.log(product)
            responce = await fetch('http://localhost:3000/orders', {
            method: "POST",
            body: JSON.stringify({
                "name": product[0],
                "date": date.toDateString(),
                "price": product[1],
                "imgSrc": product[2],
                "username": profileUsername,


            }),
            headers: {
                'Content-Type': 'application/json'
            }
            })

        



        }}
    else {

        ModalCart.hide()
        new bootstrap.Modal(document.getElementById("modal-reg")).show()
    }
}


async function order(event) {


    window.location.href = "http://127.0.0.1:5500/profile.html"
}