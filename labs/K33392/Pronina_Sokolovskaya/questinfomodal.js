let button = document.getElementById('modalbtn1');

button.addEventListener("click", () => {
    let modal = document.getElementById("modal1");

    let span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
