var user = localStorage.getItem("user")
console.log(user)
var profileUsername = JSON.parse(user).id
console.log(profileUsername)
const body = document.getElementById("Welcome")
body.innerHTML = "Welcome, " + profileUsername + "!<br>"
allCards = []
let imgSrc
function getOrderHtml({ Head, date, type },imgSrc) {
  
  return `
    <div class="d-flex flex-row border service-item">
        <img class="service-img" src=${imgSrc}>
        <div class="d-flex flex-column service-text">
          <h3>${Head}</h3>
          <br>
          I will contacy you ${date}
          <br>
          via 
          
          ${type}
          
        </div>
        
    </div>
    `
}
async function loadOrders(username, orders) {
  console.log("updating", username)
  console.log(orders)
  orders.innerHTML = ""
  console.log("success")
  let url = "http://localhost:3000/orders"
  url = `${url}?username=${username}`


  const response = await fetch(url)

  const responseJson = await response.json()

  console.log('response', responseJson)
  for (const service of responseJson) {
    allCards.push(service)
  }
  for (const service of responseJson) {
    console.log()
    switch (Object.getOwnPropertyDescriptor(service,"Head").value) {
      case "Website development":
        imgSrc = "img/webdev.jpg"
        console.log(imgSrc)
        break
      case "Corporate website":
        imgSrc = "img/corpdev.png"
        console.log(imgSrc)
        break
      case "Fixed price website":
        imgSrc = "img/fixprice.png"
        console.log(imgSrc)
        break
      case "Web Design":
        imgSrc = "img/design.jpg"
        console.log(imgSrc)
        break
      case "Mobile app design":
        imgSrc = "img/mobiledev.png"
        console.log(imgSrc)
        break
      case "Brand Identity":
        imgSrc = "img/brandident.jpg"
        console.log(imgSrc)
        break
      case "Tech SEO":
        imgSrc = "img/seo1.png"
        console.log(imgSrc)
        break
      case "On-page SEO":
        imgSrc = "img/seo0.jpg"
        console.log(imgSrc)
        break
      case "Off-page SEO":
        imgSrc = "img/seo2.jpg"
        console.log(imgSrc)
        break
      console.log(imgSrc)
    }
    document.getElementById("Orders").innerHTML += getOrderHtml(service,imgSrc)
  }



}
// document.addEventListener('DOMContentLoaded', () => {
//   loadOrders(profileUsername)
//   })
