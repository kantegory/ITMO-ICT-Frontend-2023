import Sprites from '@/assets/sprites.svg'

export function Sprite({
  id,
  color,
  width = '1.5em',
  height = '1.5em',
}: {
  id: string
  color: string
  width?: string
  height?: string
}) {
  return (
    <svg fill={color} width={width} height={height}>
      <use xlinkHref={`${Sprites}#${id}`} />
    </svg>
  )
}

