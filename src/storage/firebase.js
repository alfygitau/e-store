import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBfsJ_hnQQ9_JWEpL9aiPr52IqCB_Jk4c",
  authDomain: "e-store-ff279.firebaseapp.com",
  projectId: "e-store-ff279",
  storageBucket: "e-store-ff279.appspot.com",
  messagingSenderId: "113447053354",
  appId: "1:113447053354:web:602e84989e01c3eb287b53",
  measurementId: "G-WS94PEHKEP",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
