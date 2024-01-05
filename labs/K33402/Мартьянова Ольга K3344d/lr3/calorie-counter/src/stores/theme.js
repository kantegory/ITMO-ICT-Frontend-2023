import { defineStore } from 'pinia'
import darkImg from '/dark-background.png'
import lightImg from '/light-background.png'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    themes: {
      light: {
        backgroundImage: darkImg,
        backgroundColor: '#f4f1f1d3',
        textColor: '#2b2d30',
        navColor: '#343a40',
        headerColor: '#eeaf51',
        borderColor: '#e1dddd'
      },
      dark: {
        backgroundImage: lightImg,
        backgroundColor: 'rgba(41, 36, 30, 0.907)',
        textColor: '#e1dddd',
        navColor: 'rgba(41, 36, 30, 0.907)',
        headerColor: '#8f2313',
        borderColor: 'rgb(66, 65, 62)',
        textFilter: '#eeaf51d3'
      }
    },
    currentTheme: 'light'
  }),
  actions: {
    setTheme(theme) {
      this.currentTheme = theme
    },

    getThemeData() {
      return this.themes[this.currentTheme]
    },

    setupSystemThemeListener() {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      this.setTheme(mediaQuery.matches ? 'dark' : 'light')
      mediaQuery.addEventListener('change', (e) => {
        this.setTheme(e.matches ? 'dark' : 'light')
      })
    }
  }
})
