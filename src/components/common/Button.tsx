type Variants = 'primary'

interface Props {
  children: React.ReactNode
  variant: Variants
  className?: string
  [key: string]: unknown
}
const colors = {
  primary: 'bg-emerald-200 text-emerald-600 hover:border-emerald-600',
}

export const Button = ({ children, variant = 'primary', className, ...rest }: Props) => {
  return (
    <button
      className={`${colors[variant]} ${
        className ?? ''
      } rounded-md border-2 border-transparent font-semibold transition-colors`}
      {...rest}
    >
      {children}
    </button>
  )
}
