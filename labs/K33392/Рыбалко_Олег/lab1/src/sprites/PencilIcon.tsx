import { Sprite } from './Sprite'

export function PencilIcon({
  width = '1.5em',
  height = '1.5em',
  color = 'black',
}: {
  width?: string
  height?: string
  color?: string
}) {
  return <Sprite id="pencil" color={color} width={width} height={height} />
}

