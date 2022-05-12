import { NextPage } from 'next'
import { Timestamp } from 'firebase/firestore'
import { useRecords } from '../../hooks/useDatabase'
import { Status } from '../../types/db'
import Seo from '../seo'
import RecordsTable from './table'

const Records: NextPage = () => {
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
      <section>
        <input name='text' type='text' />
        <button onClick={handleAdd}>Agregar</button>
        <RecordsTable records={records} />
      </section>
    </>
  )
}

export default Records
