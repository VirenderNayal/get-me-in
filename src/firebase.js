import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBcoPKCP4sM2oPWHy0t-4PcoW2-7WU-k5s",
    authDomain: "getmein-testing.firebaseapp.com",
    projectId: "getmein-testing",
    storageBucket: "getmein-testing.appspot.com",
    messagingSenderId: "551370768590",
    appId: "1:551370768590:web:c51605f19f93f3edee909f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;