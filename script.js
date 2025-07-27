function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Temporary check — replace this with Firebase later
  if (email === "vendor@example.com" && password === "123456") {
    alert("Login successful!");
    window.location.href = "index.html"; // redirect to main page
  } else {
    alert("Invalid credentials. Please try again.");
  }

  return false;
}
// Smooth Scroll for Navbar Links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Demo Login Redirect from Homepage
function goToLogin() {
  window.location.href = "login.html";
}

// Dummy placeholder for future chatbot/modal map/dashboard logic
document.addEventListener("DOMContentLoaded", () => {
  console.log("SmartVendor Homepage Ready 🚀");

  // 🧠 Hook up future AI modal / chatbot triggers here
  // Example:
  // document.querySelector("#chatbotButton").addEventListener("click", showChatbotPopup);
});
