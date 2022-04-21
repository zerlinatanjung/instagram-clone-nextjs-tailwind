// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA5e0yXneF47jB_gYaVQkTVs-ZRJbgkl_w',
  authDomain: 'insta-2-yt-ee86b.firebaseapp.com',
  projectId: 'insta-2-yt-ee86b',
  storageBucket: 'insta-2-yt-ee86b.appspot.com',
  messagingSenderId: '175283740933',
  appId: '1:175283740933:web:70870de520dd04f78d976c',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
