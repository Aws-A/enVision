// ===== Firebase and Auth imports =====
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.addEventListener("DOMContentLoaded", () => {

  // ===== Firebase configuration =====
  const firebaseConfig = {
    apiKey: "AIzaSyB_aEQJrZILdy2JYl6HbLwT43myJhVJH6g",
    authDomain: "envision-ed5f3.firebaseapp.com",
    projectId: "envision-ed5f3",
    storageBucket: "envision-ed5f3.firebasestorage.app",
    messagingSenderId: "202691344541",
    appId: "1:202691344541:web:2f6c93e7f5138adf127c74",
    measurementId: "G-3NB50YD8F0"
  };

  // ===== Initialize Firebase =====
    let app;
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp(); // reuse existing app
  }
  const auth = getAuth(app);

  // ===== DOM Elements =====
  const authBtn = document.getElementById("authBtn");
  const authModal = document.getElementById("authModal");
  const signInForm = document.getElementById("signInForm");
  const signUpForm = document.getElementById("signUpForm");
  const signInTab = document.getElementById("signInTab");
  const signUpTab = document.getElementById("signUpTab");
  const goSignUp = document.getElementById("goSignUp");
  const goSignIn = document.getElementById("goSignIn");
  const signUpBtn = document.getElementById("signUpBtn");
  const signInBtn = document.getElementById("signInBtn");
  const signOutBtn = document.getElementById("signOutBtn");

  const signupEmail = document.getElementById("signupEmail");
  const signupPassword = document.getElementById("signupPassword");
  const confirmPassword = document.getElementById("confirmPassword");
  const signinEmail = document.getElementById("signinEmail");
  const passwordInput = document.getElementById("password");

  const togglePassword = document.getElementById("togglePassword");
  const togglePassword2 = document.getElementById("togglePassword2");
  const togglePassword3 = document.getElementById("togglePassword3");

  const eyeIcon1 = document.getElementById("eyeIcon1");
  const eyeIcon2 = document.getElementById("eyeIcon2");
  const eyeIcon3 = document.getElementById("eyeIcon3");

  const weakCell = document.getElementById('weakCell');
  const goodCell = document.getElementById('goodCell');
  const strongCell = document.getElementById('strongCell');
  const strengthTextEl = document.getElementById('strengthText');
  const lengthMsgEl = document.getElementById('lengthMsg');
  const matchMsgEl = document.getElementById('matchMsg');

  // ===== Auth modal toggle =====
  authBtn.addEventListener("click", () => {
    const isOpen = authModal.style.display === "block";
    authModal.style.display = isOpen ? "none" : "block";
    authBtn.querySelector("p").style.color = isOpen ? "black" : "#37B651";
  });

  // ===== Tab switch functions =====
  function showSignUp() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
    signInTab.classList.remove("active");
    signUpTab.classList.add("active");
  }
  function showSignIn() {
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
    signUpTab.classList.remove("active");
    signInTab.classList.add("active");
  }

  signUpTab.addEventListener("click", showSignUp);
  goSignUp.addEventListener("click", showSignUp);
  signInTab.addEventListener("click", showSignIn);
  goSignIn.addEventListener("click", showSignIn);

  // ===== Password toggle =====
  if (togglePassword) {
    togglePassword.addEventListener("click", () => {
      passwordInput.type = passwordInput.type === "password" ? "text" : "password";
      eyeIcon1.src = passwordInput.type === "password" ? "images/hide.png" : "images/view.png";
    });
  }

  if (togglePassword2) {
    togglePassword2.addEventListener("click", () => {
      signupPassword.type = signupPassword.type === "password" ? "text" : "password";
      eyeIcon2.src = signupPassword.type === "password" ? "images/hide.png" : "images/view.png";
    });
  }

  if (togglePassword3) {
    togglePassword3.addEventListener("click", () => {
      confirmPassword.type = confirmPassword.type === "password" ? "text" : "password";
      eyeIcon3.src = confirmPassword.type === "password" ? "images/hide.png" : "images/view.png";
    });
  }


  // ===== Password strength meter =====
function resetMeter() {
  weakCell.style.backgroundColor = '#fff';
  goodCell.style.backgroundColor = '#fff';
  strongCell.style.backgroundColor = '#fff';
}

// Updated setText to allow color hex or class
function setText(el, text, colorOrClass) {
  el.textContent = text;

  // Remove previous text color classes
  el.classList.remove('text-orange','text-blue','text-green');

  if (!colorOrClass) return;

  if (colorOrClass.startsWith('#')) {
    el.style.color = colorOrClass; // set direct hex color
  } else {
    el.style.color = '';            // clear any inline color
    el.classList.add(colorOrClass); // add class if provided
  }
}

function evaluateStrength(pwd) {
  if(!pwd) return { level:'Weak', score:0, lengthOk:false };
  const hasLower = /[a-z]/.test(pwd);
  const hasUpper = /[A-Z]/.test(pwd);
  const hasNumber = /\d/.test(pwd);
  const hasSymbol = /[^A-Za-z0-9]/.test(pwd);
  const lengthOk = pwd.length >= 8;
  const veryLong = pwd.length >= 12;
  let variety = 0;
  if(hasLower || hasUpper) variety++;
  if(hasNumber) variety++;
  if(hasSymbol) variety++;
  let level = 'Weak';
  if(veryLong && hasLower && hasUpper && hasNumber && hasSymbol) level='Strong';
  else if(lengthOk && variety>=2) level='Good';
  const score = level==='Weak'?0:(level==='Good'?1:2);
  return { level, score, lengthOk };
}

function updateMeter() {
  const pwd = signupPassword.value;
  const res = evaluateStrength(pwd);

  resetMeter();

  if(!pwd.length){
    setText(strengthTextEl,'');
    setText(lengthMsgEl,'');
    checkMatch();
    return;
  }

  // Strength meter
  if(res.score===0){
    weakCell.style.backgroundColor='#F36F40';
    setText(strengthTextEl,'Strength: Weak','#F36F40');
  }
  else if(res.score===1){
    weakCell.style.backgroundColor='#378CCB';
    goodCell.style.backgroundColor='#378CCB';
    setText(strengthTextEl,'Strength: Good','#378CCB');
  }
  else{
    weakCell.style.backgroundColor='#37B651';
    goodCell.style.backgroundColor='#37B651';
    strongCell.style.backgroundColor='#37B651';
    setText(strengthTextEl,'Strength: Strong','text-green');
  }

  // Length message
  if(!res.lengthOk)
    setText(lengthMsgEl,'Password must be at least 8 characters.','#F36F40');
  else
    setText(lengthMsgEl,'Length OK.','text-green');

  checkMatch();
}

function checkMatch() {
  const pwd = signupPassword.value;
  const conf = confirmPassword.value;

  if(!conf.length){ 
    setText(matchMsgEl,''); 
    return; 
  }

  if(pwd===conf) 
    setText(matchMsgEl,'Passwords match.','text-green');
  else 
    setText(matchMsgEl,'Passwords do not match.','#F36F40'); // hex orange
}

signupPassword.addEventListener('input', updateMeter);
confirmPassword.addEventListener('input', checkMatch);
resetMeter();


// ===== Sign Up =====
signUpBtn.addEventListener("click", () => {
  const email = signupEmail.value;
  const password = signupPassword.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCred => {
      authBtn.innerHTML = `
      <p style="color:#37B651;">${userCred.user.email}</p>
    `;
      authBtn.querySelector("p").style.color = "#37B651";
      authModal.style.display = "none";

      // Show sign out button
      signOutBtn.style.display = "inline-block";
    })
    .catch(err => alert(err.message));
});


// ===== Sign In =====
signInBtn.addEventListener("click", () => {
  const email = signinEmail.value;
  const password = passwordInput.value;
  signInWithEmailAndPassword(auth, email, password)
    .then(userCred => {
      authBtn.innerHTML = `<p>${userCred.user.email}</p>`;
      authBtn.querySelector("p").style.color = "#37B651";
      authModal.style.display = "none";

      // Show sign out button
      signOutBtn.style.display = "inline-block";
    })
    .catch(err => alert(err.message));
});

// ===== Sign Out =====
if (signOutBtn) {
  signOutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
      authBtn.innerHTML = "<p>Sign Up / Sign In</p>";
      authBtn.querySelector("p").style.color = "black";
      signOutBtn.style.display = "none";
    });
  });
}
});
