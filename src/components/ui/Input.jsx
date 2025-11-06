import React from 'react'
import { cn } from '../lib/utils'

const Input = ({label, type = "text" , required, className, classNameDiv , placesholder = "", ...props}) => {
  return (
    <div className= {cn(classNameDiv + " ")}>
        {label && (<label htmlFor="" className='text-base md:text-lg'>{label}</label>)}
        <input 
        className={cn(className + ` p-4 border-2 rounded-2xl border-[#03045e]`)}
        type= {type}
        required = {required}
        placeholder= {placesholder}
        {...props} 
        />
    </div>
  )
}

export default Input