import {
  /*onSnapshot, */ collection,
  query,
  where,
  getDocs,
  addDoc,
  setDoc,
  doc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore'
import { database } from '../config/firebase'
import { useAuth } from '../hooks/useAuth'
import { Record } from '../types/db'

const api = {
  add: async (userId: string, record: Record) => {
    console.log({ userId, record })
    const recordsCollection = await collection(
      database,
      'users',
      userId,
      'records'
    )
    addDoc(recordsCollection, record)
  },
  remove: async (userId: string, recordId: string) => {
    console.log('borrado', { userId, recordId })
    await deleteDoc(doc(database, 'records', recordId))
  },
  onChange: async (userId, callback) => {
    const unsub = onSnapshot(doc(database, "cities", "SF"), (doc) => {
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      console.log(source, " data: ", doc.data());
    });
  }
}

export default api
