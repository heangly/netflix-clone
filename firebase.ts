// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAW6UKJPU48rtuRM-y-JNFIIUHoyvmg9x0',
  authDomain: 'netflix-clone-e15de.firebaseapp.com',
  projectId: 'netflix-clone-e15de',
  storageBucket: 'netflix-clone-e15de.appspot.com',
  messagingSenderId: '925645369115',
  appId: '1:925645369115:web:eda6e7dc0fa8e3b0eeadbe'
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
