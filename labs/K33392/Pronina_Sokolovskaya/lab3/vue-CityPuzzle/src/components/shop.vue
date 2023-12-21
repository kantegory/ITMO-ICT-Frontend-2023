<template>
    <section class="quests">
    <div class="container">
        <div class="row">
            <div class="col-xl-3 col-md-12 col-sm-12">
                <input type="text" class="form-control p3 search-form" placeholder="Поиск" id="search-input">
                <button class="button-filters" id="filters" onclick="displayFilters()">Фильтры</button>
                <div class="filters">
                    <p>Категория</p>
                    <div class="category-filter">
                        <button class="category-button" id="cat-history"
                                onclick="filterByCategory('cat-history')">история и мистика
                        </button>
                        <button class="category-button" id="cat-art" onclick="filterByCategory('cat-art')">мир
                            искусства
                        </button>
                        <button class="category-button" id="cat-love" onclick="filterByCategory('cat-love')">дела
                            сердечные
                        </button>
                        <button class="category-button" id="cat-society"
                                onclick="filterByCategory('cat-society')">питерская интеллигенция
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>