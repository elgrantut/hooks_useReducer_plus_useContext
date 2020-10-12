import React, { useContext } from 'react'
import { CountContext } from './App'

function ComponentF() {
  const countContext = useContext(CountContext)
  return (
    <div>
      <button
        onClick={() => countContext.countDispatch('increment')}
        className="btn btn-primary my-2"
      >
        Increment
      </button>
      <button
        onClick={() => countContext.countDispatch('decrement')}
        className="btn btn-primary m-2"
      >
        Decrement
      </button>
      <button
        onClick={() => countContext.countDispatch('reset')}
        className="btn btn-primary m-2"
      >
        Reset
      </button>
    </div>
  )
}

export default ComponentF
