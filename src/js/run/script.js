const htmlEditor = CodeMirror(document.querySelector(".editor .code .html-code"), {
    lineNumbers: true,
    tabSize: 4,
    mode: "xml",
    theme: "midnight",
    addon: "css-hint",
    hint: "true"
  });
  
  const cssEditor = CodeMirror(document.querySelector(".editor .code .css-code"), {
    lineNumbers: true,
    tabSize: 4,
    mode: "css",
    theme: "midnight"
  });
  
  const jsEditor = CodeMirror(document.querySelector(".editor .code .js-code"), {
    lineNumbers: true,
    tabSize: 4,
    mode: "javascript",
    theme: "midnight"
  });
  
  document.querySelector("#run-btn").addEventListener("click", function() {
    let htmlCode = htmlEditor.getValue();
    let cssCode = "<style>" + cssEditor.getValue()+"</style>";
    let jsCode = "<scri"+"pt>"+jsEditor.getValue()+"</scri"+"pt>";
    let previewWindow = document.querySelector("#preview-window").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlCode+cssCode+jsCode);
    previewWindow.close();
  });