import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  setDoc,
  doc,
  Timestamp,
} from 'firebase/firestore'
import { useAuth } from '../hooks/useAuth'
import { Record, Status } from '../types/db'
import api from '../api/db'

const RecordContext = createContext<any>({})

const RecordProvider = ({ children }: { children: ReactNode }) => {
  const [auth] = useAuth()
  const [records, setRecords] = useState([])
  const [status, setStatus] = useState('pending')

  // FIXME: receive record from params
  function add() {
    api.add(auth.uid, {
      name: 'sarasa',
      status: Status.IN_EVALUATION,
      createdAt: Timestamp.now().toDate(),
    })
  }

  // FIXME: sirve userId ?
  function remove(userId, recordId) {
    api.remove(userId, recordId)
  }

  setRecords(['uno', 'dos'])

  // useEffect(() => {
  //   console.log('records useEffect');
  //   // api.onChange(auth.uid, (records) => {
  //   //   setRecords(records)

  //   //   setStatus('resolved')
  //   // })
  //   setRecords(['uno', 'dos'])

  //   return () => setStatus('pending')
  // }, [auth.uid])

  // TODO: loading component
  if (status === 'pending') return <div>loading</div>
  else return <div>loading</div> // test

  const state = {records}//{ records }
  const actions = { add, remove }

  return (
    <RecordContext.Provider value={{ state, actions }}>
      {children}
    </RecordContext.Provider>
  )
}

export { RecordContext as default, RecordProvider as Provider }
