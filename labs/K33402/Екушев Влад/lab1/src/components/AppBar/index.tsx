import { ArrowBack } from '@mui/icons-material'
import { Box, IconButton, styled } from '@mui/material'
import cx from 'classnames'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const APP_BAR_HEIGHT = 56

const Root = styled('nav')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1, 2),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: APP_BAR_HEIGHT,
  '&.AppBar--fixed': {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  },
  '&.AppBar--withBackButton': {
    paddingLeft: theme.spacing(0.5),
  },
}))

const HeaderContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 2),
}))

const Header = styled('h1')({
  fontSize: 21,
  lineHeight: '27px',
  fontWeight: 500,
  margin: 0,
})

const Toolbar = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(0.5),
  alignItems: 'center',
  '& .MuiIconButton-root': {
    color: theme.palette.text.primary,
  },
}))

type AppBarProps = {
  fixed?: boolean
  header?: React.ReactNode
  withBackButton?: boolean
  toolbar?: React.ReactNode
}

export const AppBar: React.FC<AppBarProps> = ({
  fixed,
  toolbar,
  header,
  withBackButton,
}) => {
  const navigate = useNavigate()

  const back = () => {
    navigate(-1)
  }

  return (
    <Root
      className={cx({
        'AppBar--fixed': fixed,
        'AppBar--withBackButton': withBackButton,
      })}
    >
      {withBackButton && (
        <IconButton onClick={back}>
          <ArrowBack />
        </IconButton>
      )}
      <Header>{header}</Header>
      <Toolbar>{toolbar}</Toolbar>
    </Root>
  )
}

type AppBarExtendedProps = AppBarProps

export const AppBarExtended: React.FC<AppBarExtendedProps> = ({
  fixed,
  toolbar,
  header,
  withBackButton,
}) => {
  const navigate = useNavigate()

  const back = () => {
    navigate(-1)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Root
        className={cx({
          'AppBar--fixed': fixed,
          'AppBar--withBackButton': withBackButton,
        })}
      >
        {withBackButton && (
          <IconButton onClick={back}>
            <ArrowBack />
          </IconButton>
        )}
        <Toolbar>{toolbar}</Toolbar>
      </Root>
      <HeaderContainer>
        <Header>{header}</Header>
      </HeaderContainer>
    </Box>
  )
}
