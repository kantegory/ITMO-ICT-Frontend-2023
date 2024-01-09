allCards = []
function getCardHtml({ Head, Text, imgSrc, }) {
    // console.log(typeof Head,Head)
    func = "order("+Head+")"
    // console.log(func)
    return `
    <div class="d-flex flex-row border service-item">
        <img class="service-img" src=${imgSrc}>
        <div class="d-flex flex-column service-text">
          <h3>${Head}</h3>
          <br>
          ${Text}
          
          <button class="orderbutton" data-bs-toggle="modal" data-bs-target="#modal-order">purchase</button>
        </div>
        
    </div>
    `
  }
async function loadServices(searchString = "") {
  
    document.getElementById("ServiceContainer").innerHTML = ""
    
    let url = "http://localhost:3000/services"


    url = `${url}?${searchString}`

    const response = await fetch(url)

    const responseJson = await response.json()

    // console.log('response', responseJson)
    for (const service of responseJson){
      allCards.push(service)
    }
    for (const service of responseJson) {

      document.getElementById("ServiceContainer").innerHTML += getCardHtml(service)
      document.getElementsByClassName
    }
    
  

      
}