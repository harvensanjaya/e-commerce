import { ButtonHTMLAttributes, FC} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string
}

const Button: FC<ButtonProps> = ({
  className = "bg-black text-white",
  children="...",
  onClick= () => {},
  type="button",
  ...rest
}) => {
  return (
    <button
      className={`rounded-md h-10 px-3 ${className}`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button