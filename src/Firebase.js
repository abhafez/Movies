import firebase from 'firebase/app'
import Rebase from 're-base'
import 'firebase/database'
import 'firebase/auth'

var config = {
  apiKey: 'AIzaSyD6Blly0Zi9VruUMtZg2_R009hYAgczqBg',
  authDomain: 'my-movies-9569a.firebaseapp.com',
  databaseURL: 'https://my-movies-9569a.firebaseio.com',
  projectId: 'my-movies-9569a',
  storageBucket: 'my-movies-9569a.appspot.com',
  messagingSenderId: '691351968776'
}
const app = firebase.initializeApp(config)

export const base = Rebase.createClass(app.database())
export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const database = firebase.database()

export default firebase
