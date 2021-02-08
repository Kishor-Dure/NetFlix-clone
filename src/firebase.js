import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC_1aMqJkLKoEeiDFA4RWGNXoCj5SPVCxk",
    authDomain: "netflix-clone-ebb1d.firebaseapp.com",
    projectId: "netflix-clone-ebb1d",
    storageBucket: "netflix-clone-ebb1d.appspot.com",
    messagingSenderId: "337698262439",
    appId: "1:337698262439:web:9d7a1c2ad405f48c743a82",
    measurementId: "G-8MS4XPZVP9"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {auth}
  export default db;
