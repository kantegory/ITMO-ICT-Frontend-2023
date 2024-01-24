function getProduct({ name, price, sale, imgSrc }) {
    return `
    
    <div class="d-flex flex-column align-items-center cat-item">
        <button onclick="OpenModal('${name}','${price}','${imgSrc}')" style="border: none;">
        <img src="${imgSrc}" class="cat-img">
        </button>
        <h4>${name}</h4>
        <div class="">
            ${price}
            <div style="text-decoration: line-through;">${sale}</div>
        </div>
        
    </div>
    `
}
async function loadProducts(searchString = ""){
    document.getElementById("productsContainer").innerHTML = ""
    
    let url = "http://localhost:3000/products"

    url = `${url}?${searchString}`

    const response = await fetch(url)

    const responseJson = await response.json()

    for (const product of responseJson) {

      document.getElementById("productsContainer").innerHTML += getProduct(product)
      document.getElementsByClassName
    }
}
async function loadSales(searchString = ""){
    document.getElementById("salesContainer").innerHTML = ""
    
    let url = "http://localhost:3000/products?isOnSale=yes"

    url = `${url}&${searchString}`

    const response = await fetch(url)
    
    const responseJson = await response.json()
    for (const product of responseJson) {

      document.getElementById("salesContainer").innerHTML += getProduct(product)
      document.getElementsByClassName
    }
}


