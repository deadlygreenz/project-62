import firebase from "firebase";



// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyD92jIKw3jdpfXKTi0tFqLkeTYo5_BtQ-k",
  authDomain: "project-4976a.firebaseapp.com",
  databaseURL: "https://project-4976a-default-rtdb.firebaseio.com",
  projectId: "project-4976a",
  storageBucket: "project-4976a.appspot.com",
  messagingSenderId: "599321768803",
  appId: "1:599321768803:web:d0c8aefb24edb3a03d1956"   
};
 
firebase.initializeApp(firebaseConfig);

export default firebase.database()
  