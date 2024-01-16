import { alpha, styled } from '@mui/material'
import cx from 'classnames'
import React, { useMemo, useRef, useState } from 'react'
import { getDeviceIcon } from 'src/components/DeviceCard'
import { DeviceType } from 'src/types/Device'
import { useHorizontalScroll } from 'src/hooks/useHorizontalScroll'

const DEVICE_TYPES = Object.values(DeviceType) as unknown as DeviceType[]
const DEVICE_TYPE_NAMES: Record<DeviceType, string> = {
  camera_outdoor: 'Камеры',
  light_bulb: 'Светильники',
  kettle: 'Чайники',
  thermostat: 'Термостаты',
}

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1),
  overflow: 'auto',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}))

const TabRoot = styled('button')(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: 24,
  width: 128,
  height: 112,
  display: 'inline-flex',
  flexShrink: 0,
  gap: theme.spacing(1),
  flexDirection: 'column',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 500,
  fontSize: 15,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  '&.DeviceFilterTabs__tab--active': {
    backgroundColor: theme.palette.primary.main,
    '& .DeviceFilterTabs__iconContainer': {
      color: theme.palette.primary.dark,
    },
  },
  ...theme.mixins.button,
}))

const TabIconContainer = styled('div')(({ theme }) => ({
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

const FillContainer = styled('div')({
  flexGrow: 1,
  display: 'flex',
  width: '100%',
})

const TabInfoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.25),
  padding: theme.spacing(0.5),
}))

type TabProps = {
  device: DeviceType
  onChange?: (device: DeviceType, isActive: boolean) => void
}

const Tab: React.FC<TabProps> = ({ device, onChange }) => {
  const [isActive, setActive] = useState(false)
  const DeviceIcon = useMemo(() => getDeviceIcon(device), [device])

  const handleClick = () => {
    setActive((prev) => !prev)
    onChange?.(device, !isActive)
  }

  return (
    <TabRoot
      onClick={handleClick}
      className={cx({
        'DeviceFilterTabs__tab--active': isActive,
      })}
    >
      <FillContainer>
        <TabIconContainer className="DeviceFilterTabs__iconContainer">
          <DeviceIcon sx={{ width: 20, height: 20 }} />
        </TabIconContainer>
      </FillContainer>
      <TabInfoContainer>{DEVICE_TYPE_NAMES[device]}</TabInfoContainer>
    </TabRoot>
  )
}

type DevicesFilterTabsProps = {
  onChange?: (activeTabs: Set<DeviceType>) => void
}

const DevicesFilterTabs: React.FC<DevicesFilterTabsProps> = ({ onChange }) => {
  const $scroll = useHorizontalScroll<HTMLDivElement>()
  const activeTabs = useRef(new Set<DeviceType>())

  const handleChange: TabProps['onChange'] = (device, isActive) => {
    if (isActive) {
      activeTabs.current.add(device)
    } else {
      activeTabs.current.delete(device)
    }

    onChange?.(activeTabs.current)
  }

  return (
    <Root ref={$scroll}>
      {DEVICE_TYPES.map((device) => (
        <Tab device={device} onChange={handleChange} key={device} />
      ))}
    </Root>
  )
}

export default DevicesFilterTabs
