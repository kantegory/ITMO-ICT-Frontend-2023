async function getUser() {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
        try {
            const response = await axios.get('http://localhost:3000/users', {
                headers: { 'Authorization': `Bearer ${userToken}`, },
            });
            if (response.status === 200) {
                return response.data;
            } else {
                console.log(response.data);
                alert("Error to get user");
                return;
            }
        } catch (error) {
            console.error(error);
            return;
        }
    }
}

async function getFavorites() {
    const user = await getUser();
    return user.favorites;
}

function search(event) {
    event.preventDefault();
    const productName = event.target.querySelector('input').value;
    loadProduct(productName);
}

function loadProduct(productName) {
    const data = fetchDataOne(productName);
    data.then((value) => {
        processData(value);
    })
}

async function fetchData(productNames) {
    try {
        let query = productNames.join(' ');
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

async function fetchDataOne(productName) {
    return fetchData([productName]);
}

function setUpData() {
    const favorites = getFavorites();
    favorites.then((value) => {
        if (value) {
            const data = fetchData(value);
            data.then((data) => {
                processData(data)
            })
        } else {
            const container = document.getElementById('productCards');
            if (container) {
                container.innerHTML = `<div class="card card-body">
                                      <p class="card-text">Add products to favorites to see them here</p>
                                   </div>`
            }
        }

    })

}

function capitalizeFLetter(string) {
    return string[0].toUpperCase() +
        string.slice(1);
}

async function getCardHtml(product) {
    let button = "";
    const user = await getUser();
    if (user) {
        const favorites = user.favorites;
        if (favorites && favorites.includes(product.name)) {
            button += `<label for="RemoveBtn" class="form-label"></label>
            <input class="btn btn-custom remove-btn" onclick="removeFromFavorites('${product.name}')" value="Remove from favorites">`;
        } else {
            button += `<label for="AddBtn" class="form-label"></label>
            <input class="btn btn-custom add-btn" onclick="addToFavorites('${product.name}')" value="AddBtn">`;
        }
    }
    console.log(button);
    return `
        <div class="card">
            <h4 class="card-header">${capitalizeFLetter(product.name)}</h4>
            <div class="card-body">
                <div class="card-body-text">
                    <p class="card-text">
                        Calorie content(for 100gr): ${product.calories}
                    </p>
                    <p class="card-text">
                        Proteins: ${product.protein_g}
                    </p>
                    <p class="card-text">
                        Fats: ${product.fat_total_g}
                    </p>
                    <p class="card-text">
                        Carbohydrates: ${product.carbohydrates_total_g}
                    </p>
                </div>
                <div>${button}</div>
            </div>
        </div>
    `

}


async function processData(data) {
    const container = document.getElementById('productCards');
    if (container) {
        container.innerHTML = "";
        for (const product of data) {
            container.innerHTML += await getCardHtml(product);
        }
    }
}

setUpData();

async function addToFavorites(productName) {
    const userToken = localStorage.getItem('userToken');
    const req = { "productName": productName };
    await axios.post('http://localhost:3000/users/favorites', req,
        { headers: { 'Authorization': `Bearer ${userToken}`, } })
    location.reload();
}

async function removeFromFavorites(productName) {
    const userToken = localStorage.getItem('userToken');
    const req = { "productName": productName };
    await axios.delete('http://localhost:3000/users/favorites', {
        headers: { 'Authorization': `Bearer ${userToken}`, }, data: req
    },);
    location.reload();
}



function filterData(data, key, minValue, maxValue) {
    return data.filter(obj => {
        const value = obj[key];
        return value >= minValue && value <= maxValue;
    })

}

const minInputPr = document.getElementById('minValuePr');
const maxInputPr = document.getElementById('maxValuePr');
const filterButtonPr = document.getElementById('filterDataPr');

filterButtonPr.addEventListener('click', function () {
    const parseMin = parseInt(minInputPr.value);
    const parseMax = parseInt(maxInputPr.value);

    const minValue = (parseMin) ? parseMin : 0;
    const maxValue = (parseMax) ? parseMax : 10000;

    const favorites = getFavorites();
    favorites.then(value => {
        const data = fetchData(value);
        data.then(data => {
            filterObj = filterData(data, "protein_g", minValue, maxValue);
            processData(filterObj);
        });
    });
});

const minInputCal = document.getElementById('minValueCal');
const maxInputCal = document.getElementById('maxValueCal');
const filterButtonCal = document.getElementById('filterDataCal');

filterButtonCal.addEventListener('click', function () {
    const parseMin = parseInt(minInputCal.value);
    const parseMax = parseInt(maxInputCal.value);

    const minValue = (parseMin) ? parseMin : 0;
    const maxValue = (parseMax) ? parseMax : 10000;

    const favorites = getFavorites();
    favorites.then(value => {
        const data = fetchData(value);
        data.then(data => {

            filterObj = filterData(data, "calories", minValue, maxValue);
            processData(filterObj);
        });
    });
});

const minInputFats = document.getElementById('minValueFats');
const maxInputFats = document.getElementById('maxValueFats');
const filterButtonFats = document.getElementById('filterDataFats');

filterButtonFats.addEventListener('click', function () {
    const parseMin = parseInt(minInputFats.value);
    const parseMax = parseInt(maxInputFats.value);

    const minValue = (parseMin) ? parseMin : 0;
    const maxValue = (parseMax) ? parseMax : 10000;

    const favorites = getFavorites();
    favorites.then(value => {
        const data = fetchData(value);
        data.then(data => {
            filterObj = filterData(data, "fat_total_g", minValue, maxValue);
            processData(filterObj);
        });
    });
});

const minInputCar = document.getElementById('minValueCar');
const maxInputCar = document.getElementById('maxValueCar');
const filterButtonCar = document.getElementById('filterDataCar');


filterButtonCar.addEventListener('click', function () {
    const parseMin = parseInt(minInputCar.value);
    const parseMax = parseInt(maxInputCar.value);

    const minValue = (parseMin) ? parseMin : 0;
    const maxValue = (parseMax) ? parseMax : 10000;

    const favorites = getFavorites();
    favorites.then(value => {
        const data = fetchData(value);
        data.then(data => {
            filterObj = filterData(data, "carbohydrates_total_g", minValue, maxValue);
            processData(filterObj);
        });
    });
});