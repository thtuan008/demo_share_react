import React, { useEffect, useRef, useState } from 'react'

const UseEffect = () => {

  const [end, setEnd] = useState(0)
  const [start, setStart] = useState(0)

  const changeStart = () => {
    setStart(!start)
  }
  const changeEnd = () => {
    setEnd(!end)
  }

  useEffect(() => {
    console.log('Change start one time');

    return () => {
      console.log('destroy 0');
    }
  }, [])

  useEffect(() => {
    console.log('Change start');

    return () => {
      console.log('destroy start');
    }
  }, [start])


  useEffect(() => {
    console.log('Always');

    return () => {
      console.log('destroy Always');
    }
  })
  
  return (
    <div className="m-5 p-3 bg-info text-white">
      <h2 onClick={() => { changeStart() }}><a>Change Start</a></h2>
      {/* <h2 onClick={() => { changeEnd() }}><a>Change End</a></h2> */}
    </div>
  )
}

export default UseEffect
