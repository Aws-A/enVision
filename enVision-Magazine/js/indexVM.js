document.addEventListener("DOMContentLoaded", function() {

  document.querySelectorAll(".logo").forEach(function(el) {
        el.style.cursor = "pointer";
        el.onclick = function () {
            window.location.href = "https://envision-digitalmedia.com/";
        };
  });

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

document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;
  
  // If on home/story selection page
  if (path.includes('enVisionMagazine.html')) {
    const stories = document.querySelectorAll('.strTop');
    stories.forEach(story => {
      story.addEventListener('click', function () {
        const id = story.getAttribute('data-id');
        localStorage.setItem('activeStory', id);
      });
    });

  // If on the target page where the story should be active
  } else if (path.includes('enVisionMagazine-top.html')) {
    const activeId = localStorage.getItem('activeStory');
    const allStories = document.querySelectorAll('.strTop');

    allStories.forEach(story => {
      const id = story.getAttribute('data-id');
      if (id === activeId) {
        story.classList.add('active');
      } else {
        story.classList.remove('active');
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".arti img");

  images.forEach((img) => {
    console.log("Found image:", img);

    if (img.complete) {
      console.log("Image is already loaded:", img.src);
      applyMargin(img);
    } else {
      img.onload = () => {
        console.log("Image loaded later:", img.src);
        applyMargin(img);
      };
      img.onerror = () => {
        console.error("Failed to load image:", img.src);
      };
    }
  });

  function applyMargin(img) {
    const width = img.naturalWidth;
    const height = img.naturalHeight;

    console.log("Image dimensions:", width, height);

    if (height > width) {
      img.style.marginTop = "-27%";;
      console.log("Applied portrait margin");
    } else if (width > height) {
      img.style.marginTop = "-10%";
      console.log("Applied landscape margin");
    } else {
      img.style.marginTop = "-15%";
      console.log("Applied square image margin");
    }
  }
});

const hoverMap = {
    like: ["images/like.png", "images/likeHover.png"],
    comment: ["images/comment.png", "images/commentHover.png"],
    share: ["images/share.png", "images/shareHover.png"]
};


