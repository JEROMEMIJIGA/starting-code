document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    toggleBtn.setAttribute("aria-pressed", isDark);
  });

  // Optional: Form feedback
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    feedback.textContent = "✅ Message sent successfully!";
    form.reset();
  });
});

