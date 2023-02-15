import firebase from "firebase/compat/app"
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqc9MX8BY8Zft_U85mbdkKF_9BxBNvaeE",
  authDomain: "dem-ngay-yeu-7d7c7.firebaseapp.com",
  projectId: "dem-ngay-yeu-7d7c7",
  storageBucket: "dem-ngay-yeu-7d7c7.appspot.com",
  messagingSenderId: "77596243114",
  appId: "1:77596243114:web:b62f1f39894257dc314cd3",
  measurementId: "G-DDTYP82L0L"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
export {db} ;