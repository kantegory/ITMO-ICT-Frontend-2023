import React, { useState } from 'react'
import { Add, Close, Logout } from '@mui/icons-material'
import {
  IconButton,
  Avatar,
  Box,
  Modal,
  Typography,
  styled,
  Fade,
  ButtonBase,
} from '@mui/material'
import { getRouteByAlias } from 'src/utils/getRoutePath'
import { useNavigate } from 'react-router'
import { BUTTON_MAX_WIDTH } from 'src/config/constants'
import { APP_BAR_HEIGHT } from '../AppBar'

const ModalContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
}))

const ModalPage = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: 28,
  width: '100%',
  maxWidth: BUTTON_MAX_WIDTH,
  display: 'flex',
  flexDirection: 'column',
}))

const ModalPageHeader = styled(Box)(() => ({
  width: '100%',
  fontSize: 22,
  lineHeight: '28px',
  fontWeight: 500,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: APP_BAR_HEIGHT,
}))

const ModalPageFooter = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  padding: theme.spacing(0.5),
  userSelect: 'none',
}))

const ModalPageFooterButton = styled(ButtonBase)(({ theme }) => ({
  padding: theme.spacing(1, 1.5),
  borderRadius: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  lineHeight: '16px',
}))

const ModalCloseIconButton = styled(IconButton)(({ theme }) => ({
  left: theme.spacing(1),
  top: theme.spacing(1),
  bottom: theme.spacing(1),
  position: 'absolute',
}))

const AccountBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  borderRadius: 22,
  padding: theme.spacing(1.5),
  margin: theme.spacing(1),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}))

const AccountInfo = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '1',
}))

const AddDeviceAndAvatar: React.FC = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogout = () => {
    setOpen(false)
    navigate(getRouteByAlias('login').path)
  }

  const goToAddDevice = () => {
    navigate(getRouteByAlias('addDevice').path)
  }

  return (
    <>
      <IconButton onClick={goToAddDevice}>
        <Add />
      </IconButton>
      <IconButton onClick={handleOpen} sx={{ padding: 0.5 }}>
        <Avatar sx={{ width: 32, height: 32 }} src="avatar.png" />
      </IconButton>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <ModalContainer>
            <ModalPage>
              <ModalPageHeader>
                <ModalCloseIconButton onClick={handleClose}>
                  <Close />
                </ModalCloseIconButton>
                Аккаунт
              </ModalPageHeader>
              <AccountBox>
                <Avatar src={'avatar.png'} />
                <AccountInfo>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, lineHeight: '18px', fontSize: 13 }}
                  >
                    Гостевой аккаунт
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ lineHeight: '15px' }}
                    color="text.secondary"
                  >
                    example@gmail.com
                  </Typography>
                </AccountInfo>
                <IconButton onClick={handleLogout}>
                  <Logout />
                </IconButton>
              </AccountBox>
              <ModalPageFooter>
                <ModalPageFooterButton>
                  Политика конфиденциальности
                </ModalPageFooterButton>
                •
                <ModalPageFooterButton>
                  Условия использования
                </ModalPageFooterButton>
              </ModalPageFooter>
            </ModalPage>
          </ModalContainer>
        </Fade>
      </Modal>
    </>
  )
}

export default AddDeviceAndAvatar
