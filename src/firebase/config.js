import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDQA7rzBvIx9eMYS0bpbu7J-uingnIWwsM",
    authDomain: "miniblog-dd624.firebaseapp.com",
    projectId: "miniblog-dd624",
    storageBucket: "miniblog-dd624.appspot.com",
    messagingSenderId: "466035723511",
    appId: "1:466035723511:web:bf7bd697d57b4248be17f2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };