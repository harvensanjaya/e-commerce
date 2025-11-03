import { forwardRef, useState } from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {type = 'text', placeholder, name, className = ''} = props
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === 'password'
  const actualType = isPassword && showPassword ? 'text' : type
  
  return (
    <div className="relative w-full">
      <input type={actualType} className={`text-sm border rounded w-full py-2 text-slate-700 focus:outline-none p-2 ${className}`} placeholder={placeholder} name={name} id={name} ref={ref}/>
      {
        isPassword && (
          <button type="button" className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-500 hover:text-slate-700" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <BsEyeSlashFill size={18} /> :  <BsEyeFill size={18} />}
          </button>
        )
      }   
    </div>
  )
})

// agar tidak error saat hot reload (React DevTools warning fix)
Input.displayName = 'Input'

interface InputFromProps {
  label: string,
  name: string,
  type?: string,
  placeholder?: string,
  className?: string
}

function InputForm({
  label, 
  name,
  type = 'text',
  placeholder,
  className
} : InputFromProps) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className='block mb-1 text-sm font-medium text-slate700'>{label}</label>
      <Input name={name} type={type} placeholder={placeholder} className={className}/>
    </div>
  )
}

export {Input, InputForm}