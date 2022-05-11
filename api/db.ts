import {
  collection,
  query,
  doc,
  addDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore'
import { database } from '../config/firebase'
import { Record, Status } from '../types/db'

const api = {
  add: async (userId: string, record: Record) => {
    const recordsCollection = await collection(
      database,
      'users',
      userId,
      'records'
    )
    addDoc(recordsCollection, record)
  },
  remove: async (userId: string, recordId: string) => {
    const recordsCollection = await collection(
      database,
      'users',
      userId,
      'records'
    )
    deleteDoc(doc(recordsCollection, recordId))
  },
  onChange: async (userId: string, callback: Function) => {
    const q = query(collection(database, 'users', userId, 'records'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const records: Record[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        status: Status.IN_EVALUATION,
        createdAt: new Date(doc.data().createdAt.seconds * 1000),
      }))

      callback(records)
    })

    return () => {
      unsubscribe()
    }
  },
}

export default api
