import { NextPage } from 'next'
import { Timestamp } from 'firebase/firestore'
import { useRecords } from '../../hooks/useDatabase'
import { Status } from '../../types/db'
import Seo from '../seo'

const RecordsList: NextPage = () => {
  const [records, add] = useRecords()

  const handleAdd = () => {
    add({
      name: 'sarasa',
      status: Status.IN_EVALUATION,
      createdAt: Timestamp.now().toDate(),
    })
  }

  return (
    <>
      <Seo
        title='Listado de Registros'
        description='Muestra un listado de los registros generado en el sistema'
        image=''
      />
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
    </>
  )
}

export default RecordsList
