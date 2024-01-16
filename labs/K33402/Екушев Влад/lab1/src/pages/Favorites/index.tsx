import { Unstable_Grid2 as Grid, styled } from '@mui/material'
import React, { useMemo } from 'react'
import { generatePath, useNavigate } from 'react-router'
import AddDeviceAndAvatar from 'src/components/AddDeviceAndAvatar'
import { AppBar } from 'src/components/AppBar'
import DeviceCard, { DeviceCardClickHandler } from 'src/components/DeviceCard'
import { getRouteByAlias } from 'src/utils/getRoutePath'
import NoDevicesIllustration from 'src/components/svg/NoDevicesIllustration'
import { BUTTON_MAX_WIDTH } from 'src/config/constants'
import { useGetFavoritesDevicesQuery } from 'src/api'
import FullScreenSpinner from 'src/components/FullScreenSpinner'

const PlaceholderRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  flexDirection: 'column',
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  '& > svg': {
    width: '100%',
    height: 'auto',
    maxWidth: BUTTON_MAX_WIDTH,
  },
  '& > p': {
    textAlign: 'center',
    fontSize: 13,
    lineHeight: '17px',
  },
}))

const Placeholder = () => (
  <PlaceholderRoot>
    <NoDevicesIllustration />
    <p>Добавляйте сюда свои избранные девайсы или карточки действий</p>
  </PlaceholderRoot>
)

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  paddingBottom: theme.spacing(2),
}))

const Favorites: React.FC = () => {
  const navigate = useNavigate()
  const { data, isSuccess, isLoading } = useGetFavoritesDevicesQuery({})
  const devices = useMemo(
    () => (isSuccess ? data?.devices : []),
    [data?.devices, isSuccess]
  )

  const handleDeviceCardClick: DeviceCardClickHandler = (_event, device) => {
    navigate(
      generatePath(getRouteByAlias('deviceControls').path, {
        id: device.id,
      })
    )
  }

  return (
    <>
      <AppBar fixed header="Избранное" toolbar={<AddDeviceAndAvatar />} />
      {isLoading && <FullScreenSpinner />}
      {isSuccess && devices.length === 0 && <Placeholder />}
      {isSuccess && devices.length > 0 && (
        <Root disableEqualOverflow container spacing={1}>
          {devices.map((device) => (
            <Grid xs={6} md={4} lg={3} xl={2} key={device.id}>
              <DeviceCard onClick={handleDeviceCardClick} device={device} />
            </Grid>
          ))}
        </Root>
      )}
    </>
  )
}

export default Favorites
