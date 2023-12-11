import { QrCodeScanner } from '@mui/icons-material'
import { Unstable_Grid2 as Grid, styled } from '@mui/material'
import React from 'react'
import { AppBarExtended } from 'src/components/AppBar'
import Button from 'src/components/Button'
import { getDeviceIcon } from 'src/components/DeviceCard'
import AddDeviceIllustration from 'src/components/svg/AddDeviceIllustration'
import { BUTTON_MAX_WIDTH } from 'src/config/constants'
import { DeviceType } from 'src/types/Device'

const Content = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center',
}))

const ScanQRButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}))

const Illustration = styled(AddDeviceIllustration)({
  width: '100%',
  height: 'auto',
  maxWidth: BUTTON_MAX_WIDTH,
})

const DeviceCard = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}))

const DeviceCardIcon = styled('div')(({ theme }) => ({
  color: theme.palette.primary.dark,
}))

type DeviceItem = {
  type: DeviceType
  label: string
}
const DEVICES: DeviceItem[] = [
  {
    type: DeviceType.CAMERA_OUTDOOR,
    label: 'Наружная камера',
  },
  {
    type: DeviceType.KETTLE,
    label: 'Чайник',
  },
  {
    type: DeviceType.LIGHT_BULB,
    label: 'Лампочка',
  },
  {
    type: DeviceType.THERMOSTAT,
    label: 'Термостат',
  },
]

const AddDevice: React.FC = () => {
  return (
    <>
      <AppBarExtended fixed withBackButton header="Добавить устройство" />
      <Content>
        <Illustration />
        <ScanQRButton variant="primaryTransparent">
          <QrCodeScanner />
          Отсканировать QR
        </ScanQRButton>
        <Grid disableEqualOverflow container spacing={1}>
          {DEVICES.map((device) => {
            const Icon = getDeviceIcon(device.type)

            return (
              <Grid xs={6} md={4} lg={3} xl={2} key={device.type}>
                <DeviceCard variant="default">
                  <DeviceCardIcon>
                    <Icon />
                  </DeviceCardIcon>
                  {device.label}
                </DeviceCard>
              </Grid>
            )
          })}
        </Grid>
      </Content>
    </>
  )
}

export default AddDevice
