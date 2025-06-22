document.addEventListener("DOMContentLoaded", function () {

  const content = document.getElementById("content");
  const links = document.querySelectorAll(".nav-link");

  const form   = document.getElementById("loginForm");
const msgEl  = document.getElementById("message");
const loginSection = document.getElementById("loginSection");
const siteSection  = document.getElementById("siteSection");
const body         = document.getElementById("pageBody");

/* === 〽️ Password‑strength meter (kombinatorika) === */
const pw   = document.getElementById("password");
const pwInfo = document.getElementById("pwInfo");

// helper untuk menampilkan bilangan besar secara ringkas
const fmtBig = (n) => n.toExponential(2).replace("e+", "×10^");

pw.addEventListener("input", () => {
  const val = pw.value;
  const len = val.length;

  // tentukan ukuran himpunan karakter
  let set = 0;
  if (/[a-z]/.test(val)) set += 26;
  if (/[A-Z]/.test(val)) set += 26;
  if (/[0-9]/.test(val)) set += 10;
  if (/[^A-Za-z0-9]/.test(val)) set += 32; // simbol umum

  if (!len || !set) {            // kosong
    pwInfo.textContent = "";
    pwInfo.className   = "block mt-1 text-xs text-gray-500";
    return;
  }

  const combos  = Math.pow(set, len);                // n^k
  const entropy = (Math.log2(set) * len).toFixed(1); // bit

  let label = "Weak", color = "text-red-500";
  if (entropy >= 60) { label = "Strong";  color = "text-green-600"; }
  else if (entropy >= 40) { label = "Medium"; color = "text-yellow-600"; }

  pwInfo.className = `block mt-1 text-xs font-medium ${color}`;
  pwInfo.textContent = `${label} • ${fmtBig(combos)} kombinasi • ${entropy} bit`;
});

  const sections = {
    graf: ` 
            <div class="fade-in">
                <h2>📉Apa itu Graf?</h2>
                <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 2rem; padding: 2rem 0; text-align: left;">
                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">📘Bagian 1</h3>
                        <p style="margin: 10px 0;">Topik: Pengenalan dan Dasar-Dasar Graf</p>
                        <div style="margin-top: 15px;">
                            <a href="https://drive.google.com/file/d/1l9-1YD_zZ2o9si1-w7-R5bimSeVIDsD6/view?usp=sharing" target="_blank" style="color: #0066cc; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            Graf1
                        </a>
                        </div>
                    </div>
                    
                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">📗Bagian 2</h3>
                        <p style="margin: 10px 0;">Topik: Representasi dan Keplanaran Graf</p>
                        <div style="margin-top: 15px;">
                            <a href="https://drive.google.com/file/d/1uKNmrkqfJTCZ6afiR1BnpJszcTApMwO_/view?usp=sharing" target="_blank" style="color: #0066cc; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            Graf2
                        </a>
                        </div>
                    </div>

                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">📙Bagian 3</h3>
                        <p style="margin: 10px 0;">Topik: Lintasan & Sirkuit Khusus, Aplikasi Graf</p>
                        <div style="margin-top: 15px;">
                            <a href="https://drive.google.com/file/d/1cql7rEgVjeUt8sulAJzsu0dS1q55D1Mn/view?usp=sharing" target="_blank" style="color: #0066cc; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            Graf3
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        `,
    kombinatorika:` 
            <div class="fade-in">
                <h2>🎲Apa itu Kombinatorika?</h2>
                <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 2rem; padding: 2rem 0; text-align: left;">
                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">🔢Bagian 1</h3>
                        <p style="margin: 10px 0;">Topik: Dasar-Dasar Kombinatorika</p>
                        <div style="margin-top: 15px;">
                            <a href="https://drive.google.com/file/d/1bDzrlTnkbLtBE9J2tmSdguYBWQoNcZfH/view?usp=sharing" target="_blank" style="color: #0066cc; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            Kombinatorika1
                        </a>
                        </div>
                    </div>
                    
                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">🧩Bagian 2</h3>
                        <p style="margin: 10px 0;">Topik: Kombinasi Lanjutan dan Aplikasi</p>
                        <div style="margin-top: 15px;">
                            <a href="https://drive.google.com/file/d/1hDWJFFRguLx4bSOqt0wTNINKJjJGQsaF/view?usp=drive_link" target="_blank" style="color: #0066cc; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            Kombinatorika2
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        `,
    pohon: ` 
            <div class="fade-in">
                <h2>🌳Apa itu Pohon?</h2>
                <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 2rem; padding: 2rem 0; text-align: left;">
                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">📐Bagian 1</h3>
                        <p style="margin: 10px 0;">Topik: Dasar-Dasar Pohon</p>
                        <div style="margin-top: 15px;">
                            <a href="https://drive.google.com/file/d/1l4mHecIgKiGdAoe4904rp9q1B2PcWcaf/view?usp=drive_link" target="_blank" style="color: #0066cc; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            Pohon1
                        </a>
                        </div>
                    </div>
                    
                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">🧬Bagian 2</h3>
                        <p style="margin: 10px 0;">Topik: Pohon Berakar dan Aplikasi</p>
                        <div style="margin-top: 15px;">
                            <a href="https://drive.google.com/file/d/1LFBqA71RYnLgsEG64l16-yudhyTvHBab/view?usp=drive_link" target="_blank" style="color: #0066cc; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            Pohon2
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        `,
  };

  function showSection(sectionId) {
    content.innerHTML = sections[sectionId];
  }

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(link.dataset.section);
    });
  });

  showSection("graf");
});
