import { NextPage } from 'next'
import { Timestamp } from 'firebase/firestore'
import { useRecords } from '../hooks/useDatabase'
import { Status } from '../types/db'

const RecordsScreen: NextPage = () => {
  const [records, add, remove] = useRecords()

  const handleAdd = () => {
    add({
      name: 'sarasa',
      status: Status.IN_EVALUATION,
      createdAt: Timestamp.now().toDate(),
    })
  }

  return (
    <div>
      <input name='text' type='text' />
      <button onClick={handleAdd}>Agregar</button>
      <ul>
        {records.map(({ id, name, status, createdAt, remove }) => (
          <li key={id}>
            <span>{name}</span>
            <span>{status}</span>
            <p>{createdAt.toLocaleString()}</p>
            <button onClick={remove}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecordsScreen
