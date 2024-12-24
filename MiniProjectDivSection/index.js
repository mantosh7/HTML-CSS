function toggleLike(button) {
    if (button.textContent === "Like") {
      button.textContent = "Liked";
      button.style.backgroundColor = "#00b894";
    } else {
      button.textContent = "Like";
      button.style.backgroundColor = "#ffd700";
    }
  }
  
  function toggleComments(button) {
    const commentsSection = button.closest(".notice-item").querySelector(".comments-section");
    commentsSection.classList.toggle("hidden");
  }
  