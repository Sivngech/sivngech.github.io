// components.js

document.addEventListener("DOMContentLoaded", () => {
  // HEADER
  const headerHTML = `
  <header class="bg-light py-3 shadow-sm fixed-top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-3 text-center text-md-start mb-3 mb-md-0">
          <a href="index.html" class="text-decoration-none">
            <div class="fw-bold fs-4 " style="letter-spacing: 1px;">
              <span class="text-dark">SIV</span> <span style="color: #63BDEB;">NGECH</span>
            </div>
          </a>
        </div>
        <div class="col-12 col-md-9">
          <nav class="d-flex justify-content-center justify-content-md-end gap-3">
            <a href="index.html" class="text-decoration-none text-dark fw-semibold">Home</a>
            <a href="about-me.html" class="text-decoration-none text-dark fw-semibold">About Me</a>
            <a href="#" class="text-decoration-none text-dark fw-semibold">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  </header>`;

  // FOOTER
  const footerHTML = `
  <footer style="background:#63BDEB; text-align:center;" class="py-3 mt-5">
    <div class="container">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div class="mb-2 mb-md-0 text-white">
          © sivngech-erin
        </div>
        <div class="text-white d-flex gap-4">
          <!-- Your social icons -->
          <!-- Keep your SVGs here -->
        </div>
        <nav class="d-flex flex-column flex-md-row gap-2">
          <a href="index.html" class="text-decoration-none text-dark">Home</a>
          <a href="about-me.html" class="text-decoration-none text-dark">About me</a>
          <a href="#" class="text-decoration-none text-dark">Contact</a>
        </nav>
      </div>
    </div>
  </footer>`;

  // Inject to DOM
  document.getElementById("header").innerHTML = headerHTML;
  document.getElementById("footer").innerHTML = footerHTML;
});
