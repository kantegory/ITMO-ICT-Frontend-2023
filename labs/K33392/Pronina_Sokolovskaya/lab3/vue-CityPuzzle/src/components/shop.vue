<template>
    <section class="quests">
    <div class="container">
        <div class="row">
            <div class="col-xl-3 col-md-12 col-sm-12">
                <input type="text" class="form-control p3 search-form" placeholder="Поиск" id="search-input" v-model="searchFilter">
                <button class="button-filters" id="filters" ref="filtersButton" @click="displayFilters()">Фильтры</button>
                <div class="filters" ref="filters">
                    <p>Категория</p>
                    <div class="category-filter">
                        <button class="category-button" id="cat-history"
                                @click="filterByCategory('cat-history')">история и мистика
                        </button>
                        <button class="category-button" id="cat-art" @click="filterByCategory('cat-art')">мир
                            искусства
                        </button>
                        <button class="category-button" id="cat-love" @click="filterByCategory('cat-love')">дела
                            сердечные
                        </button>
                        <button class="category-button" id="cat-society" 
                            @click="filterByCategory('cat-society')">питерская интеллигенция
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-md-12 col-sm-12">
                <div v-for="questGroup in filteredQuests" :key="questGroup.questType">
                    <h4 class="color2">{{ questGroup.questType }}</h4>
                    <div class="quest-group">
                        <div v-for="quest in questGroup.quests" :key="quest.id" :class="['quest-card', 'cat-' + quest.category]" :id="quest.id">
                            <img src='../assets/images/questimg1.jpg' :alt="quest.picture_alt_text" class="quest-image">
                            <div class="quest-content">
                                <p class="price text-center">{{ quest.price }} ₽</p>
                                <h6 class="text-center">{{ quest.name }}</h6>
                                <p class="text-center color4 quest_description">{{ quest.description }}</p>

                                <div class="category">
                                    <p class="text-black quest_description filter">Категория:</p>
                                    <p class="color4 quest_description">{{ parseCategory(quest.category) }}</p>
                                </div>

                                <div class="duration">
                                    <p class="text-black quest_description filter">Время в пути:</p>
                                    <p class="color4 quest_description">{{ quest.duration }}</p>
                                </div>

                                <button @click="purchaseQuest(quest.id)" class="btn btn-primary primary-button questcard-button">Купить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { onMounted, computed, ref } from 'vue';
import { handleQuests } from '../composables/handleQuests'

export default{
    setup() {
        const searchFilter = ref('');
        const filtersList = ref([]);
        const filters = ref(null);
        const filtersButton = ref(null);

        const { questsData, fetchQuests, parseCategory, purchaseQuest } = handleQuests();

        onMounted(() => {
            fetchQuests();
            filters.value = document.querySelector('.filters');
            filtersButton.value = document.getElementById('filters');
        });

        const displayFilters = () => {
            if (filters.value.style.display === 'none') {
                filters.value.style.display = 'block';
                filtersButton.value.style.color = '#A1A0A0';
            }
            else {
                filters.value.style.display = 'none';
                filtersButton.value.style.color = '#000';
            }
        };

        const filterByCategory = (id) => {
            const currentButton = document.getElementById(id);

            if (currentButton.classList.contains('chosen')) {
                const index = filtersList.value.indexOf(id);
                if (index > -1) {
                    filtersList.value.splice(index, 1);
                }
                currentButton.classList.remove('chosen');
            } else {
                filtersList.value.push(id);
                currentButton.classList.add('chosen');
            }

            if (filtersList.value.length === 0) {
                displayAllCards();
            } else {
                displayFiltered();
            }
        };

        const displayFiltered = () => {
            const questCards = document.querySelectorAll('.quest-card');

            questCards.forEach((item) => {
                if (item.classList.contains('hidden_by_search')) {
                    return;
                }
                const cardCategory = item.classList.item(1);
                if (filtersList.value.includes(cardCategory)) {
                    if (item.classList.contains('hidden_by_filter')) {
                        item.classList.remove('hidden_by_filter');
                    }
                    item.style.display = '';
                } else {
                    item.classList.add('hidden_by_filter');
                    item.style.display = 'none';
                }
            });

            const questGroups = document.querySelectorAll('h4');
            questGroups.forEach((item) => {
                const currentGroup = item.nextElementSibling;
                const currentQuests = currentGroup.querySelectorAll('.quest-card');
                let displayedCount = 0;
                currentQuests.forEach((quest) => {
                const questDisplay = getComputedStyle(quest, null).display;
                if (questDisplay !== 'none') {
                    displayedCount = 1;
                    item.style.display = '';
                    return;
                }
                });
                if (displayedCount === 0) {
                item.style.display = 'none';
                }
            });
        };

        const displayAllCards = () => {
            const questCards = document.querySelectorAll('.quest-card');
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

            filteredQuests.value = [...questsData.value];
        };

        const filteredQuests = computed(() => {
            console.log("here");
            const searchTerm = searchFilter.value.toLowerCase().trim();
            return questsData.value.map((questGroup) => {
                const filteredQuests = questGroup.quests.filter((quest) => {
                    return (
                        !quest.hidden_by_search &&
                        (quest.name.toLowerCase().includes(searchTerm) ||
                        quest.description.toLowerCase().includes(searchTerm))
                    );
                });

                if (filteredQuests.length > 0) {
                    return { ...questGroup, quests: filteredQuests };
                } else {
                    return null;
                }
            }).filter(Boolean);
        });

        return { questsData, parseCategory, searchFilter, filteredQuests, displayFilters, filterByCategory, displayFiltered, displayAllCards, filters, filtersButton, purchaseQuest };
    },
}

</script>
