import { createContext, useEffect, useState, ReactNode } from 'react'
import { useAuth } from '../hooks/useAuth'
import api from '../api/db'
import { Status } from '../types/auth'
import { Record } from '../types/db'

const RecordContext = createContext<any>({})

const RecordProvider = ({ children }: { children: ReactNode }) => {
  const [auth] = useAuth()
  const [records, setRecords] = useState<Record[]>([])
  const [status, setStatus] = useState<Status>(Status.PENDING)

  function add(record: Record) {
    api.add(auth.uid, record)
  }

  function remove(recordId: string) {
    api.remove(auth.uid, recordId)
  }

  useEffect(() => {
    api.onChange(auth.uid, (records: Record[]) => {
      setRecords(records)
      setStatus(Status.RESOLVED)
    })
    return () => setStatus(Status.PENDING)
  }, [auth.uid])

  // TODO: loading component
  if (status === Status.PENDING) return <div>loading</div>

  const state = { records }
  const actions = { add, remove }

  return (
    <RecordContext.Provider value={{ state, actions }}>
      {children}
    </RecordContext.Provider>
  )
}

export { RecordContext as default, RecordProvider as Provider }
