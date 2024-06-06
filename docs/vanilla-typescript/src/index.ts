/**
 * Copyright 2022-2024 Cyril John Magayaga
 * Cyflex (based on CyCode)
 */

 import "./styles.css";
 import "./script.js";
 import "./logo.svg";

  // Cyflex first paragraph and logo
  document.getElementById("cyflex-first-navbar").innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-dark border-bottom">
  <div class="container-fluid">
    <a class="navbar-brand text-light">
    <svg width="30" height="30" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1000" height="1000" rx="400" fill="#66595C"/>
      <g filter="url(#filter0_d_0_1)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M557.037 560.667C590.542 560.667 617.703 533.505 617.703 500C617.703 466.495 590.542 439.333 557.037 439.333C523.532 439.333 496.37 466.495 496.37 500C496.37 533.505 523.532 560.667 557.037 560.667ZM557.037 616.667C621.47 616.667 673.703 564.433 673.703 500C673.703 435.567 621.47 383.333 557.037 383.333C492.604 383.333 440.37 435.567 440.37 500C440.37 564.433 492.604 616.667 557.037 616.667Z" fill="#EAEAEA"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M645.185 648.815C727.373 648.815 794 582.188 794 500C794 417.812 727.373 351.185 645.185 351.185C562.997 351.185 496.37 417.812 496.37 500C496.37 582.188 562.997 648.815 645.185 648.815ZM645.185 704.815C758.301 704.815 850 613.116 850 500C850 386.884 758.301 295.185 645.185 295.185C532.069 295.185 440.37 386.884 440.37 500C440.37 613.116 532.069 704.815 645.185 704.815Z" fill="#EAEAEA"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M500 794C662.372 794 794 662.372 794 500C794 337.628 662.372 206 500 206C337.628 206 206 337.628 206 500C206 662.372 337.628 794 500 794ZM500 850C693.3 850 850 693.3 850 500C850 306.7 693.3 150 500 150C306.7 150 150 306.7 150 500C150 693.3 306.7 850 500 850Z" fill="#EAEAEA"/>
      </g>
      <defs>
      <filter id="filter0_d_0_1" x="146" y="150" width="708" height="708" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
      </filter>
      </defs>
      </svg>
      CyCode
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-light active" aria-current="page" href="#">Releases</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light active" aria-current="page" href="#">History</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light active" aria-current="page" href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `;

 // Cyflex first paragraph and logo
 document.getElementById("cyflex-first").innerHTML = `
 <h1 class="text-center p-3"><b>CyCode: Official Documentation</b></h1>
 <p class="px-5"><b>CyCode</b> is a web-based offline code editor created and developed by <b><a href="https://github.com/Magayaga">Cyril John Magayaga</a></b>. It is available with the <b><a href="https://en.wikipedia.org/wiki/Electron_(software_framework)">Electron Framework</a></b> for <b>macOS</b>, <b>Microsoft Windows</b>, <b>Linux</b>, and <b>Android</b> operating systems. The main purpose of CyCode is its live <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. It was latest release on <b>v2.0.6</b> <b>(June 7, 2024)</b>.</p>
 `;

 // Cyflex second paragraph & pictures
 document.getElementById("cyflex-second").innerHTML = `
 <div style="padding-left: 10px; padding-right: 10px; padding-bottom: 20px;" class="bg-dark p-5">
 <div class="container text-center">
  <div class="row align-items-start text-light border">
    <div class="col"><b>v0.1.0 / December 23, 2021</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New first code editor and A preview build was released shortly thereafter. (<u>Initial release</u> & First Alpha release)</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v0.2.0 / December 25, 2021</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating software development tool and HTML editor.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v0.3.0 / December 26, 2021</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New Javascript frameworks on <code>FileSaver.js</code> and <code>jscode.min.js</code>, and New <code>world-studios-code.html</code>.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v0.4.0 / January 4, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New <b>Light Mode</b>.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v0.4.1 / January 27, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Fixed the <code>editor.html</code> on original (dark) or light mode.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v0.4.2 / July 21, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col"><b>Studios Code</b> was renamed to <b>CyCode</b> like new logo, and <code>Filesaver.js</code> was renamed to <code>saver.js</code>.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v0.4.3 / August 17, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col"><code>jscode.min.js</code> was renamed to <code>code.min.js</code>, and then, <code>code.min.js</code> was unminify to <code>code.js</code>, new javascript again.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v0.5.0 / August 18, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating <code>README.md</code> and fixing <code>package.json</code> and <code>index.html</code>.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v0.5.1 / August 20, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New logo of <code>logo.ico</code>. Fixing <b>HTML</b> and <b>JavaScript</b>.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v0.6.0 / August 27, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New redesign of CyCode, <b>TypeScript</b> is a online documentation, and fixing <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v0.6.1 / December 18, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New eight colors of CyCode (<b>Blanched Almond</b>, <b>Dark</b>, <b>Light Blue</b>, <b>Orange</b>, <b>Pink</b>, <b>Purple</b>, <b>Red</b>, and <b>Yellow</b>).</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v0.6.2 / December 22, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New four languages of CyCode officially (<b>English</b>, <b>Spanish</b>, <b>Korean</b>, and <b>Arabic</b>). (<u>Final Alpha release</u>)</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v1.0.0 / January 1, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New <b>Electron</b> desktop application. (<u>First Beta release</u>)</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v1.0.1 / January 31, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Adding three languages of CyCode officially (<b>Chinese</b>, <b>Filipino</b>, and <b>Hindi</b>).</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v1.0.2 / February 7, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating <code>package.json</code> and <code>docs/vanilla-typescript/src/index.ts</code>. New <code>index.js</code> is new electron web application. New <code>android-cycode.html</code> on Available for Android.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v1.0.3 / February 12, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Adding one language for CyCode officially (<b>Japanese</b>), and Updating <code>package.json</code> and <code>index.html</code> was menubar is hidden.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v1.1.0 / March 1, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Deleting <b>languages</b> (too many languages), Updating <code>package.json</code>, and <code>index.js</code>. Current <code>src</code> was official development.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v1.1.1 / March 9, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Fix a <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.New <code>drag</code> means selection of <code>mousedown</code> like left and <code>mouseup</code> like right including <code>drag.js</code>. Fix a <b>CyCode logo</b> for <b>Linux</b> was error again.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v1.1.2 / March 16, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating <code>package.json</code> and <code>CyCode.html</code>. New <code>.gitignore</code> and <code>SECURITY.md</code>. Fixing a <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>CoffeeScript</b>.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v1.2.0 / May 19, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating <code>package.json</code>, <code>.gitignore</code>, and <code>index.js</code>. Fixing a <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>CoffeeScript</b>, and <b>TypeScript</b>. <b>Vue.js 2</b> support will end on December 31, 2023.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v1.2.1 / May 27, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating HTML, CSS, and JavaScript. New scroll on HTML.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v1.2.2 / July 21, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating HTML, CSS, and JavaScript. New WYSIWYG based on froala editor.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v1.2.3 / July 30, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating and fixing HTML, CSS, and JavaScript.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v1.3.0 / December 16, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating <code>README.md</code> and fixing HTML.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v1.3.1 / December 20, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New and Updating <code>link.js</code> (method to open a URL in the default web browser). New font of CyCode is <b>Fira Sans</b> and fixing HTML, CSS, and JavaScript files.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v1.3.2 / December 23, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating and fixing <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b> files. Updating <code>README.md</code> and official documentation of CyCode. <code>/images</code> to <code>.github/images</code></div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v2.0.0 / December 31, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating and fixing <b>HTML</b> (About CyCode is new <b>footer</b>) and <b>JavaScript</b> (Fixing and updating <b>Bootstrap</b>) files. Updating <code>README.md</code> and official documentation of CyCode.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v2.0.1 / January 8, 2024</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating and fixing <b>HTML</b> files, <b>JavaScript</b> files, <code>README.md</code>, official documentation of CyCode, and <code>package.json</code></div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v2.0.2 / January 16, 2024</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating and fixing <b>HTML</b> files and <code>README.md</code>.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v2.0.3 / January 30, 2024</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating and fixing <b>HTML</b>, <b>JavaScript</b>, <b>TypeScript</b>, and <b>CoffeeScript</b> files. Updating official documentation of CyCode, <code>package.json</code>, and <code>README.md</code>.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v2.0.4 / February 3, 2024</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating and fixing <b>HTML</b> and <b>JavaScript</b> files including <b>bootstrap</b>. Updating official documentation of CyCode, <code>package.json</code>, and <code>README.md</code>.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v2.0.5 / February 29, 2024</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating and fixing <b>HTML</b> and Checking <b>Arc browser</b>. Updating official documentation of CyCode, <code>package.json</code>, and <code>README.md</code>.</div>
  </div>
  <div class="row align-items-start text-light border">
    <div class="col"><b>v2.0.5 / June 7, 2024</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating and fixing <b>HTML</b>. Updating official documentation of CyCode, <code>package.json</code>.</div>
  </div>
 </div>
 </div>
 `;

// Cyflex third paragraph and logo
document.getElementById("cyflex-third").innerHTML = `
<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
      <svg width="30" height="30" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1000" height="1000" rx="400" fill="#66595C"/>
      <g filter="url(#filter0_d_0_1)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M557.037 560.667C590.542 560.667 617.703 533.505 617.703 500C617.703 466.495 590.542 439.333 557.037 439.333C523.532 439.333 496.37 466.495 496.37 500C496.37 533.505 523.532 560.667 557.037 560.667ZM557.037 616.667C621.47 616.667 673.703 564.433 673.703 500C673.703 435.567 621.47 383.333 557.037 383.333C492.604 383.333 440.37 435.567 440.37 500C440.37 564.433 492.604 616.667 557.037 616.667Z" fill="#EAEAEA"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M645.185 648.815C727.373 648.815 794 582.188 794 500C794 417.812 727.373 351.185 645.185 351.185C562.997 351.185 496.37 417.812 496.37 500C496.37 582.188 562.997 648.815 645.185 648.815ZM645.185 704.815C758.301 704.815 850 613.116 850 500C850 386.884 758.301 295.185 645.185 295.185C532.069 295.185 440.37 386.884 440.37 500C440.37 613.116 532.069 704.815 645.185 704.815Z" fill="#EAEAEA"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M500 794C662.372 794 794 662.372 794 500C794 337.628 662.372 206 500 206C337.628 206 206 337.628 206 500C206 662.372 337.628 794 500 794ZM500 850C693.3 850 850 693.3 850 500C850 306.7 693.3 150 500 150C306.7 150 150 306.7 150 500C150 693.3 306.7 850 500 850Z" fill="#EAEAEA"/>
      </g>
      <defs>
      <filter id="filter0_d_0_1" x="146" y="150" width="708" height="708" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
      </filter>
      </defs>
      </svg>
      </a>
      <span class="mb-3 mb-md-0 text-light nav-link">© 2021 - 2024 <a href="https://github.com/Magayaga">Cyril John Magayaga</a></span>
    </div>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="https://github.com/Magayaga/CyCode/blob/main/LICENSE" class="nav-link px-2 text-light">MIT License</a></li>
    </ul>
  </footer>
</div>
`;
