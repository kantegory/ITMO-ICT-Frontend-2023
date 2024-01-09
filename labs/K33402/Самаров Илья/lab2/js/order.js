async function order(event) {
    event.preventDefault()
    // alert("ok")
    const Head = document.getElementById("inputGroupSelect01").value
    const date = document.getElementById("startDate").value
    const type = document.getElementById("comType").value
    var user = localStorage.getItem("user")
    var profileUsername = JSON.parse(user).id
    console.log(profileUsername)
    const response = await fetch('http://localhost:3000/orders', {
        method: "POST",
        body: JSON.stringify({
            "Head": Head,
            "date": date,
            "type": type,
            "username": profileUsername,


        }),
        headers: {
            'Content-Type': 'application/json'
        }

    })
    window.location.href = "http://127.0.0.1:5500/profile.html"
}