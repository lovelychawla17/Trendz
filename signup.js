const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    message.style.color = "red";
    message.innerText = "All fields are required";
    return;
  }

  try {
    const res = await fetch("https://trendz-backend-8smj.onrender.com/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    let data;
    try {
      data = await res.json();
    } catch {
      data = { message: "Invalid response from server" };
    }

    if (res.ok) {
      message.style.color = "lightgreen";
      message.innerText = data.message || "Signup successful!";
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    } else {
      message.style.color = "red";
      message.innerText = data.message || "Signup failed";
    }

  } catch (err) {
    console.error(err);
    message.style.color = "red";
    message.innerText = "Backend not running or unreachable";
  }
});
