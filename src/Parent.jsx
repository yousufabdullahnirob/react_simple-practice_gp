import React from 'react'
import Child from './Child'

export default function Parent({ message }) {
  return (
    <div className='border p-3 mt-2 ms-4'>
        <h4>Parent</h4>
        <p>Received: {message}</p>
        <Child message={message} />
    </div>
  )
}
