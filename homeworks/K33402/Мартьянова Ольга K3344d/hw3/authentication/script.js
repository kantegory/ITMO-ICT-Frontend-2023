const enterForm = document.getElementById("entranceForm")

enterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(enterForm);
    const userData = {};

    formData.forEach((value, key) => {
        userData[key] = value;
    })

    axios.post('http://localhost:3000/login', userData, {
        headers: { 'Content-Type': 'application/json', },
    }).then(response => {
        if (response.status === 200) {
            setUserLoggedIn(true);
            localStorage.setItem('userToken', response.data.token)
            window.location.href = "../account/account.html";
        } else {
            console.log(response.status);
            alert("Authentication failed");
        }
    })
        .catch(error => {
            console.error("Error login user:", error);
            alert("Authentication failed");
        })


});