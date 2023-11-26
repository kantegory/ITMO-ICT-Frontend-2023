import { Sprite } from './Sprite'

export function HeartIcon({
  width = '1.5em',
  height = '1.5em',
  color = 'black',
  type = 'regular',
}: {
  width?: string
  height?: string
  color?: string
  type?: string
}) {
  return (
    <Sprite id={`${type}-heart`} color={color} width={width} height={height} />
  )
}

