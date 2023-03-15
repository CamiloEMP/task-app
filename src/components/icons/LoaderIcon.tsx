import { type SVGProps } from 'react'

export function LoaderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      className={`animate-spin ${props.className ?? ''}`}
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path
        d='M0 0h24v24H0z'
        stroke='none'
      />
      <path d='M12 3a9 9 0 1 0 9 9' />
    </svg>
  )
}
