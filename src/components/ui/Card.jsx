import React from 'react'
import { cn } from '../lib/utils'

const Card = ({children, className, variant = "primary" , ...props}) => {
    const variants = {
        primary: "",
    }
 return (
    <section 
    className={cn(className + variants[variant])} 
    {...props}
    >
        {children}
    </section>
  )
}

export default Card