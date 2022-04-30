import firebase from 'firebase/compat/app'
import 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { firebase as _ } from './secrets'

export const firebaseConfig = {
  apiKey: _.API_KEY,
  authDomain: _.AUTH_DOMAIN,
  projectId: _.PROJECT_ID,
  storageBucket: _.STORAGE_BUCKET,
  messagingSenderId: _.MESSAGING_SENDER_ID,
  appId: _.APP_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// TODO: check this
const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};
// end

const app = firebase.app()
const auth = firebase.auth()
const db = firebase.firestore()
const now = firebase.firestore.Timestamp.now()
const storage = firebase.storage()

export { app, auth, db, now, providers, storage }

console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(');
