const account_icon = document.getElementById("account_icon");


account_icon.addEventListener("click", () => {
    if (sessionStorage.getItem('status') != null) {
        window.location.href = "user_account.html";
    } else {
        openEnterModal();

        const submit_btn = document.getElementById("submit_btn");

        submit_btn.onclick = function () {

            closeModal('enter_modal')

            const code_input_modal = document.getElementById("code_input_modal");
            code_input_modal.style.display = "block";

            const span = document.getElementsByClassName("close close_code_input_modal")[0];

            span.onclick = function () {
                code_input_modal.style.display = "none";
            }

            window.onclick = function (event) {
                if (event.target === code_input_modal) {
                    code_input_modal.style.display = "none";
                }
            }

        }
    }

});


function openEnterModal() {
    const enter_modal = document.getElementById("enter_modal");

    const a = document.getElementsByClassName("close close_enter_modal")[0];

    enter_modal.style.display = "block";

    a.onclick = function () {
        enter_modal.style.display = "none";
    }

    enter_modal.onsubmit = e => e.preventDefault();

    window.onclick = function (event) {
        if (event.target === enter_modal) {
            enter_modal.style.display = "none";
        }
    }
}

function closeModal(name_modal) {
    const modal = document.getElementById(name_modal);

    modal.style.display = "none";
}


