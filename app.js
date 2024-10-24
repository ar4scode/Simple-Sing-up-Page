const inputContainer = document.querySelector(".inputs-container");

document.querySelector(".email-signup").addEventListener("click", () => {
  inputContainer.innerHTML = `<div class="name-container">
        <label class="none-active" for="name">Name</label>
        <input type="text" id="name" placeholder="Name">
      </div>

      <div class="email-container">
        <label class="none-active" for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email">
      </div>

      <div class="password-container">
        <label class="none-active" for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Password">
      </div>`;
});
