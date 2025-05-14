document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;
  
  // If on home/story selection page
  if (path.includes('enVisionMagazine.html')) {
    const stories = document.querySelectorAll('.strR');
    stories.forEach(story => {
      story.addEventListener('click', function () {
        const id = story.getAttribute('data-id');
        localStorage.setItem('activeStory', id);
      });
    });

  // If on the target page where the story should be active
  } else if (path.includes('enVisionMagazine-top3.html')) {
    const activeId = localStorage.getItem('activeStory');
    const allStories = document.querySelectorAll('.strR');

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