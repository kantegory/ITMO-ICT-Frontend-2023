function getProduct({ name, price, imgSrc }) {
  return `
    
    <div class="d-flex flex-column align-items-center cat-item">
        <button onclick="OpenModal('${name}','${imgSrc}')" style="border: none;">
        <img src="${imgSrc}" class="cat-img">
        </button>
        <h4>${name}</h4>
        <div class="">
            ${price}
        </div>
        
    </div>
    `;
}
async function loadProducts(searchString = "", sex = "") {
  document.getElementById("productsContainer").innerHTML = "";
  let url = "http://localhost:3000/products?";

  if (sex == "boys") {
    url += `&sex=boys`;
  }
  if (sex == "girls") {
    url += `&sex=girls`;
  }
  if (sex == "acs") {
    url += `&sex=acs`;
  }
  url += `${searchString}`;
  const response = await fetch(url);

  const responseJson = await response.json();

  for (const product of responseJson) {
    document.getElementById("productsContainer").innerHTML +=
      getProduct(product);
    document.getElementsByClassName;
  }
}
