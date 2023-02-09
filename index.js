/**
 * Copyright 2022-2023 Cyril John Magayaga
 * CyCode (v1.0.3) - First Desktop Application
 */

// npm install electron
const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    // New icon of CyCode (since July 20, 2022)
    icon: path.join(__dirname, "./src/english/img/logo.ico"),
    // Dimensions
    width: 850,
    height: 600,
  });

  // First English language of the CyCode
  win.loadFile('./src/english/cycode.html');
};

// createWindow is a web browser
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
