// ===== Firebase and Auth imports =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

window.addEventListener("DOMContentLoaded", () => {

  // ===== Firebase configuration =====
  const firebaseConfig = {
    apiKey: "AIzaSyB_aEQJrZILdy2JYl6HbLwT43myJhVJH6g",
    authDomain: "envision-ed5f3.firebaseapp.com",
    projectId: "envision-ed5f3",
    storageBucket: "envision-ed5f3.appspot.com",   // ✅ fixed
    messagingSenderId: "202691344541",
    appId: "1:202691344541:web:2f6c93e7f5138adf127c74",
    measurementId: "G-3NB50YD8F0"
  };

  // ===== Initialize Firebase =====
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  // ---------- IMAGE PREVIEW ----------
  const imageInput = document.getElementById("articleImage");
  const preview = document.getElementById("previewImage");

  imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      preview.src = URL.createObjectURL(file);
      preview.style.display = "block";
    }
  });

  // ---------- SAVE ARTICLE ----------
 document.getElementById("saveArticle").addEventListener("click", async () => {
    const topic = document.getElementById("topic-select").value;
    const title = document.getElementById("articleTitle").value.trim();
    const body = document.getElementById("articleBody").value.trim();
    const file = imageInput.files[0];

    if (!title || !body || !topic) {
      alert("⚠️ Please fill all fields.");
      return;
    }

    let imageUrl = "";

    try {
        if (file) {
            const storageRef = ref(storage, "articles/" + Date.now() + "_" + file.name);
            await uploadBytes(storageRef, file);
            imageUrl = await getDownloadURL(storageRef);
        }

        // Normalize (for lookup)
        function normalize(str) {
          return str.trim().toLowerCase();
        }

        // Capitalize first letter of each word (for saving/display)
        function toTitleCase(str) {
          return str.replace(/\w\S*/g, (word) => {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
          });
        }

        // Use only lowercase keys for mapping
        const topicCollectionMap = {
          "geography": "geography-articles",
          "history": "history-articles",
          "languages": "languages-articles",
          "biology": "biology-articles",
          "health": "health-articles",
          "technology": "technology-articles",
          "sports": "sports-articles",
          "hobbies": "hobbies-articles",
          "travel": "travel-articles",
          "food": "food-articles",
          "spirituality & philosophy": "spirituality&philosophy-articles",
          "politics": "politics-articles",
          "arts": "arts-articles",
          "chemistry": "chemistry-articles",
          "mathematics": "mathematics-articles",
          "physics": "physics-articles",
          "astronomy": "astronomy-articles",
          "social sciences": "social-articles",
          "economics": "economics-articles"
        };

        const rawTopic = document.getElementById("topic-select").value;
        const normalizedTopic = normalize(rawTopic); // for lookup
        const topic = toTitleCase(rawTopic); // for saving/display
        const collectionName = topicCollectionMap[normalizedTopic] || "general-articles";

        await addDoc(collection(db, collectionName), {
          topic, // Saved like "Arts", "Social Sciences"
          title,
          body,
          imageUrl,
          createdAt: serverTimestamp()
        });

        alert("✅ Article saved successfully!");
        document.getElementById("articleTitle").value = "";
        document.getElementById("articleBody").value = "";
        document.getElementById("topic-select").value = "";
        imageInput.value = "";
        preview.src = "";
        preview.style.display = "none";

    } catch (error) {
        console.error("❌ Error saving article: ", error);
        alert("Failed to save article. Check console.");
    }
});

});