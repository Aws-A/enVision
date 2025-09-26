import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, doc, collection, setDoc, addDoc, updateDoc,
  deleteDoc, onSnapshot, serverTimestamp, increment, query, orderBy, getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// --- Firebase config ---
const firebaseConfig = {
  apiKey: "AIzaSyB_aEQJrZILdy2JYl6HbLwT43myJhVJH6g",
  authDomain: "envision-ed5f3.firebaseapp.com",
  projectId: "envision-ed5f3",
  storageBucket: "envision-ed5f3.appspot.com",
  messagingSenderId: "202691344541",
  appId: "1:202691344541:web:2f6c93e7f5138adf127c74",
  measurementId: "G-3NB50YD8F0"
};

// --- Initialize Firebase ---
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- DOM elements ---
const likeImg = document.getElementById("like");
const likeCountEl = document.getElementById("like-count");
const shareImg = document.getElementById("share");
const shareCountEl = document.getElementById("share-count");
const commentImg = document.getElementById("comment");
const commentCountEl = document.getElementById("comment-count");
const commentSection = document.getElementById("comment-section");
const submitCommentBtn = document.getElementById("submit-comment");
const commentInput = document.getElementById("comment-input");
const commentsList = document.getElementById("comments-list");
const shareOptions = document.getElementById("share-options");

// --- Get tag and static article ID from HTML or URL ---
let tagText = document.querySelector(".tag")?.textContent
  .toLowerCase()
  .replace(/\s*&\s*/g, " & ")
  .replace(/\s+/g, " ")
  .trim();

// --- Map tags to collections ---
const topicCollectionMap = {
  "geography": "geography1-articles",
  "history": "history1-articles",
  "languages": "languages1-articles",
  "biology": "biology1-articles",
  "health": "health1-articles",
  "technology": "technology1-articles",
  "sports": "sports1-articles",
  "hobbies": "hobbies1-articles",
  "travel": "travel1-articles",
  "food": "food1-articles",
  "spirituality & philosophy": "spirituality&philosophy1-articles",
  "politics": "politics1-articles",
  "arts": "arts1-articles",
  "chemistry": "chemistry1-articles",
  "mathematics": "mathematics1-articles",
  "physics": "physics1-articles",
  "astronomy": "astronomy1-articles",
  "social sciences": "social1-articles",
  "economics": "economics1-articles"
};


//Timestamp Function
function formatTimestamp(ts) {
  if (!ts) return "";
  const date = ts.toDate(); // Firestore Timestamp → JS Date
  const options = { day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}


const collectionName = topicCollectionMap[tagText] || "general-articles";

// --- Article ID (based on filename) ---
const fileName = window.location.pathname.split("/").pop().replace(".html", "");
const articleId = fileName || "default-article"; 
const articleRef = doc(db, collectionName, articleId);


// --- Ensure article exists in Firebase ---
async function ensureArticleCounters() {
  const snap = await getDoc(articleRef);
  if (!snap.exists()) {
    await setDoc(articleRef, { likes: 0, shares: 0, createdAt: serverTimestamp() });
  }
}

// --- Like & Share handlers ---
async function handleLike() {
  await updateDoc(articleRef, { likes: increment(1) });
}

async function handleShare() {
  await updateDoc(articleRef, { shares: increment(1) });
  if (shareOptions) shareOptions.style.display = "flex"; // Show share window
}

// --- Share hover effects (icons in #share-options must match these classes) ---
const hoverMap = {
  "email": ["Images/email.png", "Images/emailHover.png"],
  "facebook": ["Images/facebook.png", "Images/facebookHover.png"],
  "twitter": ["Images/twitter.png", "Images/x.png"],
  "whatsapp": ["Images/whatsapp.png", "Images/whatsappHover.png"],
  "telegram": ["Images/telegram.png", "Images/telegramHover.png"],
  "instagram": ["Images/instagram.png", "Images/instagramHover.png"],
  "linkedIn": ["Images/linkedIn.png", "Images/linkedInHover.png"]
};

Object.keys(hoverMap).forEach((id) => {
  const img = document.querySelector(`#share-options img.${id}`);
  if (!img) return;
  const [normal, hover] = hoverMap[id];
  img.addEventListener("mouseenter", () => (img.src = hover));
  img.addEventListener("mouseleave", () => (img.src = normal));
});

// --- Close share when clicking outside (and don't close when clicking share icon or share-options) ---
document.addEventListener("click", (event) => {
  if (!shareOptions) return;
  if (shareOptions.style.display && shareOptions.style.display !== "none") {
    if (!shareOptions.contains(event.target) && event.target.id !== "share") {
      shareOptions.style.display = "none";
    }
  }
});

shareImg?.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent document click from firing
  if (!shareOptions) return;
  shareOptions.style.display = (shareOptions.style.display === "flex") ? "none" : "flex";
});

shareOptions?.addEventListener("click", (e) => e.stopPropagation()); // don't close when clicking inside

// --- Hover icons + click helper for comment toolbar icons ---
// Define hover icons mapping at top-level so it's available to onSnapshot loop
const hoverIcons = {
  like: ["Images/like.png", "Images/likeHover.png", "Images/likeHover.png"],
  comment: ["Images/comment.png", "Images/commentHover.png", "Images/commentHover.png"],
  reply: ["Images/comment.png", "Images/commentHover.png", "Images/commentHover.png"],
  edit: ["Images/edit.png", "Images/editHover.png", "Images/editHover.png"],
  trash: ["Images/trash.png", "Images/trashHover.png", "Images/trashHover.png"]
};

// Attach hover + simple active toggle behavior to an icon span
function attachHoverAndClick(iconSpan, key, initiallyActive = false) {
  const img = iconSpan.querySelector("img");
  if (!img || !hoverIcons[key]) return;

  const [normalSrc, hoverSrc, activeSrc] = hoverIcons[key];
  let active = initiallyActive;

  // initialize
  img.src = active ? activeSrc : normalSrc;

  img.addEventListener("mouseenter", () => { img.src = hoverSrc; });
  img.addEventListener("mouseleave", () => { img.src = active ? activeSrc : normalSrc; });

  // toggle active on click of the span (not replacing other click handlers)
  iconSpan.addEventListener("click", () => {
    active = !active;
    img.src = active ? activeSrc : hoverSrc;
  });
}

// --- Toggle comment section ---
commentImg?.addEventListener("click", () => {
  if (!commentSection) return;
  const isHidden = window.getComputedStyle(commentSection).display === "none";
  commentSection.style.display = isHidden ? "block" : "none";
  if (isHidden) commentInput.focus();
});

// --- Submit comment ---
submitCommentBtn?.addEventListener("click", async (e) => {
  e.preventDefault();
  const text = (commentInput.value || "").trim();
  if (!text) return;

  const commentsRef = collection(db, collectionName, articleId, "comments");
  await addDoc(commentsRef, { text, likes: 0, createdAt: serverTimestamp() });
  commentInput.value = "";
});

// --- Realtime listeners for article + comments + replies ---
function attachRealtimeListeners() {
  // Article likes & shares
  onSnapshot(articleRef, snap => {
    const data = snap.data() || {};
    likeCountEl.textContent = data.likes || 0;
    shareCountEl.textContent = data.shares || 0;
  });

  // Comments + replies
  const commentsRef = collection(db, collectionName, articleId, "comments");
  const q = query(commentsRef, orderBy("createdAt"));
  onSnapshot(q, snapshot => {
    commentCountEl.textContent = snapshot.size;
    commentsList.innerHTML = "";

    snapshot.forEach(docSnap => {
      const commentData = docSnap.data();
      const commentId = docSnap.id;

      const commentDiv = document.createElement("div");
      commentDiv.className = "comment-item";

      const p = document.createElement("p");
      p.textContent = commentData.text || "";

      // --- Toolbar for each comment ---
      const toolbar = document.createElement("div");
      toolbar.className = "comment-toolbar";

      // --- Timestamp for each comment ---
      const timeSpan = document.createElement("span");
      timeSpan.className = "comment-time";
      timeSpan.textContent = formatTimestamp(commentData.createdAt);
      timeSpan.style.fontSize = "12px";
      timeSpan.style.color = "gray";
      timeSpan.style.marginLeft = "10px";

      p.appendChild(timeSpan);


      // --- Like ---
      const like = document.createElement("span");
      like.className = "comment-icon";
      like.style.display = "inline-flex";
      like.style.alignItems = "center";

      like.innerHTML = `<img src="Images/like.png" alt="Like" class="icon" width="17" height="17" style="cursor: pointer;">`;

      const likeCountSpan = document.createElement("span");
      likeCountSpan.className = "comment-like-count";
      likeCountSpan.textContent = (typeof commentData.likes === "number") ? commentData.likes : 0;
      likeCountSpan.style.marginLeft = "8px";
      likeCountSpan.style.marginRight = "16px";
      likeCountSpan.style.fontSize = "14px";

      like.appendChild(likeCountSpan);

      like.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        try {
          const commentRef = doc(db, collectionName, articleId, "comments", commentId);
          await updateDoc(commentRef, { likes: increment(1) });
        } catch (err) {
          console.error("Error liking comment:", err);
        }
      });

      attachHoverAndClick(like, "like");

    // --- Reply button ---
    const reply = document.createElement("span");
    reply.className = "comment-icon";
    reply.style.display = "inline-flex";
    reply.style.alignItems = "center";
    reply.innerHTML = `<img src="Images/comment.png" alt="Reply" class="icon" width="17" height="17" style="cursor:pointer;">`;

    attachHoverAndClick(reply, "reply");

    // --- Function to show reply count always ---
    function attachReplyCount(commentDiv, commentId, replyCountSpan) {
      const repliesRef = collection(db, collectionName, articleId, "comments", commentId, "replies");
      const q = query(repliesRef);

      onSnapshot(q, snapshot => {
        replyCountSpan.textContent = snapshot.size; // always show number of replies
      });
    }

    // Grab reply count element
    const replyCountSpan = document.createElement("span");
    replyCountSpan.className = "reply-count";
    replyCountSpan.textContent = "0";
    replyCountSpan.style.marginLeft = "8px";
    replyCountSpan.style.marginRight = "16px";
    replyCountSpan.style.fontSize = "14px";
    reply.appendChild(replyCountSpan);

    // ✅ Attach real-time count
    attachReplyCount(commentDiv, commentId, replyCountSpan);

reply.addEventListener("click", () => {
    // Ensure reply box exists
    let commentBox = commentDiv.querySelector(".comment-box");
    if (!commentBox) {
        commentBox = document.createElement("div");
        commentBox.className = "comment-box";
        commentBox.style.marginTop = "10px";
        commentBox.style.display = "block"; // show immediately

        const textarea = document.createElement("textarea");
        textarea.rows = 3;
        textarea.style.width = "100%";
        textarea.placeholder = "Write a reply...";
        textarea.style.backgroundColor = "rgba(0,0,0,0.05)";
        textarea.style.border = "none";
        textarea.style.padding = "5px";
        textarea.style.marginBottom = "5px";

        const submitBtn = document.createElement("button");
        submitBtn.textContent = "Reply";
        submitBtn.style.width = "75px";
        submitBtn.style.height = "35px";
        submitBtn.style.border = "none";
        submitBtn.style.borderRadius = "5px";
        submitBtn.style.color = "white";
        submitBtn.style.background = "linear-gradient(#575757, #333333, #000000)";
        submitBtn.style.cursor = "pointer";

        submitBtn.addEventListener("mouseenter", () => submitBtn.style.background = "linear-gradient(#2fa843, #068217, #035e12)");
        submitBtn.addEventListener("mouseleave", () => submitBtn.style.background = "linear-gradient(#575757, #333333, #000000)");

        commentBox.appendChild(textarea);
        commentBox.appendChild(submitBtn);
        commentDiv.appendChild(commentBox);

        // Submit reply
        submitBtn.addEventListener("click", async () => {
            const replyText = (textarea.value || "").trim();
            if (!replyText) return;
            const repliesRef = collection(db, collectionName, articleId, "comments", commentId, "replies");
            await addDoc(repliesRef, { text: replyText, likes: 0, createdAt: serverTimestamp() });
            textarea.value = "";
        });

        textarea.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submitBtn.click();
            }
        });
    } else {
        // Toggle if already exists
        commentBox.style.display = commentBox.style.display === "none" ? "block" : "none";
    }

    // Ensure replies container exists
    let repliesContainer = commentDiv.querySelector(".replies-container");
    if (!repliesContainer) {
        repliesContainer = document.createElement("div");
        repliesContainer.className = "replies-container";
        repliesContainer.style.marginLeft = "40px";
        repliesContainer.style.marginTop = "10px";
        commentDiv.appendChild(repliesContainer);
    }

    // Load existing replies
    loadReplies(commentDiv, articleId, commentId, replyCountSpan);
});

    // --- Load replies function ---
    async function loadReplies(commentDiv, articleId, commentId, replyCountSpan) {
    const repliesContainer = commentDiv.querySelector(".replies-container");
    if (!repliesContainer) return;

    const repliesRef = collection(db, collectionName, articleId, "comments", commentId, "replies");
    const q = query(repliesRef, orderBy("createdAt"));

    onSnapshot(q, snapshot => {
        repliesContainer.innerHTML = ""; // Clear old replies
        replyCountSpan.textContent = snapshot.size; // ✅ update count beside icon

        snapshot.forEach(repSnap => {
        const r = repSnap.data();
        const rid = repSnap.id;
        const replyRef = doc(db, collectionName, articleId, "comments", commentId, "replies", rid);

        const repDiv = document.createElement("div");
        repDiv.className = "reply-item";
        repDiv.style.marginBottom = "8px";

        const repText = document.createElement("p");
        repText.textContent = r.text || "";
        repDiv.appendChild(repText);

        // --- Timestamp for each replies ---
        const repTime = document.createElement("span");
        repTime.className = "reply-time";
        repTime.textContent = formatTimestamp(r.createdAt);
        repTime.style.fontSize = "12px";
        repTime.style.color = "gray";
        repTime.style.marginLeft = "10px";

        repText.appendChild(repTime);


        // --- Reply actions (like, edit, delete) ---
        const actions = document.createElement("span");
        actions.className = "reply-actions";
        actions.style.marginLeft = "10px";

        // 👍 Like
        const likeIcon = document.createElement("img");
        likeIcon.src = "Images/like.png";
        likeIcon.width = 14;
        likeIcon.style.cursor = "pointer";
        likeIcon.style.marginRight = "5px";

        const likeCount = document.createElement("span");
        likeCount.textContent = r.likes || 0;

        likeIcon.addEventListener("mouseenter", () => likeIcon.src = "Images/likeHover.png");
        likeIcon.addEventListener("mouseleave", () => likeIcon.src = "Images/like.png");
        likeIcon.addEventListener("click", async () => {
            await updateDoc(replyRef, { likes: (r.likes || 0) + 1 });
        });

  // ✏️ Edit
const editIcon = document.createElement("img");
editIcon.src = "Images/edit.png";
editIcon.width = 14;
editIcon.style.cursor = "pointer";
editIcon.style.marginLeft = "10px";

editIcon.addEventListener("mouseenter", () => editIcon.src = "Images/editHover.png");
editIcon.addEventListener("mouseleave", () => editIcon.src = "Images/edit.png");

editIcon.addEventListener("click", () => {
  // Save the original content (text + icons)
  const originalContent = Array.from(repDiv.childNodes);

  const textarea = document.createElement("textarea");
  textarea.value = r.text;
  textarea.style.width = "100%";
  textarea.style.marginTop = "5px";
  textarea.style.backgroundColor = "rgba(0,0,0,0.05)";
  textarea.style.border = "none";

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.className = "save";
  saveBtn.style.marginTop = "5px";
  saveBtn.style.width = "60px";
  saveBtn.style.height = "25px";
  saveBtn.style.border = "none";
  saveBtn.style.borderRadius = "5px";
  saveBtn.style.color = "white";
  saveBtn.style.background = "linear-gradient(#575757, #333333, #000000)";
  saveBtn.style.cursor = "pointer";

  // Hover effect
  saveBtn.addEventListener("mouseenter", () => {
    saveBtn.style.border = "1px solid #35B851";
    saveBtn.style.background = "linear-gradient(#35B851, #2fa843, #068217)";
  });
  saveBtn.addEventListener("mouseleave", () => {
    saveBtn.style.border = "none";
    saveBtn.style.background = "linear-gradient(#575757, #333333, #000000)";
  });

  // Replace repDiv content with textarea + save button
  repDiv.innerHTML = "";
  repDiv.appendChild(textarea);
  repDiv.appendChild(saveBtn);
  textarea.focus();

  const handleSave = async () => {
    const newText = textarea.value;

    // Restore original content (text + icons)
    repDiv.innerHTML = "";
    originalContent.forEach(node => repDiv.appendChild(node));

    // Update the <p> text
    const textP = repDiv.querySelector("p");
    if (textP) {
      textP.textContent = newText;
    }

    // Always update Firestore
    try {
      await updateDoc(replyRef, { text: newText });
    } catch (err) {
      console.error("save reply edit err:", err);
    }
  };

  // Click to save
  saveBtn.addEventListener("click", handleSave);

  // Press Enter to save (Shift+Enter = newline)
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
  });
});


    // 🗑 Delete reply with confirm
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "Images/trash.png";
    deleteIcon.width = 14;
    deleteIcon.style.cursor = "pointer";
    deleteIcon.style.marginLeft = "10px";

    // Hover effect
    deleteIcon.addEventListener("mouseenter", () => deleteIcon.src = "Images/trashHover.png");
    deleteIcon.addEventListener("mouseleave", () => deleteIcon.src = "Images/trash.png");

    deleteIcon.addEventListener("click", (ev) => {
    ev.stopPropagation(); // prevent other click handlers

    const confirmOverlay = document.getElementById("delete-confirm");
    const confirmBtn = document.getElementById("confirm-delete");
    const cancelBtn = document.getElementById("cancel-delete");

    if (!confirmOverlay || !confirmBtn || !cancelBtn) {
        console.error("Confirm elements not found in DOM");
        return;
    }

    confirmOverlay.classList.remove("hidden"); // show overlay

    const confirmHandler = async () => {
        try {
        await deleteDoc(replyRef);
        console.log("Reply deleted:", replyRef.id);

        // Remove reply from DOM immediately
        deleteIcon.closest(".reply-item")?.remove();
        } catch (err) {
        console.error("Error deleting reply:", err);
        }
        confirmOverlay.classList.add("hidden");
        cleanup();
    };

    const cancelHandler = () => {
        confirmOverlay.classList.add("hidden");
        cleanup();
    };

    confirmBtn.addEventListener("click", confirmHandler);
    cancelBtn.addEventListener("click", cancelHandler);

    function cleanup() {
        confirmBtn.removeEventListener("click", confirmHandler);
        cancelBtn.removeEventListener("click", cancelHandler);
    }
    });


      actions.appendChild(likeIcon);
      actions.appendChild(likeCount);
      actions.appendChild(editIcon);
      actions.appendChild(deleteIcon);

      repDiv.appendChild(actions);
      repliesContainer.appendChild(repDiv);
    });
  });
}

    // --- Edit button ---
    const edit = document.createElement("span");
    edit.className = "comment-icon";
    edit.innerHTML = `<img src="Images/edit.png" width="17" height="17" style="margin-right:10px; cursor:pointer;">`;
    attachHoverAndClick(edit, "edit");

    edit.addEventListener("click", () => {
    const originalText = p.textContent;

    // Create textarea
    const textarea = document.createElement("textarea");
    textarea.value = originalText;
    textarea.rows = 3;
    textarea.style.width = "100%";
    textarea.style.border = "none";
    textarea.style.backgroundColor = "rgba(0,0,0,0.05)";
    textarea.style.padding = "5px";
    textarea.style.margin = "10px";

    // Replace paragraph with textarea
    commentDiv.replaceChild(textarea, p);
    textarea.focus();

    // Create Save button (like reply one)
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.className = "save"; // optional: use CSS class if you want
    saveBtn.style.marginTop = "5px";
    saveBtn.style.marginBottom = "20px"; // added margin bottom
    saveBtn.style.marginLeft = "10px"; // added margin bottom
    saveBtn.style.width = "75px";
    saveBtn.style.height = "35px";
    saveBtn.style.border = "none";
    saveBtn.style.borderRadius = "5px";
    saveBtn.style.color = "white";
    saveBtn.style.background = "linear-gradient(#575757, #333333, #000000)";
    saveBtn.style.cursor = "pointer";

    // Hover effect for save
    saveBtn.addEventListener("mouseenter", () => {
        saveBtn.style.border = "1px solid #35B851";
        saveBtn.style.background = "linear-gradient(#35B851, #2fa843, #068217)";
    });
    saveBtn.addEventListener("mouseleave", () => {
        saveBtn.style.border = "none";
        saveBtn.style.background = "linear-gradient(#575757, #333333, #000000)";
    });

    commentDiv.insertBefore(saveBtn, textarea.nextSibling);

    // Save function
    const saveComment = async () => {
        const newText = textarea.value.trim();
        if (!newText) return; // allow saving even if unchanged
        await updateDoc(doc(db, collectionName, articleId, "comments", commentId), { text: newText });
        p.textContent = newText || originalText;
        commentDiv.replaceChild(p, textarea);
        saveBtn.remove();
    };

    // Save on button click
    saveBtn.addEventListener("click", saveComment);

    // Save on Enter key
    textarea.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        saveComment();
        }
    });
    });


    // --- Delete button for comment with confirm ---
    const del = document.createElement("span");
    del.className = "comment-icon";
    del.innerHTML = `<img src="Images/trash.png" width="17" height="17" style="margin-right: 10px; cursor:pointer;">`;
    attachHoverAndClick(del, "trash");

    del.addEventListener("click", (ev) => {
    ev.stopPropagation(); // prevent other click handlers

    const confirmOverlay = document.getElementById("delete-confirm");
    const confirmBtn = document.getElementById("confirm-delete");
    const cancelBtn = document.getElementById("cancel-delete");

    if (!confirmOverlay || !confirmBtn || !cancelBtn) {
        console.error("Confirm elements not found in DOM");
        return;
    }

    confirmOverlay.classList.remove("hidden"); // show overlay

    const confirmHandler = async () => {
        try {
        const commentRef = doc(db, collectionName, articleId, "comments", commentId);
        await deleteDoc(commentRef);
        console.log("Comment deleted:", commentId);

        // Remove comment DOM immediately (optional, snapshot will also handle it)
        del.closest(".comment-item")?.remove();
        } catch (err) {
        console.error("Error deleting comment:", err);
        }
        confirmOverlay.classList.add("hidden");
        cleanup();
    };

    const cancelHandler = () => {
        confirmOverlay.classList.add("hidden");
        cleanup();
    };

    confirmBtn.addEventListener("click", confirmHandler);
    cancelBtn.addEventListener("click", cancelHandler);

    function cleanup() {
        confirmBtn.removeEventListener("click", confirmHandler);
        cancelBtn.removeEventListener("click", cancelHandler);
    }
    });

      // assemble toolbar and comment
      toolbar.appendChild(like);
      toolbar.appendChild(reply);
      toolbar.appendChild(edit);
      toolbar.appendChild(del);

      commentDiv.appendChild(p);
      commentDiv.appendChild(toolbar);
      commentsList.appendChild(commentDiv);
    });
  });
}

// --- Bind main events ---
likeImg?.addEventListener("click", handleLike);
shareImg?.addEventListener("click", handleShare);

// --- Init ---
(async function init() {
  await ensureArticleCounters();
  attachRealtimeListeners();
})();