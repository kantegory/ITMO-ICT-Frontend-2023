import {defineStore} from 'pinia'
import {Theme} from "@/stores/Theme";

export const useSiteThemeStore = defineStore('siteTheme', {
    state: () => {
        return {
            currentTheme: Theme.LIGHT
        }
    },
    actions: {
        setTheme(theme) {
            this.currentTheme = theme
        },
        getTheme() {
            return this.currentTheme
        },
        observeSystemThemeEventListener() {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
            this.setTheme(mediaQuery.matches ? Theme.DARK : Theme.LIGHT)
            mediaQuery.addEventListener('change', (event) => {
                this.setTheme(event.matches ? Theme.DARK : Theme.LIGHT)
            })
        }
    },
    persist: true
})
