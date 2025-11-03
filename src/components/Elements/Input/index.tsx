import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  const {type, placeholder, name, className} = props
  
  return <input type={type} className={`text-sm border rounded w-full py-2 text-slate-700 focus:outline-none p-2 ${className}`} placeholder={placeholder} name={name} id={name} ref={ref}/> 
})

function InputForm(props) {
  const {label, name, type, placeholder, ref} = props
  return (
    <div className="mb-6">
      <label htmlFor={name}>{label}</label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  )
}

export {Input, InputForm}