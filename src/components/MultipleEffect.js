import React, { useEffect, useRef, useState } from 'react'

const MultipleEffect = () => {

  const [end, setEnd] = useState(0)
  const [start, setStart] = useState(0)

  const changeStart = () => {
    setStart(!start)
  }
  const changeEnd = () => {
    setEnd(!end)
  }

  useEffect(() => {
    console.log('Change start');
  }, [start])


  useEffect(() => {
    console.log('Change end');
  }, [end])
  
  return (
    <React.Fragment>
      <h2 onClick={() => { changeStart() }}><a>Change Start</a></h2>
      <h2 onClick={() => { changeEnd() }}><a>Change End</a></h2>
    </React.Fragment>
  )
}

export default MultipleEffect
