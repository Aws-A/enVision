import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB_aEQJrZILdy2JYl6HbLwT43myJhVJH6g",
  authDomain: "envision-ed5f3.firebaseapp.com",
  projectId: "envision-ed5f3",
  storageBucket: "envision-ed5f3.appspot.com",
  messagingSenderId: "202691344541",
  appId: "1:202691344541:web:2f6c93e7f5138adf127c74",
  measurementId: "G-3NB50YD8F0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const articleCollections = [
  "geography-articles","geography1-articles",
  "history-articles","history1-articles",
  "languages-articles","languages1-articles",
  "biology-articles","biology1-articles",
  "health-articles","health1-articles",
  "technology-articles","technology1-articles",
  "sports-articles","sports1-articles",
  "hobbies-articles","hobbies1-articles",
  "travel-articles","travel1-articles",
  "food-articles","food1-articles",
  "spirituality&philosophy-articles","spirituality&philosophy1-articles",
  "politics-articles","politics1-articles",
  "arts-articles","arts1-articles",
  "chemistry-articles","chemistry1-articles",
  "mathematics-articles","mathematics1-articles",
  "physics-articles","physics1-articles",
  "astronomy-articles","astronomy1-articles",
  "social-articles","social1-articles",
  "economics-articles","economics1-articles"
];

async function loadTopStories() {
  const storiesDiv = document.querySelector(".stories");
  let allArticles = [];

  for (const col of articleCollections) {
    const snapshot = await getDocs(collection(db, col));
    snapshot.forEach(doc => {
      const data = doc.data();
      allArticles.push({
        id: doc.id,
        title: data.title || "Untitled",
        body: data.body || "",
        likes: data.likes || 0,
        link: data.link || "#",
        imageUrl: data.imageUrl || "images/magazine.png"
      });
    });
  }

  if (allArticles.length === 0) {
    console.log("⚠️ No articles found, showing static stories.");
    return;
  }

  allArticles.sort((a, b) => b.likes - a.likes); // sort by likes
  const top3 = allArticles.slice(0, 3);

  storiesDiv.innerHTML = `<h1 class="storiesTitle"> Top Stories </h1>`;

  // Append top 3 stories
  top3.forEach((story, index) => {
    const preview = story.body.split(" ").slice(0, 10).join(" ") + "...";
    const storyDiv = document.createElement("a");
    storyDiv.href = story.link;
    storyDiv.style = "text-decoration: none; color: inherit;";
    storyDiv.innerHTML = `
      <div class="str ${index === 0 ? "strTop" : "strR"}" data-id="${story.id}">
        <h3>${story.title}</h3>
        <p>${preview} <br>
        <a href="${story.link}" style="color:#35B851;font-weight:bold;">See More</a></p>
      </div>
    `;
    storiesDiv.appendChild(storyDiv);
  });

  // Append the "Write Your Article.." link once, after all stories
  const writeLink = document.createElement("a");
  writeLink.href = "writing-article.html";
  writeLink.style = "text-decoration: none; color: inherit;";
  writeLink.innerHTML = `
    <div class="str strR">
      <h3>Write Your Article..</h3>
    </div>
  `;
  storiesDiv.appendChild(writeLink);
}

document.addEventListener("DOMContentLoaded", loadTopStories);
