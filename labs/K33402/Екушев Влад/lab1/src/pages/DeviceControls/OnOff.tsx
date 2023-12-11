import { alpha, styled } from '@mui/material'
import { useState } from 'react'
import { getTurnedOnState, getOnOffText } from 'src/components/DeviceCard'
import Switch from 'src/components/Switch'
import { LightBulb, Kettle, Thermostat } from 'src/types/Device'

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
})

const OnOffButton = styled('label')(({ theme }) => ({
  padding: theme.spacing(1.25, 2),
  paddingRight: theme.spacing(1.25),
  borderRadius: 100,
  boxShadow: '0 0 0 2px inset ' + alpha(theme.palette.text.primary, 0.12),
  fontFamily: theme.typography.fontFamily,
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  ...theme.mixins.button,
  '&:active': {
    transform: 'none',
  },
}))

const OnOff: React.FC<{
  device: LightBulb | Kettle | Thermostat
}> = ({ device }) => {
  const [isTurnedOn, setTurnedOn] = useState(getTurnedOnState(device))

  const handleOnOffChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setTurnedOn(checked)
  }

  return (
    <Root>
      <OnOffButton htmlFor="on-off-switch">
        {getOnOffText(isTurnedOn)}
        <Switch
          onChange={handleOnOffChange}
          checked={isTurnedOn}
          id="on-off-switch"
        />
      </OnOffButton>
    </Root>
  )
}

export default OnOff
