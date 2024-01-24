function getOrderHtml({ name, date, price, imgSrc }) {
  return `
      <div class="d-flex flex-row border order-item">
          <img class="cart-img" src=${imgSrc}>
          <div class="d-flex flex-column order-text">
            <h3>${name}</h3>
            <br>
            Price is ${price}
            <br>
            
            
            Date of order: ${date}
            
          </div>
          
      </div>
      `;
}

async function loadOrders(orders) {
  var user = localStorage.getItem("user");
  var username = JSON.parse(user).id;
  // console.log("updating", username)
  // console.log(orders)
  orders.innerHTML = "";
  // console.log("success")
  let url = "http://localhost:3000/orders";
  url = `${url}?username=${username}`;

  const response = await fetch(url);

  const responseJson = await response.json();
  // console.log('response', responseJson)
  for (const service of responseJson) {
    // console.log(service)
    orders.innerHTML += getOrderHtml(service);
  }
}
