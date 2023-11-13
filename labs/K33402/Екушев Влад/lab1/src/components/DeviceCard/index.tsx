import {
  CameraOutdoorOutlined,
  LightbulbOutlined,
  Thermostat as ThermostatIcon,
} from '@mui/icons-material'
import { alpha, styled } from '@mui/material'
import cx from 'classnames'
import React, { useMemo } from 'react'
import {
  Device,
  DeviceCapabilityType,
  LightBulb,
  DeviceType,
  Kettle,
  Thermostat,
  DeviceState,
} from 'src/types/Device'
import KettleSVG from 'src/components/svg/Kettle'
import exhaustivnessCheck from 'src/utils/exhaustivnessCheck'

const DEVICE_CARD_HEIGHT = 116

const Root = styled('button')(({ theme }) => ({
  borderRadius: 24,
  padding: theme.spacing(1.5),
  backgroundColor: alpha(theme.palette.primary.main, 0.16),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  fontFamily: theme.typography.fontFamily,
  width: '100%',
  height: DEVICE_CARD_HEIGHT,
  '&:not(.DeviceCard--supportsOnOff) .DeviceCard__iconContainer': {
    color: theme.palette.primary.dark,
  },
  '&.DeviceCard--active': {
    backgroundColor: theme.palette.primary.main,
    '& .DeviceCard__iconContainer': {
      color: theme.palette.primary.dark,
    },
  },
  '&.DeviceCard--offline': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 0 0 2px inset ' + theme.palette.background.default,
  },
  '&.DeviceCard--supportsOnOff:not(.DeviceCard--active):not(.DeviceCard--offline)':
    {
      backgroundColor: theme.palette.background.default,
    },
  ...theme.mixins.button,
  maxWidth: 'unset',
}))

const FillContainer = styled('div')({
  flexGrow: 1,
  display: 'flex',
  width: '100%',
})

const IconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  height: 'fit-content',
  gap: theme.spacing(0.5),
  alignItems: 'center',
  fontSize: 13,
  lineHeight: '17px',
  fontWeight: 500,
  color: alpha(theme.palette.text.primary, 0.24),
}))

const InfoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.25),
  padding: theme.spacing(0.5),
}))

const Name = styled('h1')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 15,
  fontWeight: 500,
  margin: 0,
  lineHeight: '19px',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  wordWrap: 'break-word',
}))

const Subtitle = styled('p')(({ theme }) => ({
  fontWeight: 400,
  margin: 0,
  fontSize: 13,
  lineHeight: '17px',
  color: theme.palette.text.hint,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  wordWrap: 'break-word',
}))

export const getTurnedOnState = (device: LightBulb | Kettle | Thermostat) =>
  device.capabilities[DeviceCapabilityType.ON_OFF].state.value
export const getOnOffText = (state: boolean) =>
  state ? 'Включено' : 'Выключено'
export const formatTemperature = (degrees: number): string =>
  degrees > 0 ? `+${degrees}` : degrees.toString()

export const getDeviceIcon = (device: DeviceType) => {
  switch (device) {
    case DeviceType.LIGHT_BULB:
      return LightbulbOutlined
    case DeviceType.KETTLE:
      return KettleSVG
    case DeviceType.THERMOSTAT:
      return ThermostatIcon
    case DeviceType.CAMERA_OUTDOOR:
      return CameraOutdoorOutlined
    default:
      return exhaustivnessCheck(device)
  }
}

export type DeviceCardClickHandler<D extends Device = Device> = (
  e: React.MouseEvent<HTMLButtonElement>,
  device: D
) => void

type DeviceCardProps = {
  device: Device
  onClick: DeviceCardClickHandler
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'>

const DeviceCard: React.FC<DeviceCardProps> = ({
  device,
  onClick,
  ...props
}) => {
  const supportsOnOff = useMemo(() => {
    return Object.keys(device.capabilities).some(
      (e) => e === DeviceCapabilityType.ON_OFF
    )
  }, [device.capabilities])
  const isTurnedOn = useMemo(() => {
    if (device.type === DeviceType.CAMERA_OUTDOOR) return false
    return getTurnedOnState(device)
  }, [device])
  const isOffline = device.state === DeviceState.OFFLINE
  const temperatureReading = useMemo(() => {
    if (device.type !== DeviceType.THERMOSTAT) return

    return device.capabilities[DeviceCapabilityType.RANGE].state.find(
      (e) => e.instance === 'temperature'
    )?.value
  }, [device.capabilities, device.type])
  const DeviceIcon = useMemo(() => getDeviceIcon(device.type), [device.type])

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e, device)
  }

  return (
    <Root
      {...props}
      onClick={handleClick}
      className={cx({
        'DeviceCard--supportsOnOff': supportsOnOff,
        'DeviceCard--active': isTurnedOn,
        'DeviceCard--offline': isOffline,
      })}
      disabled={isOffline}
    >
      <FillContainer>
        <IconContainer className="DeviceCard__iconContainer">
          <DeviceIcon sx={{ width: 20, height: 20 }} />
          {temperatureReading !== undefined && (
            <>{formatTemperature(temperatureReading)}° C</>
          )}
        </IconContainer>
      </FillContainer>
      <InfoContainer>
        {!isOffline && (
          <>
            <Name>{device.name}</Name>
            {supportsOnOff && <Subtitle>{getOnOffText(isTurnedOn)}</Subtitle>}
          </>
        )}
        {isOffline && (
          <>
            <Name>Не в сети</Name>
            <Subtitle sx={{ fontWeight: 500 }}>{device.name}</Subtitle>
          </>
        )}
      </InfoContainer>
    </Root>
  )
}

export default DeviceCard
