  // Firebase SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import {
    getFirestore, doc, getDoc, setDoc, updateDoc,
    collection, addDoc, deleteDoc, onSnapshot, serverTimestamp,
    increment, query, orderBy
  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  // --- Your Firebase config (unchanged) ---
  const firebaseConfig = {
    apiKey: "AIzaSyB_aEQJrZILdy2JYl6HbLwT43myJhVJH6g",
    authDomain: "envision-ed5f3.firebaseapp.com",
    projectId: "envision-ed5f3",
    storageBucket: "envision-ed5f3.appspot.com",
    messagingSenderId: "202691344541",
    appId: "1:202691344541:web:2f6c93e7f5138adf127c74",
    measurementId: "G-3NB50YD8F0"
  };

  // --- Initialize ---
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // --- Article ID from URL (?id=xxxx) ---
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("id");
  const collectionName = urlParams.get("collection") || "geography-articles";


  // --- DOM elements (use your existing IDs) ---
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

  // --- Load article content into the page ---
  async function loadArticleContent(id) {
    try {
      if (!id) return;

      const ref = doc(db, collectionName, articleId);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const data = snap.data();

        // Title
        document.getElementById("article-title").textContent = data.title || "Untitled";

        // Image (with fallback)
        const imageElement = document.getElementById("article-image");
        imageElement.src = data.imageUrl || "images/magazine.png";
        imageElement.onerror = () => { imageElement.src = "images/magazine.png"; };

        // Content
        document.getElementById("article-content").innerHTML = data.body || "No content available.";

        // Topic
        document.getElementById("article-topic").textContent = data.topic || "General";
      } else {
        document.getElementById("article-title").textContent = "Article not found!";
        document.getElementById("article-content").textContent = "";
      }
    } catch (err) {
      console.error("Error loading article:", err);
    }
  }

// --- Real-time listeners for counts & comments list ---
function attachRealtimeListeners(id) {
  const articleRef = doc(db, collectionName, articleId);

  // Likes & shares live update (fields live on the article doc)
  onSnapshot(articleRef, (snap) => {
    if (snap.exists()) {
      const data = snap.data() || {};
      likeCountEl.textContent = data.likes || 0;
      shareCountEl.textContent = data.shares || 0;
    } else {
      likeCountEl.textContent = 0;
      shareCountEl.textContent = 0;
    }
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

    // Treat "" or "none" as hidden
    const isHidden = !shareOptions.style.display || shareOptions.style.display === "none";
    shareOptions.style.display = isHidden ? "flex" : "none";
});

shareOptions?.addEventListener("click", (e) => e.stopPropagation()); // don't close when clicking inside
document.addEventListener("click", () => { shareOptions.style.display = "none"; });

  const commentsRef = collection(db, collectionName, id, "comments");
  const commentsQuery = query(commentsRef, orderBy("createdAt", "asc"));

  const hoverIcons = {
    like: ["Images/like.png", "Images/likeHover.png", "Images/likeHover.png"],
    comment: ["Images/comment.png", "Images/commentHover.png", "Images/commentHover.png"],
    reply: ["Images/comment.png", "Images/commentHover.png", "Images/commentHover.png"], // new
    edit: ["Images/edit.png", "Images/editHover.png", "Images/editHover.png"],
    trash: ["Images/trash.png", "Images/trashHover.png", "Images/trashHover.png"]
  };

function attachHoverAndClick(iconSpan, key, initiallyActive = false) {
  const img = iconSpan.querySelector("img");
  if (!img || !hoverIcons[key]) return;

  const [normalSrc, hoverSrc, activeSrc] = hoverIcons[key];
  let active = initiallyActive;

  // Initialize correct image
  img.src = active ? activeSrc : normalSrc;

  img.addEventListener("mouseenter", () => {
    img.src = hoverSrc; // always show hover on hover
  });


 img.addEventListener("mouseleave", () => {
  img.src = active ? activeSrc : normalSrc;
});


  iconSpan.addEventListener("click", () => {
    active = !active; // toggle active
    img.src = active ? activeSrc : hoverSrc; // show hover immediately when unclick
  });
}

  onSnapshot(commentsQuery, (snapshot) => {
    commentCountEl.textContent = snapshot.size;
    commentsList.innerHTML = "";

    snapshot.forEach((docSnap) => {
      const c = docSnap.data();
      const commentId = docSnap.id;

      const commentDiv = document.createElement("div");
      commentDiv.className = "comment-item";

      const p = document.createElement("p");
      p.textContent = c.text || "";

      const toolbar = document.createElement("div");
      toolbar.className = "comment-toolbar";

    // Like
    const like = document.createElement("span");
    like.className = "comment-icon";
    like.style.display = "inline-flex"; // make icon and count align nicely
    like.style.alignItems = "center";

    like.innerHTML = `<img src="Images/like.png" alt="Like" class="icon" width="17" height="17" style="cursor: pointer;">`;

    const likeCountSpan = document.createElement("span");
    likeCountSpan.className = "comment-like-count";
    likeCountSpan.textContent = c.likes || 0;
    likeCountSpan.style.marginLeft = "8px"; // space between icon and number
    likeCountSpan.style.marginRight = "16px"; // space between icon and number
    likeCountSpan.style.fontSize = "14px";

    like.appendChild(likeCountSpan); // append count next to icon

    // Click to increment likes
    like.addEventListener("click", async () => {
      try {
        const commentRef = doc(db, collectionName, articleId, "comments", commentId);
        await updateDoc(commentRef, { likes: increment(1) });
        console.log("Liked comment:", commentId);
      } catch (err) {
        console.error("Error liking comment:", err);
      }
    });

    attachHoverAndClick(like, "like");


    // Reply
    const reply = document.createElement("span");
    reply.innerHTML = `<img src="Images/comment.png" alt="Reply" class="icon" width="17" height="17" style="margin-right: 10px; cursor: pointer;">`;
    reply.className = "comment-icon";
    attachHoverAndClick(reply, "reply");

    function attachReplyCount(commentDiv, commentId, replySpan) {
    const repliesRef = collection(db, collectionName, articleId, "comments", commentId, "replies");
    const q = query(repliesRef, orderBy("createdAt", "asc"));

    onSnapshot(q, (snapshot) => {
      replySpan.textContent = snapshot.size; // always update number
    });
  }

  // Replies count span (always visible)
  let repliesCountSpan = document.createElement("span");
  repliesCountSpan.className = "replies-count";
  repliesCountSpan.style.marginLeft = "2px";
  repliesCountSpan.style.marginRight = "15px";
  reply.appendChild(repliesCountSpan);

  // Attach real-time listener to update count
  attachReplyCount(commentDiv, commentId, repliesCountSpan);


    
    function loadReplies(commentDiv, articleId, commentId) {
      const repliesRef = collection(db, collectionName, articleId, "comments", commentId, "replies");
      const q = query(repliesRef, orderBy("createdAt", "asc"));

      // Replies container
      let repliesContainer = commentDiv.querySelector(".replies-container");
      if (!repliesContainer) {
        repliesContainer = document.createElement("div");
        repliesContainer.className = "replies-container";
        repliesContainer.style.marginLeft = "40px";
        repliesContainer.style.marginTop = "30px";
        commentDiv.appendChild(repliesContainer);
      }

      // Listen for changes
      onSnapshot(q, (snapshot) => {
        repliesContainer.innerHTML = ""; // Clear first

        snapshot.forEach((docSnap) => {
          const replyData = docSnap.data();
          const replyId = docSnap.id;
          const replyRef = docSnap.ref; // ✅ Firestore document reference

          const replyDiv = document.createElement("div");
          replyDiv.className = "reply";
          replyDiv.style.marginBottom = "8px";

        // Container for text
        const textContainer = document.createElement("div");
        textContainer.className = "reply-text-container";
        textContainer.textContent = replyData.text;

        // Container for icons
        const iconsContainer = document.createElement("div");
        iconsContainer.className = "reply-icons";
        iconsContainer.style.marginTop = "5px";
        iconsContainer.innerHTML = `
          <img src="Images/like.png" alt="Like" class="reply-like" width="14" style="margin-right:5px; cursor:pointer;">
          <span class="reply-likes">${replyData.likes || 0}</span>
          <img src="Images/edit.png" alt="Edit" class="reply-edit" width="14" style="margin-left:10px; cursor:pointer;">
          <img src="Images/trash.png" alt="Delete" class="reply-delete" width="14" style="margin-left:10px; cursor:pointer;">
        `;

        replyDiv.appendChild(textContainer);
        replyDiv.appendChild(iconsContainer);
        repliesContainer.appendChild(replyDiv);

          // 👉 ADD THIS HOVER BLOCK HERE (for each replyDiv)
          const likeIcon  = replyDiv.querySelector(".reply-like");
          const editIcon  = replyDiv.querySelector(".reply-edit");
          const delIcon   = replyDiv.querySelector(".reply-delete");

          if (likeIcon) {
            likeIcon.addEventListener("mouseenter", () => { likeIcon.src = "Images/likeHover.png"; });
            likeIcon.addEventListener("mouseleave", () => { likeIcon.src = "Images/like.png"; });
          }
          if (editIcon) {
            editIcon.addEventListener("mouseenter", () => { editIcon.src = "Images/editHover.png"; });
            editIcon.addEventListener("mouseleave", () => { editIcon.src = "Images/edit.png"; });
          }
          if (delIcon) {
            delIcon.addEventListener("mouseenter", () => { delIcon.src = "Images/trashHover.png"; });
            delIcon.addEventListener("mouseleave", () => { delIcon.src = "Images/trash.png"; });
          }

          // ✅ Like
          replyDiv.querySelector(".reply-like").addEventListener("click", async () => {
            await updateDoc(replyRef, { likes: (replyData.likes || 0) + 1 });
          });

      // ✅ Edit reply
    replyDiv.querySelector(".reply-edit").addEventListener("click", () => {
  const textContainer = replyDiv.querySelector(".reply-text-container");

  const textarea = document.createElement("textarea");
  textarea.value = replyData.text;
  textarea.rows = 3;
  textarea.style.width = "100%";
  textarea.style.border = "none";
  textarea.style.backgroundColor = "rgba(0,0,0,0.05)";
  textarea.style.resize = "none";
  textarea.style.padding = "5px";
  textarea.style.margin = "10px";

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.style.marginTop = "5px";
  saveBtn.style.marginLeft = "5px";
  saveBtn.style.width = "60px";
  saveBtn.style.height = "20px";
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

  // Clear text container and add textarea + save
  textContainer.innerHTML = "";
  textContainer.appendChild(textarea);
  textContainer.appendChild(saveBtn);

  const handleSave = async () => {
    const newText = textarea.value.trim();
    if (newText !== replyData.text) {
      await updateDoc(replyRef, { text: newText });
      replyData.text = newText;
    }

    textContainer.innerHTML = newText || replyData.text;
  };

  saveBtn.addEventListener("click", handleSave);
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
  });

  textarea.focus();
});


      // ✅ Delete reply with confirm
      replyDiv.querySelector(".reply-delete").addEventListener("click", (ev) => {
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
            replyDiv.remove();
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

        });

        // ✅ Update replies count next to comment icon
        let repliesCountSpan = commentDiv.querySelector(".replies-count");
        if (!repliesCountSpan) {
          repliesCountSpan = document.createElement("span");
          repliesCountSpan.className = "replies-count";
          repliesCountSpan.style.marginLeft = "2px"; // small spacing after icon
          repliesCountSpan.style.marginRight = "15px";
          reply.appendChild(repliesCountSpan); // 👈 append directly after reply icon
        }
        repliesCountSpan.textContent = snapshot.size; // 👈 just number, no ()
      });
    }

    // --- Edit button with Save ---
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
  textarea.style.resize = "none";

  // Replace paragraph with textarea
  commentDiv.replaceChild(textarea, p);
  textarea.focus();

  // Create Save button
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.className = "save";
  saveBtn.style.marginTop = "5px";
  saveBtn.style.marginBottom = "20px"; // spacing below
  saveBtn.style.marginLeft = "10px";   // spacing left
  saveBtn.style.width = "75px";
  saveBtn.style.height = "35px";
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

  // Insert Save button after textarea
  commentDiv.insertBefore(saveBtn, textarea.nextSibling);

  // Save function
  const saveComment = async () => {
    const newText = textarea.value.trim();
    // Always update even if unchanged
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

    // Delete button
    const del = document.createElement("span");
    del.innerHTML = `<img src="Images/trash.png" alt="Delete" class="icon" width="17" height="17" style="margin-right: 10px; cursor: pointer;">`;
    del.className = "comment-icon";

    // Hover effect for trash icon
    const trashIcon = del.querySelector("img");
    const trashDefault = "Images/trash.png";
    const trashHover = "Images/trashHover.png"; // <-- add your hover image here

    trashIcon.addEventListener("mouseover", () => {
      trashIcon.src = trashHover;
    });

    trashIcon.addEventListener("mouseout", () => {
      trashIcon.src = trashDefault;
    });

    // Click delete logic
    del.addEventListener("click", () => {
      const confirmOverlay = document.getElementById("delete-confirm");
      const confirmBtn = document.getElementById("confirm-delete");
      const cancelBtn = document.getElementById("cancel-delete");

      confirmOverlay.classList.remove("hidden");

      const confirmHandler = async () => {
        try {
          await deleteDoc(doc(db, collectionName, articleId, "comments", commentId));
          console.log("Comment deleted:", commentId);

          // Remove comment DOM immediately (optional, Firestore snapshot will also handle it)
          del.closest(".comment").remove();
        } catch (err) {
          console.error("Error deleting:", err);
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

  reply.addEventListener("click", () => {
    // ✅ Ensure input box exists
    let commentBox = commentDiv.querySelector(".comment-box");
    if (!commentBox) {
      commentBox = document.createElement("div");
      commentBox.className = "comment-box";
      commentBox.style.marginTop = "10px";

      const textarea = document.createElement("textarea");
      textarea.rows = 3;
      textarea.style.width = "100%";
      textarea.placeholder = "Write a reply...";
      textarea.style.backgroundColor = "rgba(0,0,0,0.05)";
      textarea.style.border = "none";

      const submitBtn = document.createElement("button");
      submitBtn.textContent = "Reply";
      submitBtn.style.marginTop = "5px";
      submitBtn.style.width = "75px";
      submitBtn.style.height = "35px";
      submitBtn.style.border = "none";
      submitBtn.style.borderRadius = "5px";
      submitBtn.style.color = "white";
      submitBtn.style.background = "linear-gradient(#575757, #333333, #000000)";
      
      // Hover effect
      submitBtn.addEventListener("mouseenter", () => {
        submitBtn.style.background = "linear-gradient(#2fa843, #068217, #035e12)";
      });
      submitBtn.addEventListener("mouseleave", () => {
        submitBtn.style.background = "linear-gradient(#575757, #333333, #000000)";
      });

      commentBox.appendChild(textarea);
      commentBox.appendChild(submitBtn);
      commentDiv.appendChild(commentBox);

      // Submit reply
      submitBtn.addEventListener("click", async () => {
        const text = textarea.value.trim();
        if (!text) return;

        const repliesRef = collection(db, collectionName, articleId, "comments", commentId, "replies");
        await addDoc(repliesRef, { text, createdAt: serverTimestamp(), likes: 0 });
        textarea.value = "";
      });
      textarea.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submitBtn.click();
            }
        });
    }

    // ✅ Show the input box
    commentBox.style.display = "block";

    // ✅ Ensure replies container exists
    let repliesContainer = commentDiv.querySelector(".replies-container");
    if (!repliesContainer) {
      repliesContainer = document.createElement("div");
      repliesContainer.className = "replies-container";
      repliesContainer.style.marginLeft = "40px";
      repliesContainer.style.marginTop = "10px";
      commentDiv.appendChild(repliesContainer);
    }

    // ✅ Load existing replies
    loadReplies(commentDiv, articleId, commentId);
  });


      toolbar.append(like, reply, edit, del);
      commentDiv.append(p, toolbar);
      commentsList.appendChild(commentDiv);
    });
  });
}

  // --- Ensure the article doc exists (so increment/merge works cleanly) ---
  async function ensureArticleCounters(id) {
    const ref = doc(db, collectionName, id);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      // Merge so we don't overwrite title/body/etc. if they already exist
      await setDoc(ref, { likes: 0, shares: 0 }, { merge: true });
    } else {
      // Also merge defaults if fields are missing
      const d = snap.data() || {};
      const payload = {};
      if (typeof d.likes !== "number") payload.likes = 0;
      if (typeof d.shares !== "number") payload.shares = 0;
      if (Object.keys(payload).length) {
        await setDoc(ref, payload, { merge: true });
      }
    }
  }

  // --- Click handlers (use increment to avoid race conditions) ---
  async function handleLike() {
    try {
      if (!articleId) return;
      const ref = doc(db, collectionName, articleId);
      await setDoc(ref, {}, { merge: true }); // ensure doc exists
      await updateDoc(ref, { likes: increment(1) });
      // Count will update via onSnapshot
    } catch (err) {
      console.error("Like error:", err);
    }
  }

async function handleShare() {
  try {
    if (!articleId) return;

    // Toggle UI immediately
    if (shareOptions) {
      // Force display to block if currently hidden
      if (shareOptions.style.display === "none" || shareOptions.style.display === "") {
        shareOptions.style.display = "flex"; // or "block"
      } else {
        shareOptions.style.display = "none";
      }
    }

    // Firestore update
    const ref = doc(db, collectionName, articleId);
    await setDoc(ref, {}, { merge: true }); // ensure doc exists
    await updateDoc(ref, { shares: increment(1) });
  } catch (err) {
    console.error("Share error:", err);
  }
}

async function handleCommentSubmit(e) {
  e.preventDefault(); // Prevent form submit refresh

  if (!articleId) return;
  const text = (commentInput.value || "").trim();
  if (!text) return;

  try {
    const commentsRef = collection(db, collectionName, articleId, "comments");
    await addDoc(commentsRef, {
      text,
      createdAt: serverTimestamp()
    });

    commentInput.value = ""; // Clear textarea
  } catch (err) {
    console.error("Comment error:", err);
  }
}

 // Submit handler
submitCommentBtn.addEventListener("click", handleCommentSubmit);


// Grab DOM elements
const commentIcon = document.getElementById("comment");

// Submit handler
submitCommentBtn.addEventListener("click", handleCommentSubmit);

// Toggle handler (comment icon)
const handleCommentIconClick = () => {
  if (!commentSection) return;

  const isHidden = window.getComputedStyle(commentSection).display === "none";
  commentSection.style.display = isHidden ? "block" : "none";

  if (isHidden) {
    setTimeout(() => commentInput && commentInput.focus(), 0);
  }
};

commentIcon.addEventListener("click", handleCommentIconClick);


  // --- Wire up events safely ---
  function bindEvents() {
    if (likeImg) likeImg.addEventListener("click", handleLike);
    if (shareImg) shareImg.addEventListener("click", handleShare);
    if (commentImg) commentImg.addEventListener("click", handleCommentIconClick);
    if (submitCommentBtn) submitCommentBtn.addEventListener("click", handleCommentSubmit);
  }

  // --- Init flow ---
  (async function init() {
    if (!articleId) {
      console.warn("No article id in URL (?id=...)");
      return;
    }
    await ensureArticleCounters(articleId);
    await loadArticleContent(articleId);
    attachRealtimeListeners(articleId);
    bindEvents();
  })();

// Map of normal -> hover images
const hoverMap = {
  "email": ["Images/email.png", "Images/emailHover.png"],
  "facebook": ["Images/facebookHover.png", "Images/facebookHover.png"],
  "twitter": ["Images/twitter.png", "Images/x.png"], // special case
  "whatsapp": ["Images/whatsapp.png", "Images/whatsappHover.png"],
  "telegram": ["Images/telegram.png", "Images/telegramHover.png"],
  "instagram": ["Images/instagram.png", "Images/instagramHover.png"],
  "linkedIn": ["Images/linkedIn.png", "Images/linkedInHover.png"]
};

// Attach hover events
Object.keys(hoverMap).forEach((id) => {
  const img = document.querySelector(`#share-options img.${id}`);
  if (!img) return;

  const [normalSrc, hoverSrc] = hoverMap[id];

  img.addEventListener("mouseenter", () => img.src = hoverSrc);
  img.addEventListener("mouseleave", () => img.src = normalSrc);
});