import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/storage'
import { firebase as _ } from './secrets'

export const firebaseConfig = {
  apiKey: _.API_KEY,
  authDomain: _.AUTH_DOMAIN,
  projectId: _.PROJECT_ID,
  storageBucket: _.STORAGE_BUCKET,
  messagingSenderId: _.MESSAGING_SENDER_ID,
  appId: _.APP_ID,
}

if (!getApps().length) {
  initializeApp(firebaseConfig)
}

export const auth = getAuth()
