import React, { useEffect, useRef, useState } from 'react'

const FunctionalComponent = () => {

  const [testState, setTestState] = useState(true)
  const [start, setStart] = useState(1)
  const ref = useRef(null)

  console.log('window.location.href', window.location.href);

  const clickAction = () => {
    setTestState(!testState)

    const tmp = start === 0 ? 1 : 0
    setStart(tmp)
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
      <h2 onClick={() => { clickAction() }}><a>Function Component (Click here)</a></h2>

      <p>Hello {testState ? 'ACtion 1' : 'ACtion 2'}</p>

      <SubComponent start={ start } />      

      <SubComponent1 start={ start } />

    </div>
  )
}

export default FunctionalComponent


/* -------------------------------------------- */
/* -------------------------------------------- */
/* -------------------------------------------- */
/* Sub Component */
const SubComponent = ({ start = 0 }) => {

  console.log('render Sub Compoennt');

  useEffect(() => {
    return () => {
      console.log('destrtoy');
    }
  })

  const [count, setCount] = useState(start)

  return (
    <div className="m-5 p-3 bg-dark text-white" onClick={ () => { setCount(count + 1); }}>
      <h2>Sub Component</h2>
      <h3>Sub count: {count}, Props Start: { start }</h3>
    </div>
  )
}

/* -------------------------------------------- */
/* -------------------------------------------- */
/* -------------------------------------------- */
/* SubComponent1 */
const SubComponent1 = ({ start = 0 }) => {

  console.log('render Sub Compoennt 1');

  const [count, setCount] = useState(start)

  useEffect(() => {
    setCount(start)
  }, [start])

  return (
    <div className="m-5 p-3 bg-dark text-white" onClick={ () => { setCount(count + 1); }}>
      <h2>Sub Component 1</h2>
      <h3>Sub count: {count}, Props Start: { start }</h3>
    </div>
  )
}