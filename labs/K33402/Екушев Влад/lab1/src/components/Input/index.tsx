import { Input, styled, alpha } from '@mui/material'
import { BUTTON_MAX_WIDTH } from 'src/config/constants'

const StyledInput = styled(Input)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: 100,
  fontFamily: theme.typography.fontFamily,
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
  boxShadow: '0 0 0 2px inset ' + theme.palette.background.default,
  border: 'none',
  maxWidth: BUTTON_MAX_WIDTH,
  '&.MuiInput-root.Mui-error': {
    boxShadow: '0 0 0 2px inset ' + theme.palette.error.main,
  },
  '&.MuiInput-root.MuiInputBase-adornedStart': {
    paddingLeft: theme.spacing(2),
    '& .MuiInput-input': { paddingLeft: 0 },
  },
  '&.MuiInput-root.MuiInputBase-adornedEnd': {
    paddingRight: theme.spacing(2),
    '& .MuiInput-input': { paddingRight: 0 },
  },
  '&.MuiInput-root .MuiInput-input': {
    padding: theme.spacing(1.5, 2),
  },
  '&.MuiInput-root.Mui-focused': {
    boxShadow: '0 0 0 2px inset ' + alpha(theme.palette.text.primary, 1),
  },
  '&::before, &::after': {
    display: 'none',
  },
}))

export default StyledInput
