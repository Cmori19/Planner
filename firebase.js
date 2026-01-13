// firebase.js (compat SDK initialisation)
// Provides: window.fbAuth, window.fbDb
(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyCaybQkWFpo1PekHD59LckB_Za2WD6Q2W0",
    authDomain: "planner-94bdb.firebaseapp.com",
    projectId: "planner-94bdb",
    storageBucket: "planner-94bdb.firebasestorage.app",
    messagingSenderId: "615191337955",
    appId: "1:615191337955:web:92a680dae4e350bbb59ed6"
  };

  if (!window.firebase) {
    console.warn("Firebase SDK not loaded. Check script tags in index.html.");
    return;
  }

  if (!firebase.apps || !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  window.fbAuth = firebase.auth();
  window.fbDb = firebase.firestore();
  window.fbDb.settings({ ignoreUndefinedProperties: true });
})();
