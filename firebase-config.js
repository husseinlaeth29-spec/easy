// ============================================
// إعدادات Firebase
// عدّل القيم التالية بمعلومات مشروعك من Firebase Console
// Project Settings > عام (General) > تطبيقات الويب (Your apps) > SDK setup and configuration
// ============================================
const firebaseConfig = {
  apiKey: "AIzaSyCfx09bhpaEjVFbr5F8HiphWHt8ruPFcH0",
  authDomain: "easy-d5c51.firebaseapp.com",
  databaseURL: "https://easy-d5c51-default-rtdb.firebaseio.com",
  projectId: "easy-d5c51",
  storageBucket: "easy-d5c51.firebasestorage.app",
  messagingSenderId: "606721553029",
  appId: "1:606721553029:web:6b2f7f2c0c677db2cd6fec"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
