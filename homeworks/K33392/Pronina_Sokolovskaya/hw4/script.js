const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links");
const userAccountLink = document.querySelector(".link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  userAccountLink.classList.toggle("active");
});



document.querySelector('#search-input').addEventListener('input', filterList);

function filterList() {

  const searchInput = document.querySelector('#search-input');
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll('.quest-card');


  listItems.forEach((item) => {
    if (item.classList.contains('hidden_by_filter')) {
      return;
    }

    let content = item.querySelector(".quest-content");
    let name = content.querySelector("h6").textContent;
    let description = content.querySelector(".quest_description").textContent;
    // console.log(description);

    if (name.toLowerCase().includes(filter) || description.toLowerCase().includes(filter)) {
      if (item.classList.contains('hidden_by_search')) {
        item.classList.remove('hidden_by_search');
      }
      item.style.display = '';
    }
    else {
      item.classList.add('hidden_by_search');
      item.style.display = 'none';
    }
  });

  let questGroups = document.querySelectorAll('h4');
  questGroups.forEach((item) => {
    currentGroup = item.nextElementSibling;
    let currentQuests = currentGroup.querySelectorAll('.quest-card');
    let displayedCount = 0;
    currentQuests.forEach((quest) => {
      let questDisplay = getComputedStyle(quest, null).display;
      if (questDisplay !== 'none') {
        displayedCount = 1;
        item.style.display = '';
        return;
      }
    })
    if (displayedCount === 0) {
      item.style.display = 'none';
    }
  })
}

function displayFilters() {
  let filters = document.querySelector('.filters');
  let filterButton = document.querySelector('#filters');

  if (filters.style.display === 'none') {
    filters.style.display = 'block';
    filterButton.style.color = '#A1A0A0';
  }
  else {
    filters.style.display = 'none';
    filterButton.style.color = '#000';
  }
}

let filtersList = [];

function displayFiltered() {
  questCards = document.querySelectorAll('.quest-card');

  questCards.forEach((item) => {
    if (item.classList.contains('hidden_by_search')) {
      return;
    }
    let cardCategory = item.classList.item(1);
    if (filtersList.includes(cardCategory)) {
      if (item.classList.contains('hidden_by_filter')) {
        item.classList.remove('hidden_by_filter');
      }
      item.style.display = '';
    }
    else {
      item.classList.add('hidden_by_filter');
      item.style.display = 'none';
    }
  });

  let questGroups = document.querySelectorAll('h4');
  questGroups.forEach((item) => {
    currentGroup = item.nextElementSibling;
    let currentQuests = currentGroup.querySelectorAll('.quest-card');
    let displayedCount = 0;
    currentQuests.forEach((quest) => {
      let questDisplay = getComputedStyle(quest, null).display;
      if (questDisplay !== 'none') {
        displayedCount = 1;
        item.style.display = '';
        return;
      }
    })
    if (displayedCount === 0) {
      item.style.display = 'none';
    }
  })
}

function displayAllCards() {
  questCards = document.querySelectorAll('.quest-card');
  questCards.forEach((item) => {
    if (item.classList.contains('hidden_by_filter')) {
      item.classList.remove('hidden_by_filter');
    }
    item.style.display = '';
  });

  let questGroups = document.querySelectorAll('h4');
  questGroups.forEach((item) => {
    item.style.display = '';
  });

  filterList();
}


function filterByCategory(id) {
  let currentButton = document.getElementById(id);
  if (currentButton.classList.contains('chosen')) {
    let index = filtersList.indexOf(id);
    if (index > -1) {
      filtersList.splice(index, 1);
    }
    currentButton.classList.remove('chosen');
  }
  else {
    filtersList.push(id);
    currentButton.classList.add('chosen');
  }

  if (filtersList.length === 0) {
    displayAllCards();
  }
  else {
    displayFiltered();
  }
}