import { FC, MouseEventHandler } from 'react'
import { Status } from '../../types/db'

interface RecordRowProps {
  name: string
  status: Status
  createdAt: Date
  remove: MouseEventHandler<HTMLButtonElement>
}

const RecordRow: FC<RecordRowProps> = ({ name, status, createdAt, remove }) => {
  return (
    <tr>
      <th>{createdAt.toLocaleString()}</th>
      <td>{name}</td>
      <th>{status}</th>
      <th>
        <button onClick={remove}>X</button>
      </th>
    </tr>
  )
}

export default RecordRow
