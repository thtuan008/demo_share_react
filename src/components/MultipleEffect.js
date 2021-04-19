import React, { useEffect, useState } from 'react'

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
    <div className="m-5 p-3 bg-info text-white">
      <h1>Use Multiple Effect</h1>
      <h2 onClick={() => { changeStart() }}><a>Change Start</a> { start ? 1 : 0}</h2>

      <h2 onClick={() => { changeEnd() }}><a>Change End</a> { end ? 1 : 0}</h2>
    </div>
  )
}

export default MultipleEffect
