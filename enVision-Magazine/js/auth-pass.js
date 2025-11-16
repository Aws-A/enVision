  import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  // Firebase config (same as in index.js)
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
    app = getApp(); // reuse existing app
  }
  const auth = getAuth(app);

  // When user is logged in, show their email
  onAuthStateChanged(auth, (user) => {
    if (user) {
      document.getElementById("userEmail").textContent = user.email;
    }
  });

    const writeLink = document.getElementById("writeLink");

  writeLink.addEventListener("click", (e) => {
    e.preventDefault(); // stop default navigation first
    const user = auth.currentUser;

    if (user) {
      // User is logged in → go to article page
      window.location.href = "writing-article.html";
    } else {
      // User not logged in → alert + redirect
      alert("Please log in to write an article.");
      window.location.href = "../index.html"; // outside folder
    }
  });