import { createStore } from 'vuex';

export const store = createStore({
    state() {
        return {
            user: null,
            isDarkTheme: localStorage.getItem('isDarkTheme') === 'true'
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        toggleTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
      localStorage.setItem('isDarkTheme', state.isDarkTheme.toString());
    }
    },
    actions: {
        // Добавляем действие для загрузки данных пользователя
        async fetchUser({ commit }) {
            try {
                const response = await fetch('/api/user'); // Предполагается, что сервер предоставляет данные о пользователе по этому пути
                const data = await response.json();
                commit('setUser', data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        },
        // Добавляем действие для обновления плейлистов пользователя
        async updatePlaylists({ commit }) {
            try {
                const response = await fetch('/api/playlists'); // Предполагается, что сервер предоставляет данные о плейлистах пользователя по этому пути
                const data = await response.json();
                commit('updateUserPlaylists', data);
            } catch (error) {
                console.error('Error updating user playlists:', error);
            }
        },
        toggleTheme({ commit }) {
      commit('toggleTheme');
    }
    },
    getters: {
        isDarkTheme: state => state.isDarkTheme
        // Добавьте геттеры для данных пользователя, статуса аутентификации и т. д.
    }
});