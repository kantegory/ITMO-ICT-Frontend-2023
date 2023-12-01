import { createTheme, Theme as MUITheme } from '@mui/material'
import { CSSProperties } from 'react'
import { BUTTON_MAX_WIDTH } from './constants'
import { Theme } from 'src/types/Theme'

declare module '@mui/material' {
  interface TypeText {
    hint: string
  }
  interface Mixins {
    button: CSSProperties
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFDC80',
      dark: '#DDA000',
    },
    secondary: {
      main: '#8AA1FF',
      light: '#BFCAFF',
    },
    background: {
      default: '#F7F7F7',
      paper: '#FFFFFF',
    },
    text: {
      hint: 'rgba(0, 0, 0, 0.4)',
    },
  },
  typography: {
    fontFamily: '"Google Sans"',
  },
  mixins: {
    button: {
      transition: 'all 150ms ease',
      userSelect: 'none',
      cursor: 'pointer',
      border: 'none',
      textAlign: 'initial',
      WebkitTapHighlightColor: 'transparent',
      maxWidth: BUTTON_MAX_WIDTH,
      ['&:active' as string]: {
        transform: 'scale(0.98)',
      },
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#373123',
      dark: '#DDA000',
    },
    secondary: {
      main: '#8AA1FF',
      light: '#BFCAFF',
    },
    background: {
      default: '#212121',
      paper: '#111111',
    },
    text: {
      hint: 'rgba(255, 255, 255, 0.4)',
    },
  },
  typography: {
    fontFamily: '"Google Sans"',
  },
  mixins: {
    button: {
      transition: 'all 150ms ease',
      userSelect: 'none',
      cursor: 'pointer',
      border: 'none',
      textAlign: 'initial',
      WebkitTapHighlightColor: 'transparent',
      maxWidth: BUTTON_MAX_WIDTH,
      ['&:active' as string]: {
        transform: 'scale(0.98)',
      },
    },
  },
})

export const THEME_NAME_TO_MUI_THEME: Record<Theme, MUITheme> = {
  [Theme.LIGHT]: lightTheme,
  [Theme.DARK]: darkTheme,
}
