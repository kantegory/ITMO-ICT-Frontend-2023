const ROUTES = new Map();

const searchForm = document.getElementById("searchForm")
if (searchForm) {
    fillMap();
    const datalist = document.getElementById("datalistOptions");
    let str = "";
    const iteratorMap = ROUTES.keys();
    for (let i = 0; i < ROUTES.size; ++i) {
        str += '<option value="' + iteratorMap.next().value + '" />';
    }
    datalist.innerHTML = str;

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        search();
    })
}

const search = function () {
    const searchInput = document.getElementById("searchInput");
    if (ROUTES.has(searchInput.value)) {
        window.location.href = ROUTES.get(searchInput.value);
    } else {
        alert("Can not find this page")
    }
}

const clear = function () {
    const searchInput = document.getElementById("search-input");
    searchInput.clear();
}

function fillMap() {
    const routes = ["CCTV", "Door locks", "Lighting", "Temperature", "All services", "Home", "Account", "Auth"];
    const defaultPath = "../html/";
    for (let i = 0; i < routes.length; ++i) {
        ROUTES.set(routes[i], defaultPath + routes[i].toLowerCase().replaceAll(" ", "_") + ".html");
    }
}