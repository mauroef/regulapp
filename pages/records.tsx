import React from 'react'

import { useRecords } from '../hooks/useDatabase'

const RecordsScreen = () => {
  const [records, add] = useRecords()

  function handleAdd(e) {
    e.preventDefault()

    add(e.target.text.value)

    e.target.text.value = ''
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input name='text' type='text' />
        <button type='submit'>Agregar</button>
      </form>
      <ul>
        {records.map(({ id, text, remove }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={remove}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecordsScreen
