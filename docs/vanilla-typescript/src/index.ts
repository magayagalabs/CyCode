/**
 * Copyright 2022-2023 Cyril John Magayaga
 * Cyflex (based on CyCode)
 */

 import "./styles.css";
 import "./script.js";

  // Cyflex first paragraph and logo
  document.getElementById("cyflex-first-navbar").innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CyCode</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">History</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `;

 // Cyflex first paragraph and logo
 document.getElementById("cyflex-first").innerHTML = `
 <h1 style="text-align: center; padding-top: 12px; padding-bottom: 12px;"><b>CyCode: Official Documentation</b></h1>
 <p style="padding-left: 10px; padding-right: 10px; text-align: justify;"><b>CyCode</b> is a web-based offline code editor created and developed by <b><a href="https://github.com/Magayaga">Cyril John Magayaga</a></b>. It is available with the <b><a href="https://en.wikipedia.org/wiki/Electron_(software_framework)">Electron Framework</a></b> for <b>macOS</b>, <b>Microsoft Windows</b>, <b>Linux</b>, and <b>Android</b> operating systems. The main purpose of CyCode is its live <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. It was latest release on <b>v1.0.3</b> <b>(February 12, 2023)</b>.</p>
 `;
 
 // Cyflex second paragraph & pictures
 document.getElementById("cyflex-second").innerHTML = `
 <div style="padding-left: 10px; padding-right: 10px; padding-bottom: 20px;" class="bg-white">
 <div class="container text-center">
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v0.1.0 / December 23, 2021</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New first code editor and A preview build was released shortly thereafter. (<u>Initial release</u> & First Alpha release)</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v0.2.0 / December 25, 2021</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating software development tool and HTML editor.</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v0.3.0 / December 26, 2021</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New Javascript frameworks on <code>FileSaver.js</code> and <code>jscode.min.js</code>, and New <code>world-studios-code.html</code>.</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v0.4.0 / January 4, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New <b>Light Mode</b>.</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v0.4.1 / January 27, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Fixed the <code>editor.html</code> on original (dark) or light mode.</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v0.4.2 / July 21, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col"><b>Studios Code</b> was renamed to <b>CyCode</b> like new logo, and <code>Filesaver.js</code> was renamed to <code>saver.js</code>.</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v0.4.3 / August 17, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col"><code>jscode.min.js</code> was renamed to <code>code.min.js</code>, and then, <code>code.min.js</code> was unminify to <code>code.js</code>, new javascript again.</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v0.5.0 / August 18, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating <code>README.md</code> and fixing <code>package.json</code> and <code>index.html</code>.</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v0.5.1 / August 20, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New logo of <code>logo.ico</code>. Fixing <b>HTML</b> and <b>JavaScript</b>.</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v0.6.0 / August 27, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New redesign of CyCode, <b>TypeScript</b> is a online documentation, and fixing <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v0.6.1 / December 18, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New eight colors of CyCode (<b>Blanched Almond</b>, <b>Dark</b>, <b>Light Blue</b>, <b>Orange</b>, <b>Pink</b>, <b>Purple</b>, <b>Red</b>, and <b>Yellow</b>).</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v0.6.2 / December 22, 2022</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New four languages of CyCode officially (<b>English</b>, <b>Spanish</b>, <b>Korean</b>, and <b>Arabic</b>). (<u>Final Alpha release</u>)</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v1.0.0 / January 1, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">New <b>Electron</b> desktop application. (<u>First Beta release</u>)</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v1.0.1 / January 31, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Adding three languages of CyCode officially (<b>Chinese</b>, <b>Filipino</b>, and <b>Hindi</b>).</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v1.0.2 / February 7, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating <code>package.json</code> and <code>docs/vanilla-typescript/src/index.ts</code>. New <code>index.js</code> is new electron web application. New <code>android-cycode.html</code> on Available for Android.</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v1.0.3 / February 12, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Adding one language for CyCode officially (<b>Japanese</b>), and Updating <code>package.json</code> and <code>index.html</code> was menubar is hidden.</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v1.1.0 / March 1, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Deleting <b>languages</b> (too many languages), Updating <code>package.json</code>, and <code>index.js</code>. Current <code>src</code> was official development.</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v1.1.1 / March 9, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Fix a <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.New <code>drag</code> means selection of <code>mousedown</code> like left and <code>mouseup</code> like right including <code>drag.js</code>. Fix a <b>CyCode logo</b> for <b>Linux</b> was error again.</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v1.1.2 / March 16, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating <code>package.json</code> and <code>CyCode.html</code>. New <code>.gitignore</code> and <code>SECURITY.md</code>. Fixing a <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>CoffeeScript</b>.</div>
  </div>
  <div class="row align-items-start" style="color: black;">
    <div class="col"><b>v1.2.0 / May 19, 2023</b></div>
    <div class="col"><b>Main Developer:</b> Cyril John Magayaga</div>
    <div class="col">Updating <code>package.json</code>, <code>.gitignore</code>, and <code>index.js</code>. Fixing a <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>CoffeeScript</b>, and <b>TypeScript</b>. <b>Vue.js 2</b> support will end on December 31, 2023.</div>
  </div>
 </div>
 </div>
 `;

// Cyflex third paragraph and logo
document.getElementById("cyflex-third").innerHTML = `
<div style="padding-left: 10px; padding-right: 10px; padding-buttom: 12px;">
   <h5 style="text-align: center;">Copyright 2021-2023 <a href="https://github.com/Magayaga">Cyril John Magayaga</a>. Code licensed <a href="https://github.com/Magayaga/CyCode/blob/main/LICENSE">MIT</a>.</h5>
<div>
`;