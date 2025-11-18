import React from 'react'

const Circle = ({children, className, variant = "red" , ...props}) => {
    const variants = {
        red: "bg-red-200 text-red-900 border-2 border-red-900",
        green: "bg-green-200 text-green-900 border-2 border-green-900",
        blue: "bg-blue-200 text-blue-900 border-2 border-blue-900",
        grey: "bg-grey-200 text-grey-900 border-2 border-grey-900"
    }

    return (
    <div 
    className={className + " " + "px-2 py-1.5 rounded-2xl" + " " + variants[variant]}
    {...props}
    >
        {children}
    </div>
  )
}

export default Circle