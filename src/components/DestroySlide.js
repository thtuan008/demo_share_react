import React, { useEffect, useRef, useState } from 'react'

import UseEffect from './UseEffect'

const Destroy = () => {

  const [testState, setTestState] = useState(true)
  const [destroy, setDestroy] = useState(1)

  const gbWin = document.querySelector('body')
    console.log('window', gbWin);

  const clickAction = () => {
    setTestState(!testState)

    const tmp = destroy === 0 ? 1 : 0
    setDestroy(tmp)
  }

  useEffect(() => {
    console.log('useEffect');
    return () => {
      console.log('destroy');
    }
  }, [])


  return (
    <div className="m-5 p-3 bg-info text-white">
      {/* HTML HERE */}
      <h1>Destroy Slide</h1>
      <h2 onClick={() => { clickAction() }}><a>Destroy (Click here)</a></h2>

      <p>Hello {testState ? 'ACtion 1' : 'ACtion 2'}</p>

      { destroy &&
        <SubComponent start={ destroy } />      
      }

      <SubComponent start={ destroy } />

    </div>
  )
}

export default Destroy


/* -------------------------------------------- */
/* -------------------------------------------- */
/* -------------------------------------------- */
/* Sub Component */
const SubComponent = ({ start = 0 }) => {

  console.log('render Sub Compoennt');

  useEffect(() => {
    return () => {
      console.log('Sub Component destrtoy');
    }
  })

  const [count, setCount] = useState(start)

  return (
    <div className="m-5 p-3 bg-dark text-white" onClick={ () => { setCount(count + 1); }}>
      <h3>Sub count: {count}, Props Start: { start }</h3>
    </div>
  )
}
