import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database';
import 'firebase/storage'

 const Config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROYECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER,
    appId: process.env.APP_ID,
  };

  firebase.initializeApp(Config);

  export const { auth } = firebase;
  export const storage = firebase.storage();
  export const database = firebase.database();

  export const provider = new firebase.auth.FacebookAuthProvider();