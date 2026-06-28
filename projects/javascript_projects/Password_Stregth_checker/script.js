const password = document.getElementById("password");
const togglebtn = document.getElementById("togglebtn");
const strengthbar = document.getElementById("strength-bar");
const strengthtext = document.getElementById("strength-text");

password.addEventListener("input", () => {
  let val = password.value;
  let strength = 0;

  if (val === "") {
    strengthbar.style.width = "0%";
    strengthtext.innerText = "Start Typing...";
    strengthbar.style.background = "transparent";
    return; // Stops execution so the switch case doesn't overwrite this
  }

  if (val.match(/[a-z]/)) strength++;
  if (val.match(/[A-Z]/)) strength++;
  if (val.match(/[0-9]/)) strength++;
  if (val.match(/[!@#$*]/)) strength++;
  if (val.length >= 8) strength++; // Fixed typo: changed val.strength to val.length

  switch (strength) {
    case 1:
      strengthbar.style.width = "20%";
      strengthtext.innerText = "Very Weak";
      strengthbar.style.background = "red";
      break;
    case 2:
      strengthbar.style.width = "40%";
      strengthtext.innerText = "Weak";
      strengthbar.style.background = "orange"; // Swapped orange/yellow for better UX progression
      break;
    case 3:
      strengthbar.style.width = "60%";
      strengthtext.innerText = "Medium";
      strengthbar.style.background = "yellow";
      break;
    case 4:
      strengthbar.style.width = "80%";
      strengthtext.innerText = "Strong";
      strengthbar.style.background = "lightgreen"; // Fixed typo: 'light-green' is invalid CSS
      break;
    case 5: // Fixed duplicate 'case 4' typo
      strengthbar.style.width = "100%";
      strengthtext.innerText = "Very Strong";
      strengthbar.style.background = "green";
      break;
  }
});

// Fixed event listener assignment syntax
togglebtn.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglebtn.textContent = "Hide";
  } else {
    password.type = "password";
    togglebtn.textContent = "Show";
  }
});
