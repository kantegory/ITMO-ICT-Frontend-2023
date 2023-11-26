import React, { ReactNode } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'
import { Theme } from '@/enums'

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`
  if (Object.values(Theme).includes(theme as Theme)) return theme

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  if (userMedia.matches) return Theme.light

  return Theme.dark
}

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = React.useState(getTheme)

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

