<script>
document.addEventListener("DOMContentLoaded", function () {
 form =document.querySelector("#contact form");
  if (!form) return; // safety check if form doesn't exist

  form.addEventListener("submit", function (e) {
    e.preventDefault()}

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    // Validation
    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields.")
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    // Success
    alert(`✅ Message Sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    form.reset();
  });
});
</script>
