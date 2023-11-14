// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAbq65PSi8GMjgS3RurixVjs2L8PpsMc8E',
  authDomain: 'trivia-game-951c0.firebaseapp.com',
  projectId: 'trivia-game-951c0',
  storageBucket: 'trivia-game-951c0.appspot.com',
  messagingSenderId: '239168468655',
  appId: '1:239168468655:web:6464b7dbf6d917c998465a',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// ios = 37484440686-0fvrtt0qehpnh3pvkh28viqflain2gla.apps.googleusercontent.com
// android = 37484440686-cmhjalqa6607jeblh1fa3bndnjk1l867.apps.googleusercontent.com