import { FC } from 'react'
import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react'
import { Record } from '../../types/db'
import RecordRow from './row'

interface RecordsTableProps {
  records: Record[]
}

const RecordsTable: FC<RecordsTableProps> = ({ records }) => {
  return (
    <TableContainer>
      <Table variant={'simple'}>
        <Thead>
          <Tr>
            <Th>Fecha</Th>
            <Th>Nombre</Th>
            <Th>Estado</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {records.map(({ id, name, status, createdAt, remove }) => (
            <RecordRow
              key={id}
              name={name}
              status={status}
              createdAt={createdAt}
              remove={remove}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default RecordsTable
