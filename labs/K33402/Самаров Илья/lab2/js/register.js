
async function register(event) {
  event.preventDefault()

  const inputs = Array.from(event.target.querySelectorAll('input'))
  const loginData = {}

  for (const input of inputs) {
    loginData[input.name] = input.value
  }

  console.log('login data', loginData)

  const response = await fetch('http://localhost:3000/users', {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  window.location.href = "http://127.0.0.1:5500/services.html"
  
}
