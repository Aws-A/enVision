import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_aEQJrZILdy2JYl6HbLwT43myJhVJH6g",
  authDomain: "envision-ed5f3.firebaseapp.com",
  projectId: "envision-ed5f3",
  storageBucket: "envision-ed5f3.firebasestorage.app",
  messagingSenderId: "202691344541",
  appId: "1:202691344541:web:2f6c93e7f5138adf127c74",
  measurementId: "G-3NB50YD8F0"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);

// === Track authentication state ===
let currentUser = null;

onAuthStateChanged(auth, (user) => {
  currentUser = user;

  if (user) {
    document.getElementById("userEmail").textContent = user.email;
  }
});

// === CLICK EVENT ===
const createLink = document.getElementById("createLink");

createLink.addEventListener("click", (e) => {
  e.preventDefault();

  if (currentUser) {
    window.location.href = "creating-video.html";
  } else {
    alert("Please log in to create a video.");
    window.location.href = "../index.html";
  }
});
