import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  // Your web app's Firebase configuration
  databaseURL: "https://gmgn-clone-database-default-rtdb.firebaseio.com",
  // Add other config options if needed
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
