import { FC } from 'react'
import { Record } from '../../types/db'
import RecordRow from './row'

interface RecordsTableProps {
  records: Record[]
}

const RecordsTable: FC<RecordsTableProps> = ({ records }) => {
  return (
    <table>
      <tbody>
        {records.map(({ id, name, status, createdAt, remove }) => (
          <RecordRow
            key={id}
            name={name}
            status={status}
            createdAt={createdAt}
            remove={remove}
          />
        ))}
      </tbody>
    </table>
  )
}

export default RecordsTable
