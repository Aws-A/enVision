// videos-interactions.js
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, doc, collection, setDoc, addDoc, updateDoc,
  deleteDoc, onSnapshot, serverTimestamp, increment, query, orderBy, getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* ------------- Firebase config (keep your own keys) ------------- */
const firebaseConfig = {
  apiKey: "AIzaSyB_aEQJrZILdy2JYl6HbLwT43myJhVJH6g",
  authDomain: "envision-ed5f3.firebaseapp.com",
  projectId: "envision-ed5f3",
  storageBucket: "envision-ed5f3.appspot.com",
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
const db = getFirestore(app);

/* -------------------- DOM ELEMENTS (required) -------------------- */
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

/* Optional confirm overlay elements for deletes */
const deleteConfirmOverlay = document.getElementById("delete-confirm"); // overlay container
const confirmDeleteBtn = document.getElementById("confirm-delete");
const cancelDeleteBtn = document.getElementById("cancel-delete");

/* -------------------- Helpers: get videoId -------------------- */
/* videoId derived from filename or URL param 'video' */
function getVideoId() {
  // try ?video=... first
  const params = new URLSearchParams(window.location.search);
  const q = params.get("video");
  if (q) return q;
  const fileName = window.location.pathname.split("/").pop().replace(".html", "");
  return fileName || "default-video";
}
const videoId = getVideoId();
const videoRef = doc(db, "videos", videoId);

/* -------------------- Ensure video doc exists -------------------- */
async function ensureVideoCounters() {
  const snap = await getDoc(videoRef);
  if (!snap.exists()) {
    await setDoc(videoRef, {
      likes: 0,
      shares: 0,
      createdAt: serverTimestamp()
    });
  }
}

/* -------------------- Like & Share handlers -------------------- */
async function handleLike() {
  try {
    await updateDoc(videoRef, { likes: increment(1) });
  } catch (err) { console.error("handleLike error:", err); }
}
async function handleShare() {
  try {
    await updateDoc(videoRef, { shares: increment(1) });
    if (shareOptions) shareOptions.style.display = "flex";
  } catch (err) { console.error("handleShare error:", err); }
}

/* -------------------- Hover icons for share options -------------------- */
const shareHoverMap = {
  "email": ["images/email.png", "images/emailHover.png"],
  "facebook": ["images/facebook.png", "images/facebookHover.png"],
  "twitter": ["images/twitter.png", "images/x.png"],
  "whatsapp": ["images/whatsapp.png", "images/whatsappHover.png"],
  "telegram": ["images/telegram.png", "images/telegramHover.png"],
  "instagram": ["images/instagram.png", "images/instagramHover.png"],
  "linkedIn": ["images/linkedIn.png", "images/linkedInHover.png"]
};

Object.keys(shareHoverMap).forEach(id => {
  const img = document.querySelector(`#share-options img.${id}`);
  if (!img) return;
  const [normal, hover] = shareHoverMap[id];
  img.addEventListener("mouseenter", () => img.src = hover);
  img.addEventListener("mouseleave", () => img.src = normal);
});

/* Close share options when clicking outside */
document.addEventListener("click", (event) => {
  if (!shareOptions) return;
  if (shareOptions.style.display && shareOptions.style.display !== "none") {
    if (!shareOptions.contains(event.target) && event.target.id !== "share") {
      shareOptions.style.display = "none";
    }
  }
});
shareImg?.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!shareOptions) return;
  shareOptions.style.display = (shareOptions.style.display === "flex") ? "none" : "flex";
});
shareOptions?.addEventListener("click", (e) => e.stopPropagation());

/* ------------- Generic hover icon system for toolbar icons ------------ */
const hoverIcons = {
  like: ["images/like.png", "images/likeHover.png", "images/likeHover.png"],
  comment: ["images/comment.png", "images/commentHover.png", "images/commentHover.png"],
  reply: ["images/comment.png", "images/commentHover.png", "images/commentHover.png"],
  edit: ["images/edit.png", "images/editHover.png", "images/editHover.png"],
  trash: ["images/trash.png", "images/trashHover.png", "images/trashHover.png"]
};

function attachHoverAndToggle(spanEl, key, initiallyActive = false) {
  const img = spanEl.querySelector("img");
  if (!img || !hoverIcons[key]) return;
  const [normal, hover, activeSrc] = hoverIcons[key];
  let active = initiallyActive;
  img.src = active ? activeSrc : normal;
  img.addEventListener("mouseenter", () => { img.src = hover; });
  img.addEventListener("mouseleave", () => { img.src = active ? activeSrc : normal; });
  spanEl.addEventListener("click", () => {
    active = !active;
    img.src = active ? activeSrc : hover;
  });
}

/* -------------------- Toggle comment section visibility -------------------- */
commentImg?.addEventListener("click", () => {
  if (!commentSection) return;
  const hidden = window.getComputedStyle(commentSection).display === "none";
  commentSection.style.display = hidden ? "block" : "none";
  if (hidden && commentInput) commentInput.focus();
});

/* -------------------- Submit comment -------------------- */
submitCommentBtn?.addEventListener("click", async (e) => {
  e.preventDefault();
  const text = (commentInput?.value || "").trim();
  if (!text) return;
  try {
    const commentsRef = collection(db, "videos", videoId, "comments");
    await addDoc(commentsRef, { text, likes: 0, createdAt: serverTimestamp() });
    if (commentInput) commentInput.value = "";
  } catch (err) { console.error("submit comment error:", err); }
});


/* -------------------- Timestamp Function -------------------- */
  function formatTimestamp(ts) {
  if (!ts) return "";
  const date = ts.toDate(); // Firestore Timestamp → JS Date
  const options = { day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

/* -------------------- Realtime listeners -------------------- */
function attachRealtimeListeners() {
  // video counters
  onSnapshot(videoRef, snap => {
    const d = snap.data() || {};
    if (likeCountEl) likeCountEl.textContent = d.likes || 0;
    if (shareCountEl) shareCountEl.textContent = d.shares || 0;
  });

  // comments list (ordered by createdAt)
  const commentsRef = collection(db, "videos", videoId, "comments");
  const q = query(commentsRef, orderBy("createdAt"));
  onSnapshot(q, snapshot => {
    if (commentCountEl) commentCountEl.textContent = snapshot.size;
    if (!commentsList) return;
    commentsList.innerHTML = "";

    snapshot.forEach(commentSnap => {
      const commentData = commentSnap.data();
      const commentId = commentSnap.id;

      // build comment DOM
      const commentDiv = document.createElement("div");
      commentDiv.className = "comment-item";
      commentDiv.dataset.commentId = commentId;
      commentDiv.style.padding = "10px";
      commentDiv.style.borderBottom = "1px solid rgba(0,0,0,0.05)";

      const p = document.createElement("p");
      p.className = "comment-text";
      p.textContent = commentData.text || "";

      // toolbar (like, reply, edit, delete)
      const toolbar = document.createElement("div");
      toolbar.className = "comment-toolbar";
      toolbar.style.display = "flex";
      toolbar.style.alignItems = "center";
      toolbar.style.gap = "8px";
      toolbar.style.marginTop = "8px";

      // Timestamp for each comment
      const timeSpan = document.createElement("span");
      timeSpan.className = "comment-time";
      timeSpan.textContent = formatTimestamp(commentData.createdAt);
      timeSpan.style.fontSize = "12px";
      timeSpan.style.color = "gray";
      timeSpan.style.marginLeft = "10px";

      p.appendChild(timeSpan);


      // --- Like span (comment level) ---
      const likeSpan = document.createElement("span");
      likeSpan.className = "comment-icon like-span";
      likeSpan.style.display = "inline-flex";
      likeSpan.style.alignItems = "center";
      likeSpan.style.cursor = "pointer";
      likeSpan.innerHTML = `<img src="images/like.png" alt="Like" class="icon" width="17" height="17">`;
      const likeCountSpan = document.createElement("span");
      likeCountSpan.className = "comment-like-count";
      likeCountSpan.textContent = (typeof commentData.likes === "number") ? commentData.likes : 0;
      likeCountSpan.style.marginLeft = "6px";
      likeCountSpan.style.fontSize = "13px";
      likeSpan.appendChild(likeCountSpan);

      likeSpan.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        try {
          const commentRef = doc(db, "videos", videoId, "comments", commentId);
          await updateDoc(commentRef, { likes: increment(1) });
        } catch (err) { console.error("like comment err:", err); }
      });
      attachHoverAndToggle(likeSpan, "like");

      // --- Reply span ---
      const replySpan = document.createElement("span");
      replySpan.className = "comment-icon reply-span";
      replySpan.style.display = "inline-flex";
      replySpan.style.alignItems = "center";
      replySpan.style.cursor = "pointer";
      replySpan.innerHTML = `<img src="images/comment.png" alt="Reply" width="17" height="17">`;
      const replyCountSpan = document.createElement("span");
      replyCountSpan.className = "reply-count";
      replyCountSpan.textContent = "0";
      replyCountSpan.style.marginLeft = "6px";
      replyCountSpan.style.fontSize = "13px";
      replySpan.appendChild(replyCountSpan);
      attachHoverAndToggle(replySpan, "reply");

      // realtime reply count and replies container
      attachReplyCount(commentDiv, commentId, replyCountSpan);

      // clicking reply opens a small reply box
      replySpan.addEventListener("click", () => {
        evPreventAndToggleReplyBox(commentDiv, commentId);
      });

      // --- Edit span ---
      const editSpan = document.createElement("span");
      editSpan.className = "comment-icon edit-span";
      editSpan.innerHTML = `<img src="images/edit.png" width="17" height="17" style="cursor:pointer;">`;
      editSpan.style.cursor = "pointer";
      attachHoverAndToggle(editSpan, "edit");
      editSpan.addEventListener("click", () => handleEditComment(commentDiv, commentId, p, commentData.text || ""));

      // --- Delete span ---
      const delSpan = document.createElement("span");
      delSpan.className = "comment-icon delete-span";
      delSpan.innerHTML = `<img src="images/trash.png" width="17" height="17" style="cursor:pointer;">`;
      delSpan.style.cursor = "pointer";
      attachHoverAndToggle(delSpan, "trash");
      delSpan.addEventListener("click", (ev) => {
        ev.stopPropagation();
        confirmDelete(async () => {
          try {
            const commentRef = doc(db, "videos", videoId, "comments", commentId);
            await deleteDoc(commentRef);
          } catch (err) { console.error("delete comment err:", err); }
        });
      });

      // assemble toolbar
      toolbar.appendChild(likeSpan);
      toolbar.appendChild(replySpan);
      toolbar.appendChild(editSpan);
      toolbar.appendChild(delSpan);

      // replies container (will be filled when reply box opened or in loadReplies)
      const repliesContainer = document.createElement("div");
      repliesContainer.className = "replies-container";
      repliesContainer.style.marginLeft = "24px";
      repliesContainer.style.marginTop = "10px";

      commentDiv.appendChild(p);
      commentDiv.appendChild(toolbar);
      commentDiv.appendChild(repliesContainer);

      commentsList.appendChild(commentDiv);

      // ensure replies are loaded for this comment (keeps replies in realtime)
      loadRepliesRealtime(repliesContainer, commentId);
    });
  });
}

/* -------------------- Reply count (realtime) -------------------- */
function attachReplyCount(commentDiv, commentId, replyCountSpan) {
  const repliesRef = collection(db, "videos", videoId, "comments", commentId, "replies");
  const q = query(repliesRef);
  onSnapshot(q, snap => {
    if (replyCountSpan) replyCountSpan.textContent = snap.size;
  });
}

/* -------------------- Reply box toggling & creation -------------------- */
function evPreventAndToggleReplyBox(commentDiv, commentId) {
  let commentBox = commentDiv.querySelector(".comment-box");
  if (!commentBox) {
    commentBox = document.createElement("div");
    commentBox.className = "comment-box";
    commentBox.style.marginTop = "10px";
    commentBox.style.display = "block";

    const textarea = document.createElement("textarea");
    textarea.rows = 3;
    textarea.placeholder = "Write a reply...";
    textarea.style.width = "100%";
    textarea.style.padding = "6px";
    textarea.style.border = "1px solid rgba(0,0,0,0.08)";
    textarea.style.borderRadius = "6px";
    textarea.style.resize = "vertical";

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Reply";
    submitBtn.style.marginTop = "6px";
    submitBtn.style.padding = "7px 12px";
    submitBtn.style.border = "none";
    submitBtn.style.borderRadius = "6px";
    submitBtn.style.cursor = "pointer";
    submitBtn.style.background = "linear-gradient(#575757, #333333, #000000)";
    submitBtn.style.color = "white";

    submitBtn.addEventListener("mouseenter", () => submitBtn.style.background = "linear-gradient(#f07e57, #F36F40, #ec6134)");
    submitBtn.addEventListener("mouseleave", () => submitBtn.style.background = "linear-gradient(#575757, #333333, #000000)");

    commentBox.appendChild(textarea);
    commentBox.appendChild(submitBtn);
    commentDiv.appendChild(commentBox);

    submitBtn.addEventListener("click", async () => {
      const replyText = (textarea.value || "").trim();
      if (!replyText) return;
      try {
        const repliesRef = collection(db, "videos", videoId, "comments", commentId, "replies");
        await addDoc(repliesRef, { text: replyText, likes: 0, createdAt: serverTimestamp() });
        textarea.value = "";
      } catch (err) { console.error("add reply err:", err); }
    });

    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        submitBtn.click();
      }
    });
  } else {
    commentBox.style.display = commentBox.style.display === "none" ? "block" : "none";
  }
}

/* ----------------- Realtime load replies for a comment -------------- */
function loadRepliesRealtime(repliesContainer, commentId) {
  const repliesRef = collection(db, "videos", videoId, "comments", commentId, "replies");
  const q = query(repliesRef, orderBy("createdAt"));
  onSnapshot(q, snapshot => {
    repliesContainer.innerHTML = "";
    snapshot.forEach(repSnap => {
      const r = repSnap.data();
      const rid = repSnap.id;
      const replyRef = doc(db, "videos", videoId, "comments", commentId, "replies", rid);

      const repDiv = document.createElement("div");
      repDiv.className = "reply-item";
      repDiv.style.marginBottom = "8px";

      // text + time container
      const textLine = document.createElement("div");
      textLine.style.display = "inline-flex";
      textLine.style.alignItems = "baseline"; // keeps baseline aligned
      textLine.style.gap = "8px";

      const repP = document.createElement("p");
      repP.textContent = r.text || "";

      // actions: like, edit, delete
      const actions = document.createElement("div");
      actions.style.display = "flex";
      actions.style.alignItems = "center";
      actions.style.gap = "8px";
      actions.style.marginTop = "6px";

      // like icon
      const likeIcon = document.createElement("img");
      likeIcon.src = "images/like.png";
      likeIcon.width = 14;
      likeIcon.style.cursor = "pointer";
      likeIcon.title = "Like reply";

      const likeCount = document.createElement("span");
      likeCount.textContent = r.likes || 0;
      likeCount.style.fontSize = "13px";

      likeIcon.addEventListener("mouseenter", () => likeIcon.src = "images/likeHover.png");
      likeIcon.addEventListener("mouseleave", () => likeIcon.src = "images/like.png");
      likeIcon.addEventListener("click", async () => {
        try {
          await updateDoc(replyRef, { likes: increment(1) });
        } catch (err) { console.error("like reply err:", err); }
      });

      // edit icon
      const editIcon = document.createElement("img");
      editIcon.src = "images/edit.png";
      editIcon.width = 14;
      editIcon.style.cursor = "pointer";
      editIcon.title = "Edit reply";

      editIcon.addEventListener("mouseenter", () => editIcon.src = "images/editHover.png");
      editIcon.addEventListener("mouseleave", () => editIcon.src = "images/edit.png");
      editIcon.addEventListener("click", () => handleEditReply(repDiv, replyRef, r));

      // delete icon
      const deleteIcon = document.createElement("img");
      deleteIcon.src = "images/trash.png";
      deleteIcon.width = 14;
      deleteIcon.style.cursor = "pointer";
      deleteIcon.title = "Delete reply";

      deleteIcon.addEventListener("mouseenter", () => deleteIcon.src = "images/trashHover.png");
      deleteIcon.addEventListener("mouseleave", () => deleteIcon.src = "images/trash.png");
      deleteIcon.addEventListener("click", (ev) => {
        ev.stopPropagation();
        confirmDelete(async () => {
          try {
            await deleteDoc(replyRef);
          } catch (err) { console.error("delete reply err:", err); }
        });
      });


      const repTime = document.createElement("span");
      repTime.className = "reply-time";
      repTime.textContent = formatTimestamp(r.createdAt);
      repTime.style.whiteSpace = "nowrap";
      repTime.style.fontSize = "12px";
      repTime.style.color = "gray";
      repTime.style.marginLeft = "10px";

      textLine.appendChild(repP);
      textLine.appendChild(repTime);
      repDiv.appendChild(textLine);

      const left = document.createElement("span");
      left.style.display = "inline-flex";
      left.style.alignItems = "center";
      left.style.gap = "6px";
      left.appendChild(likeIcon);
      left.appendChild(likeCount);

      const right = document.createElement("span");
      right.style.display = "inline-flex";
      right.style.alignItems = "center";
      right.style.gap = "6px";
      right.appendChild(editIcon);
      right.appendChild(deleteIcon);

      actions.appendChild(left);
      actions.appendChild(right);

      repDiv.appendChild(actions);
      repliesContainer.appendChild(repDiv);
    });
  });
}

/* -------------------- Edit comment -------------------- */
function handleEditComment(commentDiv, commentId, pElement, originalText) {
  const textarea = document.createElement("textarea");
  textarea.value = originalText;
  textarea.rows = 3;
  textarea.style.width = "100%";
  textarea.style.padding = "6px";
  textarea.style.border = "1px solid rgba(0,0,0,0.08)";
  textarea.style.borderRadius = "6px";

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.style.marginTop = "6px";
  saveBtn.style.padding = "7px 12px";
  saveBtn.style.border = "none";
  saveBtn.style.borderRadius = "6px";
  saveBtn.style.cursor = "pointer";
  saveBtn.style.background = "linear-gradient(#575757, #333333, #000000)";
  saveBtn.style.color = "white";

  saveBtn.addEventListener("mouseenter", () => saveBtn.style.background = "linear-gradient(#f07e57, #F36F40, #ec6134)");
  saveBtn.addEventListener("mouseleave", () => saveBtn.style.background = "linear-gradient(#575757, #333333, #000000)");

  // replace paragraph with textarea & save button
  commentDiv.replaceChild(textarea, pElement);
  commentDiv.insertBefore(saveBtn, textarea.nextSibling);
  textarea.focus();

  const save = async () => {
    const newText = textarea.value.trim();
    if (!newText) return;
    try {
      await updateDoc(doc(db, "videos", videoId, "comments", commentId), { text: newText });
      // restore paragraph
      pElement.textContent = newText;
      commentDiv.replaceChild(pElement, textarea);
      saveBtn.remove();
    } catch (err) { console.error("save comment edit err:", err); }
  };

  saveBtn.addEventListener("click", save);
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      save();
    }
  });
}

/* -------------------- Edit reply -------------------- */
function handleEditReply(repDiv, replyRef, r) {
  const originalContent = Array.from(repDiv.childNodes); // Save all original nodes

  const textarea = document.createElement("textarea");
  textarea.value = r.text || "";
  textarea.rows = 3;
  textarea.style.width = "100%";
  textarea.style.padding = "6px";
  textarea.style.border = "1px solid rgba(0,0,0,0.08)";
  textarea.style.borderRadius = "6px";

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.style.marginTop = "6px";
  saveBtn.style.padding = "7px 12px";
  saveBtn.style.border = "none";
  saveBtn.style.borderRadius = "6px";
  saveBtn.style.cursor = "pointer";
  saveBtn.style.background = "linear-gradient(#575757, #333333, #000000)";
  saveBtn.style.color = "white";

  saveBtn.addEventListener("mouseenter", () => saveBtn.style.background = "linear-gradient(#f07e57, #F36F40, #ec6134)");
  saveBtn.addEventListener("mouseleave", () => saveBtn.style.background = "linear-gradient(#575757, #333333, #000000)");

  // Clear repDiv and append textarea + save button
  repDiv.innerHTML = "";
  repDiv.appendChild(textarea);
  repDiv.appendChild(saveBtn);
  textarea.focus();

  const save = async () => {
    const newText = textarea.value;

    // Restore original content (including icons)
    repDiv.innerHTML = "";
    originalContent.forEach(node => repDiv.appendChild(node));

    // Update the <p> text
    const textP = repDiv.querySelector("p");
    if (textP) textP.textContent = newText;

    // Always update Firestore, even if unchanged
    try {
      await updateDoc(replyRef, { text: newText });
    } catch (err) {
      console.error("save reply edit err:", err);
    }
  };

  saveBtn.addEventListener("click", save);
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      save();
    }
  });
}

/* -------------------- Delete confirmation handler -------------------- */
function confirmDelete(actionFn) {
  if (!deleteConfirmOverlay || !confirmDeleteBtn || !cancelDeleteBtn) {
    // fallback to window.confirm if overlay not present
    if (window.confirm("Delete this item?")) actionFn();
    return;
  }

  deleteConfirmOverlay.classList.remove("hidden");
  const onConfirm = async () => {
    try { await actionFn(); } catch (err) { console.error("confirm delete action err:", err); }
    cleanup();
  };
  const onCancel = () => cleanup();

  confirmDeleteBtn.addEventListener("click", onConfirm);
  cancelDeleteBtn.addEventListener("click", onCancel);

  function cleanup() {
    deleteConfirmOverlay.classList.add("hidden");
    confirmDeleteBtn.removeEventListener("click", onConfirm);
    cancelDeleteBtn.removeEventListener("click", onCancel);
  }
}

/* -------------------- Bind main counters -------------------- */
likeImg?.addEventListener("click", handleLike);
shareImg?.addEventListener("click", handleShare);

/* -------------------- Init -------------------- */
(async function init() {
  try {
    await ensureVideoCounters();
    attachRealtimeListeners();
  } catch (err) {
    console.error("init error:", err);
  }
})();

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.list a').forEach(link => {
    const linkPath = link.pathname.replace(/^.*[\\/]/, '');
    const currentPath = window.location.pathname.replace(/^.*[\\/]/, '');

    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

    Object.keys(hoverMap).forEach(id => {
      const img = document.getElementById(id);
      const [normalSrc, hoverSrc] = hoverMap[id];

      img.addEventListener("mouseenter", () => {
          img.src = hoverSrc;
      });

      img.addEventListener("mouseleave", () => {
          img.src = normalSrc;
      });
  });
});

const hoverMap = {
    like: ["images/like.png", "images/likeHover.png"],
    comment: ["images/comment.png", "images/commentHover.png"],
    share: ["images/share.png", "images/shareHover.png"]
};