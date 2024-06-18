document.addEventListener('DOMContentLoaded', function () {
  // Initialize CodeMirror instances
  var htmlEditor = CodeMirror.fromTextArea(document.getElementById("htmlCode"), {
      lineNumbers: true,
      mode: "htmlmixed",
      theme: "default"
  });

  var cssEditor = CodeMirror.fromTextArea(document.getElementById("cssCode"), {
      lineNumbers: true,
      mode: "css",
      theme: "default"
  });

  var jsEditor = CodeMirror.fromTextArea(document.getElementById("jsCode"), {
      lineNumbers: true,
      mode: "javascript",
      theme: "default"
  });

  // Placeholder text for each editor
  var placeholders = {
      html: "<!-- Enter your HTML code here -->",
      css: "/* Enter your CSS code here */",
      js: "// Enter your JavaScript code here"
  };

  // Function to update placeholder visibility
  function updatePlaceholder(editor, placeholder) {
      var wrapper = editor.getWrapperElement();
      var content = editor.getValue().trim();
      if (content === "" && !editor.state.focused) {
          wrapper.classList.add("CodeMirror-empty");
          wrapper.setAttribute("data-placeholder", placeholder);
      } else {
          wrapper.classList.remove("CodeMirror-empty");
          wrapper.removeAttribute("data-placeholder");
      }
  }

  // Initialize placeholders
  updatePlaceholder(htmlEditor, placeholders.html);
  updatePlaceholder(cssEditor, placeholders.css);
  updatePlaceholder(jsEditor, placeholders.js);

  // Update placeholder visibility on editor focus and input
  htmlEditor.on("focus", function () { updatePlaceholder(htmlEditor, placeholders.html); });
  cssEditor.on("focus", function () { updatePlaceholder(cssEditor, placeholders.css); });
  jsEditor.on("focus", function () { updatePlaceholder(jsEditor, placeholders.js); });

  htmlEditor.on("change", function () { updatePlaceholder(htmlEditor, placeholders.html); });
  cssEditor.on("change", function () { updatePlaceholder(cssEditor, placeholders.css); });
  jsEditor.on("change", function () { updatePlaceholder(jsEditor, placeholders.js); });

  // Function to update preview window
  function updatePreview() {
      var previewFrame = document.getElementById('preview-window');
      var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
      preview.open();
      preview.write(htmlEditor.getValue() + '<style>' + cssEditor.getValue() + '</style>' + '<script>' + jsEditor.getValue() + '</script>');
      preview.close();
  }

  // Update preview on input change
  htmlEditor.on("change", updatePreview);
  cssEditor.on("change", updatePreview);
  jsEditor.on("change", updatePreview);

  // Initial update
  updatePreview();
});

new FroalaEditor("textarea");