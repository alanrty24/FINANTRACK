import React from 'react'
import { cn } from '../lib/utils'

const Input = ({children, type = "text" , required, className , placesholder = "", ...props}) => {
  return (
    <div className='flex flex-col gap-2 mb-4'>
        <label htmlFor="">{children}</label>
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