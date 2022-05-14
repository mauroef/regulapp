import { NextPage } from 'next'
import { StackDivider, VStack } from '@chakra-ui/react'
import { Timestamp } from 'firebase/firestore'
import { useRecords } from '../../hooks/useDatabase'
import { Status } from '../../types/db'
import Seo from '../seo'
import RecordsHeader from './header'
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
      <VStack
        as={'section'}
        spacing={0}
        divider={<StackDivider borderColor='gray.300' />}
      >
        <RecordsHeader add={handleAdd} />
        <RecordsTable records={records} />
      </VStack>
    </>
  )
}

export default Records
