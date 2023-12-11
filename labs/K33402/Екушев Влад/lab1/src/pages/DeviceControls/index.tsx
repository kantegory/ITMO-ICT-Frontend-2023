import { IconButton, styled } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AppBarExtended } from 'src/components/AppBar'
import { DeviceCapabilityType, DeviceType } from 'src/types/Device'
import { getRouteByAlias } from 'src/utils/getRoutePath'
import ColorSetting from './ColorSetting'
import OnOff from './OnOff'
import { useToggleFavoriteDeviceMutation, useGetDevicesQuery } from 'src/api'
import FullScreenSpinner from 'src/components/FullScreenSpinner'
import { Favorite, FavoriteBorder } from '@mui/icons-material'

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 2),
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  justifyContent: 'center',
  alignItems: 'center',
}))

type DeviceControlsPageParams = {
  id: string
}

const DeviceControls: React.FC = () => {
  const [favoriteToggle] = useToggleFavoriteDeviceMutation()
  const navigate = useNavigate()
  const { id } = useParams<DeviceControlsPageParams>()
  const { data: devices, isSuccess } = useGetDevicesQuery({})
  const device = useMemo(() => {
    return devices?.devices.find((e) => e.id === id)
  }, [devices?.devices, id])
  const [isFavorite, setIsFavorite] = useState(device?.favorite || false)

  const supportsColorSettings =
    device &&
    device.type === DeviceType.LIGHT_BULB &&
    device.capabilities[DeviceCapabilityType.COLOR_SETTING]
  const supportsOnOff =
    device &&
    device.type !== DeviceType.CAMERA_OUTDOOR &&
    device.capabilities[DeviceCapabilityType.ON_OFF]

  const toggleFavoriteDevice = () => {
    if (!id) return

    favoriteToggle({ id })
      .unwrap()
      .then((data) => {
        setIsFavorite(data.state)
      })
  }

  useEffect(() => {
    if (!device && isSuccess) {
      navigate(getRouteByAlias('devices').path)
    }
  })

  if (!device) {
    return <FullScreenSpinner />
  }

  return (
    <>
      <AppBarExtended
        fixed
        toolbar={
          <IconButton onClick={toggleFavoriteDevice}>
            {isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        }
        withBackButton
        header={device.name}
      />
      <Root>
        {supportsColorSettings && <ColorSetting device={device} />}
        {supportsOnOff && <OnOff device={device} />}
      </Root>
    </>
  )
}

export default DeviceControls
