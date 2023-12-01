const logoutButton = document.getElementById("LogoutBtn");

logoutButton.addEventListener("click", function () {
  window.location.href = "/";
  setUserLoggedIn(false);
  localStorage.removeItem('userToken');
})

async function fetchData() {
  try {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      const response = await axios.get('http://localhost:3000/users', {
        headers: { 'Authorization': `Bearer ${userToken}`, },
      });

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Unable to fetch data. Status^ ${response.status}`)
      }
    }
  } catch (error) {
    throw new Error(`Error to request API: ${error.message}`);
  }
}

function setUpData() {
  const data = fetchData();
  data.then((value) => {
    processData(value);
  })
}

function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();
  var age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function getContentHTML(data) {
  if (data.dateOfBirth) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date(data.dateOfBirth);
    var formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date);
    var age = calculateAge(date);
  }
  if (data.height && data.weight && data.dateOfBirth && data.gender) {
    var calorie_intake = calculateCalories(data);
  }
  const rations = getListHTML(data.daily_rations)
  return `
    <div class="card account-card">
      <h5 class="card-header">Info</h5>
      <dic class="account-card-body">
        <p class="card-text">
          Name: ${data.name}
        </p>
        <p class="card-text">
          Email: ${data.email}
        </p>
        <p class="card-text">
          Gender: ${data.gender ?? '-'}
        </p>
        <p class="card-text">
          Date of birth: ${(data.dateOfBirth) ? formattedDate : '-'}
        </p>
        <button class="btn btn-custom" id="editData" data-bs-toggle="modal" data-bs-target="#editModal">
          <svg class="icon">
            <use xlink:href="../svg/sprite.svg#editIcon">
            </use>
          </svg>
          Edit data
        </button>
      </div>
    </div>
    <div class="card account-card">
      <h5 class="card-header">Your parameters</h5>
      <div class="account-card-body">
        <p class="card-text">
          Height: ${(data.height !== "") ? data.height : '-'}
        </p>
        <p class="card-text">
          Weight: ${(data.weight !== "") ? data.weight : '-'}
        </p>
        <p class="card-text">
          Age: ${(data.dateOfBirth) ? age : '-'}
        </p >
        <p class="card-text">
          Calorie intake: ${(data.height !== "" && data.weight !== "" && data.dateOfBirth !== "" && data.gender) ? calorie_intake.toFixed(2) : '-'}
        </p >
      </div >
    </div >
    <ul class="list-group" id="DailyRations">
      <li class="list-group-item header-list-item">
          <h5 class="header">Daily rations</h5>
          <button class="btn add-btn" data-bs-toggle="modal" data-bs-target="#addRation">
            <svg class="icon">
              <use xlink:href="../svg/sprite.svg#addIcon">
              </use>
            </svg>
            Add ration
          </button>
          ${rations}
      </li>
    </ul>
  `
}

function processData(data) {
  const container = document.getElementById('accountInfo');
  container.innerHTML = getContentHTML(data);
}

setUpData()

document.addEventListener("DOMContentLoaded", function () {

  const InputName = document.getElementById("InputName");
  const InputHeight = document.getElementById("InputHeight");
  const InputWeight = document.getElementById("InputWeight");
  const InputDateOfBirth = document.getElementById("InputDateOfBirth");

  fetchData().then((value) => {
    InputName.value = value.name;
    InputHeight.value = value.height;
    InputWeight.value = value.weight;
    InputDateOfBirth.value = value.dateOfBirth;
  });

});


function calculateCalories(data) {

  const weight = data.weight;
  const height = data.height;
  const date = new Date(data.dateOfBirth)
  const age = calculateAge(date);
  const gender = data.gender;

  if (!weight || !height || !age || !gender) {
    message = `Please, enter more of your data for calculation`;
  }
  else if (gender === 'female') {
    const norm = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    return norm;
  } else if (gender === 'male') {
    const norm = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    return norm;
  }
  return;
}

function getListHTML(daily_rations) {
  var list = "";
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  daily_rations.forEach(ration => {
    const date = new Date(ration.date);
    var formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date);
    list += `<li class="list-group-item">
      Date: ${formattedDate}
      <ul>
        <li>Breakfast: ${ration.breakfast} kcal</li>
        <li>Lunch: ${ration.lunch} kcal</li>
        <li>Dinner: ${ration.dinner} kcal</li>
        <li>Snacks: ${ration.snacks} kcal</li>
      </ul>
      Total: ${(ration.breakfast + ration.lunch + ration.dinner + ration.snacks).toFixed(2)} kcal
    </li>
  `
  });
  return list;
}

const addForm = document.getElementById('addForm');

async function fetchDailyRations(query) {
  try {
    const response = await axios.get(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
      headers: {
        'X-Api-Key': 'yNHRx+yRMMHLnN907h/kNw==sYBu7FD1a0LtVn8P'
      }
    });
    if (response.status === 200) {
      const productData = response.data.items;
      return productData;
    } else {
      throw new Error(`Unable to fetch data. Status^ ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error to request API: ${error.message}`);
  }
}

addForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const formData = new FormData(addForm);
  const rationData = {};
  for (const pair of formData) {
    const key = pair[0];
    const value = pair[1];
    if (key !== "date") {
      let calories = 0;
      const data = await fetchDailyRations(value);
      data.forEach(item => {
        calories += item.calories;
      });
      rationData[key] = calories;
    } else {
      rationData[key] = value;
    }
  }
  try {
    const userToken = localStorage.getItem('userToken');
    const response = axios.post('http://localhost:3000/users/daily-rations', rationData, {
      headers: { 'Authorization': `Bearer ${userToken}`, },
    })
  } catch (error) {
    console.error(error);
  }
});

const editForm = document.getElementById("editForm");

editForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(editForm);
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

  if (!userData.name) {
    alert('Please fill reqiered information');
    return;
  }

  if (userData.password1 && userData.password1.length < 6) {
    alert('Password should be longer than 6 symbols');
    return;
  }

  if (userData.password1 != userData.password2) {
    alert("Passwords don't match");
    return;
  }

  userToken = localStorage.getItem("userToken");
  try {
    const response = axios.put('http://localhost:3000/users', userData, {
      headers: { 'Authorization': `Bearer ${userToken}`, },
    });
    location.reload();
  } catch (error) {
    console.error(error);
  }

})