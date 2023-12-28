import React, { useEffect, useLayoutEffect, useRef } from 'react'

const LayoutEffect = () => {
  const inputref =useRef(null)

    useLayoutEffect(() => {
        console.log("Inside use LAyout Effect");
        console.log(inputref.current.value);

    })

    useEffect(() => {
        // console.log("Inside Use Effect hook");
        inputref.current.value = "MOON"

    },[])

  return (
    <div>
      <input value="Abhimanyu " ref={inputref } />
    </div>
  )
}

export default LayoutEffect
