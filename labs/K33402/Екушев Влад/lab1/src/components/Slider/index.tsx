import React from 'react'
import {
  Slider as MUIBaseSlider,
  sliderClasses,
  SliderProps as MUISliderProps,
} from '@mui/base/Slider'
import { alpha, styled } from '@mui/material'
import cx from 'classnames'
import SliderIcon from './SliderIcon'

export const SLIDER_THUBM_WIDTH = 66

const Root = styled('div')({
  padding: '0 33px',
  display: 'flex',
  position: 'relative',
  '&:not(.Slider--vertical)': {
    width: '100%',
  },
  '&.Slider--vertical': {
    padding: '33px 0',
    height: '100%',
  },
})

const StyledSlider = styled(MUIBaseSlider)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: SLIDER_THUBM_WIDTH,
  width: '100%',
  display: 'inline-block',
  position: 'relative',
  cursor: 'pointer',
  touchAction: 'none',
  borderRadius: 100,
  WebkitTapHighlightColor: 'transparent',
  [`&.${sliderClasses.vertical}`]: {
    height: '100%',
    width: SLIDER_THUBM_WIDTH,
  },
  [`& .${sliderClasses.rail}`]: {
    display: 'block',
    position: 'absolute',
    height: 'inherit',
    width: `calc(100% + ${SLIDER_THUBM_WIDTH}px)`,
    marginTop: 0,
    marginLeft: -SLIDER_THUBM_WIDTH / 2,
    borderRadius: 100,
    background: theme.palette.primary.main,
    border: '4px solid ' + theme.palette.background.default,
  },
  [`&.${sliderClasses.vertical} .${sliderClasses.rail}`]: {
    width: 'inherit',
    marginTop: -SLIDER_THUBM_WIDTH / 2,
    height: `calc(100% + ${SLIDER_THUBM_WIDTH}px)`,
    marginLeft: 0,
  },
  [`& .${sliderClasses.thumb}`]: {
    position: 'absolute',
    width: SLIDER_THUBM_WIDTH,
    height: SLIDER_THUBM_WIDTH,
    borderRadius: '50%',
    outline: 'none',
    border: '4px solid ' + theme.palette.background.paper,
    boxShadow: '0 0 0 3px inset ' + alpha(theme.palette.text.primary, 0.12),
    backgroundColor: 'transparent',
    left: '50%',
    transform: 'translate(-50%, 0%)',
    zIndex: 10,
    transition: 'all 150ms ease',
  },
  [`&.${sliderClasses.dragging} .${sliderClasses.thumb}`]: {
    transition: 'all 0ms linear',
  },
  [`&.${sliderClasses.vertical} .${sliderClasses.thumb}`]: {
    transform: 'translate(-50%, 50%)',
  },
}))

type SliderProps = {
  min?: number
  max?: number
  step?: number
  defaultValue?: number
  iconBefore?: React.ReactNode
  iconAfter?: React.ReactNode
  orientation: 'vertical' | 'horizontal'
} & Omit<
  MUISliderProps,
  'min' | 'max' | 'step' | 'defaultValue' | 'orientation'
>

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 30,
  iconBefore,
  iconAfter,
  orientation,
  className,
  ...props
}) => {
  return (
    <Root
      className={cx(className, 'Slider', {
        'Slider--vertical': orientation === 'vertical',
      })}
    >
      {iconBefore && (
        <SliderIcon orientation={orientation} before>
          {iconBefore}
        </SliderIcon>
      )}
      <StyledSlider
        {...props}
        track={false}
        min={min}
        max={max}
        step={step}
        orientation={orientation}
        defaultValue={defaultValue}
      />
      {iconAfter && (
        <SliderIcon orientation={orientation} after>
          {iconAfter}
        </SliderIcon>
      )}
    </Root>
  )
}

export default Slider
