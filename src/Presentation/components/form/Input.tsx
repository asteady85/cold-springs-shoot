import React, {ReactElement} from 'react'
import './Input.scss'

interface propTypes {
  label:string,
  type: string,
  placeholder: string,
  name: string,
  value: string,
  icon: ReactElement,
  handleChange: (value: string, prop: string) => void
}
const Input = ({ label, type, placeholder, name, value, icon, handleChange }: propTypes): JSX.Element => {
  return (
    <>
      <span className='icon'>{icon}</span>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value, name)}
      />
    </>
  )
}

export default Input
