const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const userData = {};
    formData.forEach((value, key) => {
        if (key === 'height' || key === 'weight') {
            if (typeof value === 'string') {
                userData[key] = parseFloat(value);
            } else {
                alert('Please enter numeric value for "${key}"');
                return;
            }
        } else if (key === 'dateOfBirth') {
            if (typeof value === 'string') {
                userData[key] = value;
            } else {
                alert('Please enter correct date of birth');
                return;
            }
        }
        userData[key] = value;
    });
    if (!userData.name || !userData.email || !userData.password1 || !userData.password2) {
        alert('Please fill reqiered information');
        return;
    }
    if (userData.password1.length < 6) {
        alert('Password should be longer than 6 symbols');
        return;
    }
    if (userData.password1 != userData.password2) {
        alert("Passwords don't match");
        return;
    }
    axios.post('http://localhost:3000/users', userData, {
        headers: { 'Content-Type': 'application/json', },
    })
        .then(response => {
            if (response.status === 200) {
                setUserLoggedIn(true);
                localStorage.setItem('userToken', response.data.token);
                window.location.href = "../account/account.html";
            } else {
                console.log(response.status);
                alert("Registration failed");
            }
        })
        .catch(error => {
            console.error('Error login user:', error);
            alert("Registration failed");
        })
});

