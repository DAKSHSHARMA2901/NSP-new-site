import React from 'react'

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string }

export const GoPlus = ({ size, width, height, ...props }: IconProps) => {
  const w = width ?? (size ?? '1em')
  const h = height ?? (size ?? '1em')
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={w} height={h} {...(props as any)}>
      <path d="M11 11V6a1 1 0 112 0v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h5z" />
    </svg>
  )
}

export const GoChevronRight = ({ size, width, height, ...props }: IconProps) => {
  const w = width ?? (size ?? '1em')
  const h = height ?? (size ?? '1em')
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={w} height={h} {...(props as any)}>
      <path d="M9.29 6.71a1 1 0 011.42-1.42l5 5a1 1 0 010 1.42l-5 5a1 1 0 11-1.42-1.42L13.59 12 9.29 7.71z" />
    </svg>
  )
}
