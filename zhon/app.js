window.addEventListener("DOMContentLoaded", (event) => {
  const loginForm = document.getElementById("loginForm");
  const registrationForm = document.getElementById("registrationForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const auth = {
        username: this.username.value,
        password: this.password.value,
      };
      localStorage.setItem("auth", JSON.stringify(auth));
      window.location.href = "home.html";
    });
  }

  if (registrationForm) {
    registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const register = {
        name: this.name.value,
        surname: this.surname.value,
        username: this.username.value,
        password: this.password.value,
        email: this.email.value,
        profilePhotoPin: this.profilePhotoPin.value,
      };
      localStorage.setItem("register", JSON.stringify(register));

      window.location.href = "home.html";
    });
  }

  const logout = document.getElementById("logout");
  
  if (window.location.pathname.includes("home.html")) {
    const userData =
      JSON.parse(localStorage.getItem("auth")) ||
      JSON.parse(localStorage.getItem("register"));
    if (userData) {
      document.getElementById("username").textContent = `${userData.username}`;
      logout.style.display = "block";
    } else {
      document.getElementById("username").textContent = "Қонақ";
      logout.style.display = "none";
    }
  }

  if (logout) {
    logout.addEventListener("click", function () {
      localStorage.clear();
    });
  }
});