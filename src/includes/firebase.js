import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDIj4ROh98FxjmGbjjJIBVEw0fB8Vc-xDc",
    authDomain: "music-ee173.firebaseapp.com",
    projectId: "music-ee173",
    storageBucket: "music-ee173.appspot.com",
    appId: "1:1097617651065:web:0ddc3193ef9e3563faeba8"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentCollection = db.collection('comments');

export {
    auth,
    db,
    usersCollection,
    songsCollection,
    commentCollection,
    storage
}
