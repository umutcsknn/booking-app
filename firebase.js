
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDunLdvKqcZPXyfwZCso1nR8_3MQ0FBy9I",
  authDomain: "booking-app-4f69c.firebaseapp.com",
  projectId: "booking-app-4f69c",
  storageBucket: "booking-app-4f69c.appspot.com",
  messagingSenderId: "997893823467",
  appId: "1:997893823467:web:16352365c64ef112f057ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export{auth, db};