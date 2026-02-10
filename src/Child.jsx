import React from 'react'

export default function Child({ message }) {
  return (
    <div className='border p-3 mt-2 ms-4'>
        <h5>Child</h5>
        <p>Received from App via drilling: <strong>{message}</strong></p>
    </div>
  )
}
