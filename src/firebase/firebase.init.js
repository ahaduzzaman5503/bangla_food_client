import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_IMgRM9GBoKUkOhhv1ry6wdHC6hFXvYc",
  authDomain: "bd-cuisine.firebaseapp.com",
  projectId: "bd-cuisine",
  storageBucket: "bd-cuisine.appspot.com",
  messagingSenderId: "285635476672",
  appId: "1:285635476672:web:b90199be80acce1172c125"
};

const app = initializeApp(firebaseConfig);
export default app;
