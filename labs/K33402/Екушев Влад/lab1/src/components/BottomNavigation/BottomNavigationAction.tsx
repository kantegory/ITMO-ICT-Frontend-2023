import { styled } from '@mui/material'
import React from 'react'
import cx from 'classnames'
import { BottomNavigationItem } from '.'

const Root = styled('button')(({ theme }) => ({
  isolation: 'isolate',
  padding: theme.spacing(0.75, 0),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  flex: '1 0',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  cursor: 'pointer',
  border: 'none',
  background: 'transparent',
  WebkitTapHighlightColor: 'transparent',
  '&.BottomNavigationAction--active, .BottomNavigationAction--active .BottomNavigationAction__icon':
    {
      color: theme.palette.text.primary,
    },
  '&.BottomNavigationAction--active .BottomNavigationAction__icon': {
    color: theme.palette.text.primary,
  },
  '&.BottomNavigationAction--active .BottomNavigationAction__icon::before': {
    width: '100%',
    opacity: 1,
  },
  '&.BottomNavigationAction--active .BottomNavigationAction__label': {
    opacity: 0,
    transitionDelay: '60ms',
  },
  '&.BottomNavigationAction--active .BottomNavigationAction__label--active': {
    opacity: 1,
  },
}))

const Icon = styled('div')(({ theme }) => ({
  padding: '4px 21px',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 0,
  '& .MuiSvgIcon-root': {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  '&::before': {
    content: '""',
    width: 0,
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: -1,
    opacity: 0,
    transition: 'all 480ms cubic-bezier(0, 0.65, 0, 1)',
    borderRadius: 100,
  },
}))

const LabelContainer = styled('div')({
  display: 'flex',
  position: 'relative',
  height: 16,
  alignItems: 'center',
  justifyContent: 'center',
})

const Label = styled('span')(({ theme }) => ({
  fontWeight: 500,
  fontSize: 12,
  letterSpacing: '0.1px',
  lineHeight: '16px',
  textAlign: 'center',
  fontFamily: theme.typography.fontFamily,
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  transition: 'all 220ms ease-out',
}))

const LabelActive = styled(Label)({
  fontWeight: 600,
  opacity: 0,
  letterSpacing: '0px',
})

type BottomNavigationActionProps = {
  item: BottomNavigationItem
  active?: boolean
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement>,
    item: BottomNavigationItem
  ) => void
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'>

const BottomNavigationAction: React.FC<BottomNavigationActionProps> = ({
  active,
  onClick,
  item,
  ...props
}) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    return onClick?.(e, item)
  }

  return (
    <Root
      {...props}
      onClick={handleClick}
      className={cx({
        'BottomNavigationAction--active': active,
      })}
    >
      <Icon className="BottomNavigationAction__icon">
        {active && (item.iconActive || item.icon)}
        {!active && item.icon}
      </Icon>
      <LabelContainer>
        <Label className={'BottomNavigationAction__label'}>{item.label}</Label>
        <LabelActive className={'BottomNavigationAction__label--active'}>
          {item.label}
        </LabelActive>
      </LabelContainer>
    </Root>
  )
}

export default BottomNavigationAction
