import React,{cloneElement,Children}from 'react'


export const TodoHeader = ({children, loading}) => {
  return (
    <header>
        {/* {children} */}
        {/* {cloneElement(children, {loading:true})} */}
        {
          Children.toArray(children).map(child => cloneElement(child, {loading}))
        }
    </header>
  )
}
