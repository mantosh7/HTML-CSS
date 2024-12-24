function toggleLike(button) {
    if (button.classList.contains("liked")) {
      button.classList.remove("liked");
      button.style.color = "#10182f";
    } else {
      button.classList.add("liked");
      button.style.color = "#00b894"; // Green color to indicate liking
    }
  }
  
  function toggleComments(button) {
    const commentsSection = button.closest(".notice-item").querySelector(".comments-section");
    commentsSection.classList.toggle("hidden");
  }
  