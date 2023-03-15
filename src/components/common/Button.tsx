type Variants = 'primary' | 'secondary'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

interface Props extends ButtonProps {
  children: React.ReactNode
  variant: Variants
  className?: string
  icon?: React.ReactNode
  [key: string]: unknown
}
const colors = {
  primary: 'bg-emerald-200 text-emerald-600 hover:border-emerald-600',
  secondary: 'bg-red-200 text-red-600 hover:border-red-600',
}

export const Button = ({
  children,
  variant = 'primary',
  className,
  icon: Icon,
  ...rest
}: Props) => {
  return (
    <button
      className={`${colors[variant]} ${
        className ?? ''
      } flex items-center justify-center gap-1 rounded-md border-2 border-transparent font-semibold transition-colors`}
      {...rest}
    >
      {Icon && Icon}
      {children}
    </button>
  )
}
