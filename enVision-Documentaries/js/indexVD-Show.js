// Example: Load video data from Firestore
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ===== Firebase config =====
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// ===== DOM elements =====
const videoTitleDisplay = document.getElementById("videoTitleDisplay");
const videoDescDisplay = document.getElementById("videoDescDisplay");
const videoTopicDisplay = document.getElementById("videoTopicDisplay");
const iframeVideo = document.getElementById("previewVideo");

// ===== Get video ID from URL =====
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get("id");  // e.g., page.html?id=abc123

document.addEventListener("DOMContentLoaded", () => {
  if (!videoId) return;

  // Load only from science&nature-videos collection
  const videoDocRef = doc(db, "science&nature-videos", videoId);

  getDoc(videoDocRef).then((docSnap) => {
    if (docSnap.exists()) {
      const data = docSnap.data();

      // Fill page
      videoTitleDisplay.textContent = data.title;
      videoDescDisplay.innerHTML = data.description.replace(/\n/g, "<br>");
      videoTopicDisplay.textContent = data.topic;

      // Load YouTube iframe
      if (data.videoUrl) {
        iframeVideo.src = data.videoUrl;
      }
    } else {
      console.error("❌ No video found with ID:", videoId);
    }
  });
});