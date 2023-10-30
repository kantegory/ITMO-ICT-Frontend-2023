import { Search } from '@mui/icons-material'
import {
  CircularProgress,
  Unstable_Grid2 as Grid,
  InputAdornment,
  styled,
} from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useNavigate, generatePath } from 'react-router'
import AddDeviceAndAvatar from 'src/components/AddDeviceAndAvatar'
import { AppBar } from 'src/components/AppBar'
import DeviceCard, { DeviceCardClickHandler } from 'src/components/DeviceCard'
import Input from 'src/components/Input'
import { devices as MOCK_DEVICES } from 'src/config/devices'
import { getRouteByAlias } from 'src/utils/getRoutePath'
import DevicesFilterTabs from './DevicesFilterTabs'
import { Device, DeviceType } from 'src/types/Device'
import { useDebounce } from 'src/hooks/useDebounce'

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}))

const SearchAndFiltersContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}))

const InputContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
}))

const searchInString = (query: string, text: string) =>
  text.split(' ').some((s) => {
    return s.toLowerCase().startsWith(query.toLowerCase())
  })

const filterDevices: (props: {
  devices: Device[]
  query: string
  deviceTypes: Set<DeviceType>
}) => Device[] = ({ deviceTypes, devices, query }) => {
  const res: Device[] = []

  devices.forEach((device) => {
    const isInQuery = query ? searchInString(query, device.name) : true
    const isInDeviceTypes =
      deviceTypes.size > 0 ? deviceTypes.has(device.type) : true

    if (isInQuery && isInDeviceTypes) {
      res.push(device)
    }
  })

  return res
}

const Devices: React.FC = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [activeFilterDeviceTypes, setActiveFilterDeviceTypes] = useState(
    new Set<DeviceType>()
  )
  // TODO: fixme remove mock data
  const devices = MOCK_DEVICES
  const debouncedQuery = useDebounce(query, 200)
  const queryIsWaitingForDebounce = useMemo(
    () => query !== debouncedQuery,
    [debouncedQuery, query]
  )
  const filteredDevices = useMemo(
    () =>
      filterDevices({
        devices,
        query: debouncedQuery,
        deviceTypes: activeFilterDeviceTypes,
      }),
    [activeFilterDeviceTypes, devices, debouncedQuery]
  )

  const handleDeviceCardClick: DeviceCardClickHandler = (_event, device) => {
    navigate(
      generatePath(getRouteByAlias('deviceControls').path, {
        id: device.id,
      })
    )
  }

  const handleFilterChange = (activeTabs: Set<DeviceType>) => {
    setActiveFilterDeviceTypes(new Set(activeTabs))
  }

  return (
    <>
      <AppBar fixed header="Девайсы" toolbar={<AddDeviceAndAvatar />} />
      <SearchAndFiltersContainer>
        <InputContainer>
          <Input
            disableUnderline
            type="search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder="Поиск"
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
            endAdornment={
              queryIsWaitingForDebounce && (
                <InputAdornment position="end">
                  <CircularProgress size={24} thickness={4} />
                </InputAdornment>
              )
            }
          />
        </InputContainer>
        <DevicesFilterTabs onChange={handleFilterChange} />
      </SearchAndFiltersContainer>
      <StyledGrid disableEqualOverflow container spacing={1}>
        {filteredDevices.map((device) => (
          <Grid xs={6} md={4} lg={3} xl={2} key={device.id}>
            <DeviceCard onClick={handleDeviceCardClick} device={device} />
          </Grid>
        ))}
      </StyledGrid>
    </>
  )
}

export default Devices
