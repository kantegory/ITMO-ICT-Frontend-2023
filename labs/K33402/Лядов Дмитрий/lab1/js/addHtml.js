const header = document.getElementById('header')
fetch('templates/header.html')
    .then(res => res.text())
    .then(data => {
        header.innerHTML = data
    })

const footer = document.getElementById('footer')
fetch('/templates/footer.html')
    .then(res => res.text())
    .then(data => {
        footer.innerHTML = data
    })
