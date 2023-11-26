import React from 'react'

export const ThemeContext = React.createContext<{
  theme?: string
  setTheme?: React.Dispatch<React.SetStateAction<string>>
}>({})

