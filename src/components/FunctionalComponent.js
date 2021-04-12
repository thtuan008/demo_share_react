import React, { useEffect, useRef, useState } from 'react'

import UseEffect from './UseEffect'

const FunctionalComponent = () => {

  const [testState, setTestState] = useState(true)
  const [start, setStart] = useState(1)
  const ref = useRef(null)

  const gbWin = document.querySelector('body')
    console.log('window', gbWin);

  const clickAction = () => {
    setTestState(!testState)

    const tmp = start === 0 ? 1 : 0
    setStart(tmp)
  }

  useEffect(() => {
    console.log('useEffect');
    /* componentWillUnmount */
    return () => {
      console.log('destroy');
    }
  }, [])


  return (
    <React.Fragment>
      {/* HTML HERE */}
      <h2 onClick={() => { clickAction() }}><a>Function Component (Click here)</a></h2>

      <span>Hello {testState ? 'ACtion 1' : 'ACtion 2'}</span>

      { start &&
        <SubComponent start={ start } />      
      }

      <SubComponent1 start={ start } />

      { start &&
        <UseEffect />      
      }

    </React.Fragment>
  )
}

export default FunctionalComponent


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
    <div className="" style={{ backgroundColor: '#fafafa' }} onClick={ () => { setCount(count + 1); }}>
      <h2>Sub Component</h2>
      <h3>Sub count: {count}, Props Start: { start }</h3>
    </div>
  )
}
const SubComponent1 = ({ start = 0 }) => {

    console.log('render Sub Compoennt 1');

  const [count, setCount] = useState(start)

  useEffect(() => {
    setCount(start)
  }, [start])

  return (
    <div className="" style={{ backgroundColor: '#fafafa' }} onClick={ () => { setCount(count + 1); }}>
      <h2>Sub Component 1</h2>
      <h3>Sub count: {count}, Props Start: { start }</h3>
    </div>
  )
}