async function fetchData() {
    const fakeData = [
        { id: 1, name: 'Яблоко', calories: 100, fats: 42, proteins: 12, carbohydrates: 12 },
        { id: 2, name: 'Молоко', calories: 200, fats: 52, proteins: 32, carbohydrates: 11 },
        { id: 3, name: 'Морковь', calories: 150, fats: 21, proteins: 2, carbohydrates: 34 },
        { id: 4, name: 'Говядина', calories: 300, fats: 32, proteins: 15, carbohydrates: 21 }
    ];
    await new Promise(resolve => setTimeout(resolve, 1000));
    return fakeData;
}

function setUpData() {
    const data = fetchData();
    data.then((value) => {
        processData(value)
    })
}

function processData(data) {

    const container = document.getElementById('productCards');

    if (container) {
        container.innerHTML = '';

        data.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card')

            const name = document.createElement('h5');
            name.textContent = product.name;
            name.classList.add("card-header");

            const body = document.createElement('div');
            body.classList.add('card-body');

            const calories = document.createElement('p');
            calories.classList.add("card-text");
            calories.textContent = `Калории(на 100гр): ${product.calories}`;
            body.appendChild(calories);

            const proteins = document.createElement('p');
            proteins.classList.add("card-text");
            proteins.textContent = `Белки: ${product.proteins}`;
            body.appendChild(proteins);

            const fats = document.createElement('p');
            fats.classList.add("card-text");
            fats.textContent = `Жиры: ${product.fats}`;
            body.appendChild(fats);

            const carbohydrates = document.createElement('p');
            carbohydrates.classList.add("card-text");
            carbohydrates.textContent = `Углеводы: ${product.carbohydrates}`;
            body.appendChild(carbohydrates);

            card.appendChild(name);
            card.appendChild(body);

            container.appendChild(card);
        });

    }
}
setUpData();


