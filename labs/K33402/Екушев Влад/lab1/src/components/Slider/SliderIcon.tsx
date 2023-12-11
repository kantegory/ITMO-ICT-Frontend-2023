import { styled } from '@mui/material'
import cx from 'classnames'
import React from 'react'
import { SLIDER_THUBM_WIDTH } from '.'

const Root = styled('div')(() => ({
  position: 'absolute',
  color: 'currentColor',
  zIndex: 1,
  width: SLIDER_THUBM_WIDTH,
  height: SLIDER_THUBM_WIDTH,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  pointerEvents: 'none',
  '&.SliderIcon--before': {
    left: 0,
  },
  '&.SliderIcon--after': {
    right: 0,
  },
  '&.SliderIcon--vertical': {
    '&.SliderIcon--before': {
      bottom: 0,
      left: 'unset',
    },
    '&.SliderIcon--after': {
      top: 0,
      right: 'unset',
    },
  },
}))

type SliderIconProps = {
  before?: boolean
  after?: boolean
  orientation: 'vertical' | 'horizontal'
}

const SliderIcon: React.FC<React.PropsWithChildren<SliderIconProps>> = ({
  before,
  after,
  orientation,
  children,
}) => {
  return (
    <Root
      className={cx('SliderIcon', {
        'SliderIcon--before': before,
        'SliderIcon--after': after,
        'SliderIcon--vertical': orientation === 'vertical',
      })}
    >
      {children}
    </Root>
  )
}

export default SliderIcon
