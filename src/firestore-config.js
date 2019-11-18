var firebaseConfig = {
  apiKey: "AIzaSyAWp2g3at9SsF31yAkkDiEnoSEA1lKuv-w",
  authDomain: "thematchgame-cfe88.firebaseapp.com",
  databaseURL: "https://thematchgame-cfe88.firebaseio.com",
  projectId: "thematchgame-cfe88",
  storageBucket: "thematchgame-cfe88.appspot.com",
  messagingSenderId: "892977801586",
  appId: "1:892977801586:web:7635b21e67f8932a4255eb"

};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
db.settings({ timeStampsInSnapshots: true })

;
