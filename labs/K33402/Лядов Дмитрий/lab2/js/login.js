var modalLogin = new bootstrap.Modal(document.getElementById("modal-reg"))
function openLogin(){
  modalLogin.show()
}
async function login(event) {
    event.preventDefault()
    let reload = true
    const inputs = Array.from(event.target.querySelectorAll('input'))
    const loginData = {}
  
    for (const input of inputs) {
      loginData[input.name] = input.value
    }
  
  
  
    const response = await fetch('http://localhost:3000/login', {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const responseJson = await response.json()
  
    const { accessToken, user } = responseJson
  
    console.log('response', responseJson)
    if (responseJson == "Cannot find user") {
      alert("User not found")
      reload = false
    }
    else {
      if (responseJson == "Incorrect password") {
        alert("password is incorrect")
        reload = false
      }
    }
    if (reload) {
      reload = true
      localStorage.accessToken = accessToken
      localStorage.user = JSON.stringify(user)
      document.getElementById("header").innerHTML = addProfile()
      modalLogin.hide()
      
    }
  }
  function logout(){
    localStorage.clear()
    fetch('/templates/header.html')
        .then(res => res.text())
        .then(data => {
          document.getElementById("header").innerHTML = data
        })
  }