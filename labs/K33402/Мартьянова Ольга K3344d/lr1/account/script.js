const logoutButton = document.getElementById("LogoutBtn");

logoutButton.addEventListener("click", function () {
  window.location.href = "/"
  setUserLoggedIn(false);
})

const editButton = document.createElement('button');
editButton.classList.add('btn');
editButton.classList.add('btn-custom');
editButton.id = 'editData';
editButton.textContent = 'Изменить данные'

const calcButton = document.createElement('button');
calcButton.classList.add('btn');
calcButton.classList.add('btn-custom');
calcButton.id = 'calcButton';
calcButton.textContent = 'Рассчитать норму калорий'

async function fetchData() {
  const fakeData = { id: 1, name: 'Ольга', email: '1@mail.ru', date_of_birth: new Date(2003, 6, 24), age: 20 };
  await new Promise(resolve => setTimeout(resolve, 1000));
  return fakeData;
}

function setUpData() {
  const data = fetchData();
  data.then((value) => {
    processData(value);
  })
}

function processData(data) {

  const container = document.getElementById('accountInfo');

  if (container) {
    container.innerHTML = '';

    const firstCard = document.createElement('div');
    firstCard.classList.add('card')
    firstCard.classList.add('account-card');

    const header = document.createElement('h5');
    header.textContent = 'Ваши данные';
    header.classList.add("card-header");

    const body = document.createElement('div');
    body.classList.add('account-card-body');

    const name = document.createElement('p');
    name.classList.add("card-text");
    name.textContent = `Имя: ${data.name}`;
    body.appendChild(name);

    const email = document.createElement('p');
    email.classList.add("card-text");
    email.textContent = `Email: ${data.email}`;
    body.appendChild(email);

    if (data.date_of_birth) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      var formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(data.date_of_birth);
    }

    const date = document.createElement('p');
    date.classList.add("card-text");
    date.textContent = `Дата рождения: ${(data.date_of_birth) ? formattedDate : '-'}`;
    body.appendChild(date);

    body.appendChild(editButton);

    firstCard.appendChild(header);
    firstCard.appendChild(body);

    const secondCard = document.createElement('div');
    secondCard.classList.add('card')
    secondCard.classList.add('account-card');

    const header2 = document.createElement('h5');
    header2.textContent = 'Ваши параметры';
    header2.classList.add("card-header");

    const body2 = document.createElement('div');
    body2.classList.add('account-card-body');

    const height = document.createElement('p');
    height.classList.add("card-text");
    height.textContent = `Рост: ${data.height ?? '-'}`;
    body2.appendChild(height);

    const weight = document.createElement('p');
    weight.classList.add("card-text");
    weight.textContent = `Вес: ${data.weight ?? '-'}`;
    body2.appendChild(weight);

    const age = document.createElement('p');
    age.classList.add("card-text");
    age.textContent = `Возраст: ${data.age}`;
    body2.appendChild(age);

    body2.appendChild(calcButton);

    secondCard.appendChild(header2);
    secondCard.appendChild(body2);

    container.appendChild(firstCard);
    container.appendChild(secondCard);
  }
}

setUpData()


const editModal = document.getElementById("editModal");
const closeEditModalBtn = document.getElementById("closeEditModalBtn");

function onEvent(event) {
  event.preventDefault();
  editModal.style.display = "none";
}

editButton.addEventListener("click", function () {
  editModal.style.display = "block";
  form = document.getElementById("edit-form")
  if (form) {
    addEventListener("submit", onEvent);
  }
});

closeEditModalBtn.addEventListener("click", function () {
  editModal.style.display = "none";
  form = document.getElementById("edit-form")
  if (form) {
    form.removeEventListener("submit", onEvent);
  }
});

window.addEventListener("click", function (event) {
  if (event.target == editModal) {
    editModal.style.display = "none";
    if (form) {
      form.removeEventListener("submit", onEvent);
    }
  }
});


const calcModal = document.getElementById("calcModal");

calcButton.addEventListener("click", function () {
  calcModal.style.display = "block";
});

window.addEventListener("click", function (event) {
  if (event.target == calcModal) {
    calcModal.style.display = "none";
  }
});


document.addEventListener("DOMContentLoaded", function () {

  const InputName = document.getElementById("InputName");
  const InputEmail = document.getElementById("InputEmail");
  const InputDateOfBirth = document.getElementById("InputDateOfBirth");
  const InputHeight = document.getElementById("InputHeight");
  const InputWeight = document.getElementById("InputWeight");
  const InputPassword1 = document.getElementById("InputPassword1");
  const InputPassword2 = document.getElementById("InputPassword2");

  fetchData().then((value) => {
    InputName.value = value.name;
    InputEmail.value = value.email;
    InputDateOfBirth.value = value.date_of_birth;
  });

});