<template>
  <div class="container mt-5">
    <h2>Фильтры</h2>
    <div class="filters">
      <div v-for="filter in filters" :key="filter.id" class="form-check">
        <input type="checkbox" v-model="filter.checked" :id="filter.id" @change="handleFilterChange" />
        <label :for="filter.id">{{ filter.label }}</label>
      </div>
    </div>

    <div id="travelList">
      <div
          class="travel-item"
          v-for="travel in filteredTravels"
          :key="travel.name"
          :class="{
          upcoming: travel.status === 'upcoming',
          ongoing: travel.status === 'ongoing',
          completed: travel.status === 'completed',
          postponed: travel.status === 'postponed',
          cancelled: travel.status === 'cancelled'
        }"
      >
        <h5>{{ travel.name }}</h5>
        <p>{{ travel.status }}</p>
        <p>{{ travel.date }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'FiLter',
  data() {
    return {
      filters: [
        { id: 'upcomingFilter', label: 'Предстоящие', checked: false },
        { id: 'ongoingFilter', label: 'В процессе', checked: false },
        { id: 'completedFilter', label: 'Завершенные', checked: false },
        { id: 'postponedFilter', label: 'Отложенные', checked: false },
        { id: 'cancelledFilter', label: 'Отмененные', checked: false }
      ],
      travels: [
        {
          name: "Париж, Франция",
          status: "upcoming",
          date: "10.10.2022"
        },
        {
          name: "Париж, Франция",
          status: "postponed",
          date: "10.12.2023"
        },
        {
          name: "Лондон, Великобритания",
          status: "completed",
          date: "01.01.2021"
        },
        {
          name: "Токио, Япония",
          status: "ongoing",
          date: "15.05.2023"
        },
        {
          name: "Рим, Италия",
          status: "cancelled",
          date: "20.07.2022"
        }
      ]
    };
  },
  methods: {
    handleFilterChange() {
      const upcomingFilter = document.getElementById("upcomingFilter").checked;
      const ongoingFilter = document.getElementById("ongoingFilter").checked;
      const completedFilter = document.getElementById("completedFilter").checked;
      const postponedFilter = document.getElementById("postponedFilter").checked;
      const cancelledFilter = document.getElementById("cancelledFilter").checked;

      const filteredTravels = this.travels.filter(travel => {
        return (
            (upcomingFilter && travel.status === "upcoming") ||
            (ongoingFilter && travel.status === "ongoing") ||
            (completedFilter && travel.status === "completed") ||
            (postponedFilter && travel.status === "postponed") ||
            (cancelledFilter && travel.status === "cancelled")
        );
      });

      this.renderTravelList(filteredTravels);
    },
    renderTravelList(travels) {
      const travelListElement = document.getElementById("travelList");
      travelListElement.innerHTML = "";

      travels.forEach(travel => {
        const travelItem = document.createElement("div");
        travelItem.classList.add("travel-item");

        switch (travel.status) {
          case "upcoming":
            travelItem.classList.add("upcoming");
            break;
          case "ongoing":
            travelItem.classList.add("ongoing");
            break;
          case "completed":
            travelItem.classList.add("completed");
            break;
          case "postponed":
            travelItem.classList.add("postponed");
            break;
          case "cancelled":
            travelItem.classList.add("cancelled");
            break;
        }

        const travelName = document.createElement("h5");
        travelName.textContent = travel.name;

        const travelStatus = document.createElement("p");
        travelStatus.textContent = travel.status;

        const travelDate = document.createElement("p");
        travelDate.textContent = travel.date;



        travelItem.appendChild(travelName);
        travelItem.appendChild(travelStatus);
        travelItem.appendChild(travelDate);


        travelListElement.appendChild(travelItem);
      });
    }
  },
  mounted() {
    document.getElementById("upcomingFilter").addEventListener("change", this.handleFilterChange);
    document.getElementById("ongoingFilter").addEventListener("change", this.handleFilterChange);
    document.getElementById("completedFilter").addEventListener("change", this.handleFilterChange);
    document.getElementById("postponedFilter").addEventListener("change", this.handleFilterChange);
    document.getElementById("cancelledFilter").addEventListener("change", this.handleFilterChange);

    window.addEventListener('DOMContentLoaded', () => {
      const spiderScroll = document.querySelector('.spider-scroll');
      spiderScroll.addEventListener('scroll', () => {
        if (spiderScroll.scrollTop > 0) {
          spiderScroll.style.backgroundColor = '#ffffff';
        } else {
          spiderScroll.style.backgroundColor = '#f9e16b';
        }
      });
    });

    const content = document.querySelector('.content');
    content.addEventListener('scroll', () => {
      content.scrollTop += 20;
    });
  }
};
</script>

<style scoped>
.background-img {
  background: url("../358.png") center;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}
.filters {
  margin-bottom: 20px;
  color: white;
}
.travel-item h5,
.travel-item p {
  color: white; /* Добавлено свойство color для текста в элементах списка путешествий */
}
.travel-item {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-check{
  color: #ffa801;
}
h2 {
  margin-top: 30px;
  color: #fff3cd; /* Зеленый цвет */
  text-shadow: 0px 0px 10px #ff7518, 0px 0px 20px #ff7518, 0px 0px 30px #ff7518;

}

.form-check {
  display: inline-block;
  margin-right: 100px;

}


body {

  margin: 0;
  padding: 0;
}
.scroll-container {

  height: 100vh;
  overflow: scroll;
}
/*  скроллбар */
.scroll-container::-webkit-scrollbar {
  width: 10px;
}
.scroll-container::-webkit-scrollbar-track {
  background-color: #230d20
}
.scroll-container::-webkit-scrollbar-thumb {
  background-color: #f1f1f1;
}
</style>
