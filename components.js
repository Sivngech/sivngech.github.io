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
            <a href="#contact" class="text-decoration-none text-dark fw-semibold">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  </header>`;

  // FOOTER
  const footerHTML = `
  <footer id="contact" style="background:#63BDEB; text-align:center;" class="py-3 mt-5">
   <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
      
      <!-- Left: Copyright -->
      <div class="text-white">
        © sivngech-erin
      </div>

      <!-- Middle: Social Icons -->
      <div class="d-flex gap-3 text-white">
        <a href="https://www.facebook.com/sivngech.khim?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" class="text-white" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a href="https://t.me/call/I-jngMD5jlYC1zMHSP7IA3-9OUg" target="_blank" class="text-white" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
        </a>
        <a href="https://t.me/Sivngech_khim" target="_blank" class="text-white" aria-label="Telegram">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
          </svg>
        </a>
        <a href="https://github.com/Sivngech" target="_blank" class="text-white" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
        <a href="mailto:sivngech2@gmail.com" target="_blank" class="text-white" aria-label="E-mail">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
      </svg></a>
         </div>

      <!-- Right: Navigation -->
      <nav class="d-flex flex-column flex-md-row gap-2">
        <a href="index.html" class="text-decoration-none text-light">Home</a>
        <a href="about-me.html" class="text-decoration-none text-light">About me</a>
        <a href="#" class="text-decoration-none text-light">Contact</a>
      </nav>
    </div>
  </div>
  </footer>`;

  // Inject to DOM
  document.getElementById("header").innerHTML = headerHTML;
  document.getElementById("footer").innerHTML = footerHTML;
});
