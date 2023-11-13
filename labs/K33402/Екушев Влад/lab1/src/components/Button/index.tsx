import {
  styled,
  ButtonBase as MUIButtonBase,
  ButtonBaseProps,
} from '@mui/material'
import cx from 'classnames'
import React from 'react'

const Root = styled(MUIButtonBase)(({ theme }) => ({
  ...theme.mixins.button,
  background: theme.palette.background.paper,
  color: theme.palette.primary.contrastText,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  borderRadius: 100,
  fontWeight: 500,
  fontFamily: theme.typography.fontFamily,
  fontSize: 15,
  lineHeight: '20px',
  width: '100%',
  '&.Button--primary': {
    background: theme.palette.primary.main,
  },
  '&.Button--secondary': {
    background: theme.palette.secondary.main,
  },
  '&.Button--default': {
    background: theme.palette.background.default,
  },
}))

type ButtonProps = ButtonBaseProps & {
  variant?: 'primary' | 'default' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  return (
    <Root
      {...props}
      className={cx(className, {
        'Button--primary': variant === 'primary',
        'Button--default': variant === 'default',
        'Button--secondary': variant === 'secondary',
      })}
    >
      {children}
    </Root>
  )
}

export default Button
