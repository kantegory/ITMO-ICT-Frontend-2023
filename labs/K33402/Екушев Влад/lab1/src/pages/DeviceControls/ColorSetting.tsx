import {
  BrightnessHighOutlined,
  BrightnessLowOutlined,
} from '@mui/icons-material'
import { Box, sliderClasses, styled } from '@mui/material'
import React, { useMemo, useState } from 'react'
import Slider from 'src/components/Slider'
import Tabs, { TabsChangeHandler } from 'src/components/Tabs'
import { ArrayElement } from 'src/types/ArrayElement'
import { LightBulb, DeviceCapabilityType } from 'src/types/Device'
import exhaustivnessCheck from 'src/utils/exhaustivnessCheck'

const VERTICAL_SLIDER_HEIGHT = 336

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
})

const GradientSlider = styled(Slider)({
  [`& .${sliderClasses.vertical} .${sliderClasses.rail}`]: {
    background: 'linear-gradient(180deg, var(--gradient))',
  },
  [`& .${sliderClasses.rail}`]: {
    background: 'linear-gradient(270deg, var(--gradient))',
  },
})

const WarmLightSlider = styled(GradientSlider)(({ theme }) => ({
  color: theme.palette.background.paper,
  '--gradient': '#FFB100 0%, #FFE88C 100%',
}))

const ColdLightSlider = styled(GradientSlider)({
  color: '#6080bc',
  '--gradient': '#9FBDF7 0%, #F4F8FF 100%',
})

const RainbowSlider = styled(GradientSlider)({
  '--gradient': `rgba(255, 0, 0, 1) 0%,
      rgba(255, 154, 0, 1) 10%,
      rgba(208, 222, 33, 1) 20%,
      rgba(79, 220, 74, 1) 30%,
      rgba(63, 218, 216, 1) 40%,
      rgba(47, 201, 226, 1) 50%,
      rgba(28, 127, 238, 1) 60%,
      rgba(95, 21, 242, 1) 70%,
      rgba(186, 12, 248, 1) 80%,
      rgba(251, 7, 217, 1) 90%,
      rgba(255, 0, 0, 1) 100%`,
})

const COLOR_MODES = ['warm_light', 'cold_light', 'hsv'] as const
type ColorMode = ArrayElement<typeof COLOR_MODES>

const ColorSetting: React.FC<{ device: LightBulb }> = ({ device }) => {
  const [selectedColorMode, setSelectedColorMode] = useState<ColorMode>('hsv')
  const _state = device.capabilities[DeviceCapabilityType.COLOR_SETTING].state
  const [value, setValue] = useState(30)

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) return
    setValue(newValue)
  }

  const handleTabsChange: TabsChangeHandler = (_event, value) => {
    setSelectedColorMode(value as ColorMode)
    setValue(30)
  }

  const SliderComponent = useMemo(() => {
    switch (selectedColorMode) {
      case 'hsv':
        return (
          <RainbowSlider
            sx={{
              [`& .${sliderClasses.thumb}`]: {
                backgroundColor: `hsl(${360 - value}deg 100% 50%)`,
              },
            }}
            orientation="vertical"
            min={0}
            max={360}
            onChange={handleSliderChange}
            value={value}
          />
        )
      case 'warm_light':
        return (
          <WarmLightSlider
            iconBefore={
              <BrightnessHighOutlined sx={{ width: 32, height: 32 }} />
            }
            iconAfter={<BrightnessLowOutlined sx={{ width: 32, height: 32 }} />}
            orientation="vertical"
            onChange={handleSliderChange}
            value={value}
          />
        )
      case 'cold_light':
        return (
          <ColdLightSlider
            iconBefore={
              <BrightnessHighOutlined sx={{ width: 32, height: 32 }} />
            }
            iconAfter={<BrightnessLowOutlined sx={{ width: 32, height: 32 }} />}
            orientation="vertical"
            onChange={handleSliderChange}
            value={value}
          />
        )
      default:
        return exhaustivnessCheck(selectedColorMode)
    }
  }, [selectedColorMode, value])

  return (
    <Root>
      <Tabs
        items={[
          { label: 'Теплый свет', value: 'warm_light' },
          { label: 'Холодный свет', value: 'cold_light' },
          { label: 'Вручную', value: 'hsv' },
        ]}
        value={selectedColorMode}
        onChange={handleTabsChange}
      />
      <Box sx={{ height: VERTICAL_SLIDER_HEIGHT }}>{SliderComponent}</Box>
    </Root>
  )
}

export default ColorSetting
