// ===== Firebase and Auth imports =====
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.addEventListener("DOMContentLoaded", () => {

  // ===== Firebase configuration =====
  const firebaseConfig = {
    apiKey: "AIzaSyB_aEQJrZILdy2JYl6HbLwT43myJhVJH6g",
    authDomain: "envision-ed5f3.firebaseapp.com",
    projectId: "envision-ed5f3",
    storageBucket: "envision-ed5f3.appspot.com",
    messagingSenderId: "202691344541",
    appId: "1:202691344541:web:2f6c93e7f5138adf127c74",
    measurementId: "G-3NB50YD8F0"
  };

  // ===== Initialize Firebase =====
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  // ===== DOM elements =====
  const videoInput = document.getElementById("videoUrl");
  const previewContainer = document.getElementById("previewVideo");
  const submitBtn = document.getElementById("submitVideo");
  const topicSelect = document.getElementById("topic-select");
  const topicDesc = document.getElementById("topic-desc");
  const videoTitleInput = document.getElementById("videoTitle");
  const videoDescInput = document.getElementById("videoDes");

  // ===== Helper: convert YouTube URL to embed =====
  function toEmbedURL(url) {
    url = url.trim();
    if (url.includes("watch?v=")) {
      url = url.replace("watch?v=", "embed/");
    }
    return url;
  }

  // ===== Live preview using <iframe> =====
  videoInput.addEventListener("input", () => {
    const embedURL = toEmbedURL(videoInput.value);
    if (embedURL) {
      // replace <img> with iframe preview
      previewContainer.outerHTML = `<iframe id="previewVideo" width="300" height="170" src="${embedURL}" frameborder="0" allowfullscreen></iframe>`;
    } else {
      previewContainer.outerHTML = `<img id="previewVideo" src="" style="display:none; width:200px;">`;
    }
  });

  // ===== Save video to Firestore =====
  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const videoUrl = toEmbedURL(videoInput.value);
    const topic = topicSelect.value;
    const title = videoTitleInput.value.trim();
    const description = videoDescInput.value.trim();

    if (!videoUrl || !topic || !title || !description) {
      alert("⚠️ Please fill all fields.");
      return;
    }

    try {
      const topicCollectionMap = {
        "Science & Nature": "science&nature-videos",
        "Technology & Engineering": "technology&engineering-videos",
        "Society & Culture": "society&culture-videos",
        "Business & Economics": "business&economics-videos",
        "Lifestyle & Entertainment": "lifestyle&entertainment-videos",
      };

      const collectionName = topicCollectionMap[topic] || "general-videos";

      await addDoc(collection(db, collectionName), {
        topic,
        title,
        description,
        videoUrl,
        createdAt: serverTimestamp()
      });

      alert("✅ Video saved successfully!");

      // Clear inputs and preview
      videoTitleInput.value = "";
      videoDescInput.value = "";
      topicSelect.value = "";
      videoInput.value = "";
      previewContainer.outerHTML = `<img id="previewVideo" src="" style="display:none; width:200px;">`;

    } catch (error) {
      console.error("❌ Error saving video:", error);
      alert("Failed to save video. Check console.");
    }
  });

  // ===== Show topic description =====
  topicSelect.addEventListener("change", () => {
    const selectedOption = topicSelect.options[topicSelect.selectedIndex];
    topicDesc.textContent = selectedOption.dataset.desc || "";
  });
});