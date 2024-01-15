import { Sprite } from './Sprite'

export function TrashIcon({
  width = '1.5em',
  height = '1.5em',
  color = 'red',
}: {
  width?: string
  height?: string
  color?: string
}) {
  return <Sprite id="trash" color={color} width={width} height={height} />
}

