import { useContext } from 'react'
import RecordContext from '../context/dbContext'

export function useRecords() {
  const {
    state: { records },
    actions: { add, remove },
  } = useContext(RecordContext)

  return [
    records.map((record) => ({
      ...record,
      remove: () => remove(record.id),
    })),
    add,
  ]
}
