import { styled } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AppBarExtended } from 'src/components/AppBar'
import { devices as MOCK_DEVICES } from 'src/config/devices'
import { DeviceCapabilityType, DeviceType } from 'src/types/Device'
import { getRouteByAlias } from 'src/utils/getRoutePath'
import ColorSetting from './ColorSetting'
import OnOff from './OnOff'

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
  const navigate = useNavigate()
  const { id } = useParams<DeviceControlsPageParams>()
  // TODO: fixme remove mock data
  const device = useMemo(() => MOCK_DEVICES.find((e) => e.id === id), [id])

  const supportsColorSettings =
    device &&
    device.type === DeviceType.LIGHT_BULB &&
    device.capabilities[DeviceCapabilityType.COLOR_SETTING]
  const supportsOnOff =
    device &&
    device.type !== DeviceType.CAMERA_OUTDOOR &&
    device.capabilities[DeviceCapabilityType.ON_OFF]

  useEffect(() => {
    if (!device) {
      navigate(getRouteByAlias('devices').path)
    }
  })

  if (!device) {
    return null
  }

  return (
    <>
      <AppBarExtended fixed withBackButton header={device.name} />
      <Root>
        {supportsColorSettings && <ColorSetting device={device} />}
        {supportsOnOff && <OnOff device={device} />}
      </Root>
    </>
  )
}

export default DeviceControls
