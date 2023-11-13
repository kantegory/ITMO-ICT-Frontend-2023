const btn = document.getElementById("submit_code_btn");


btn.onclick = function() {
    const modal = document.getElementById("code_input_modal");

    modal.style.display = "none";


    sessionStorage.setItem('status', 'loggedIn')

    window.location.href = "user_account.html";

}

