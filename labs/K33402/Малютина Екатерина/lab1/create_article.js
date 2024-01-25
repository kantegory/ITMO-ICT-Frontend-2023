const titleField = document.getElementById('title');
const textField = document.getElementById('text');
if (titleField && textField) {
    const btnCreate = document.getElementById('btnCreate');
    btnCreate.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('number');
        let number = localStorage.getItem('numberOfArticles');
        console.log(number);
        if (number == null) {
            console.log('0 here');
            number = '0';
        }
        number = parseInt(number, 10);
        number += 1;
        number = number.toString(10);
        console.log(number);
        localStorage.setItem(number+'title', titleField.value);
        localStorage.setItem(number+'text', textField.value);
        localStorage.setItem(number+'nickName', localStorage.getItem('nickName'));
        localStorage.setItem('numberOfArticles', number);
        window.location.href = 'index.html';
    });
}