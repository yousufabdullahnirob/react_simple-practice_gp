import React from 'react'
import Parent from './Parent'

export default function Grandparent({ message }) {
  return (
    <div className='container border p-3 mt-3'>
        <h3>Grandparent</h3>
        <p>Received: {message}</p>
        <Parent message={message} />
     </div>
  )
}
