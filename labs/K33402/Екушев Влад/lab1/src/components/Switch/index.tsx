import { Switch as MUISwitch, SwitchProps, alpha, styled } from '@mui/material'
import React from 'react'

const Root = styled(MUISwitch)(({ theme }) => ({
  padding: 0,
  width: 52,
  height: 32,
  '& .MuiSwitch-switchBase': {
    padding: 0,
  },
  '& .Mui-checked': {
    transform: 'translateX(20px)',
  },
  '& .Mui-checked .MuiSwitch-thumb': {
    width: 24,
    height: 24,
    margin: 4,
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    background: theme.palette.primary.main,
    opacity: 1,
    boxShadow: '0 0 0 0px inset ' + alpha(theme.palette.text.primary, 0),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    borderRadius: 100,
    boxShadow: '0 0 0 2px inset ' + alpha(theme.palette.text.primary, 0.63),
    background: alpha(theme.palette.text.primary, 0.12),
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 8,
    background: alpha(theme.palette.text.primary, 0.63),
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
}))

const Switch: React.FC<SwitchProps> = (props) => {
  return <Root {...props} />
}

export default Switch
