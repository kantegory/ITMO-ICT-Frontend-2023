import { styled } from '@mui/material'
import cx from 'classnames'
import React, { useState } from 'react'

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  width: '100%',
}))

const Item = styled('button')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  padding: theme.spacing(1, 2),
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '13px',
  lineHeight: '16px',
  fontWeight: 500,
  backgroundColor: theme.palette.background.default,
  borderRadius: 100,
  ...theme.mixins.button,
  ['&.Tabs__item--active']: {
    backgroundColor: theme.palette.primary.main,
  },
}))

export type TabsChangeHandler = (
  event: React.SyntheticEvent | null,
  value: string
) => void

type TabItem = {
  label: string
  value: string
}

type TabsProps = {
  items: TabItem[]
  value?: string | null
  defaultValue?: string | null
  onChange?: TabsChangeHandler
}

const Tabs: React.FC<TabsProps> = ({
  value: propsValue,
  items,
  defaultValue = items[0].value,
  onChange,
}) => {
  const [innerValue, setInnerValue] = useState(defaultValue)
  const value = propsValue !== undefined ? propsValue : innerValue

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setInnerValue(newValue)
    onChange?.(e, newValue)
  }

  return (
    <Root>
      {items.map((item, i) => (
        <Item
          className={cx({
            'Tabs__item--active': value === item.value,
          })}
          onClick={(e) => handleChange(e, item.value)}
          key={i}
        >
          {item.label}
        </Item>
      ))}
    </Root>
  )
}

export default Tabs
