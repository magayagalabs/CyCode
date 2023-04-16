var showPreview;

showPreview = function() {
  var cssCode, frame, htmlCode, jsCode;
  htmlCode = document.getElementById('htmlCode').value;
  cssCode = '<style>' + document.getElementById('cssCode').value + '</style>';
  jsCode = '<scri' + 'pt>' + document.getElementById('jsCode').value + '</scri' + 'pt>';
  frame = document.getElementById('preview-window').contentWindow.document;
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
};

new FroalaEditor("textarea");