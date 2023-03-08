/**
 * Copyright 2022-2023 Cyril John Magayaga
 * CyCode (v1.1.1) - First Desktop Application
 */

// npm install electron
const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    // New icon of CyCode (since July 20, 2022)
    icon: path.join(__dirname, "./img/logo.ico"),
    // Dimensions
    width: 850,
    height: 600,

  });

  // Menubar is hidden
  win.setMenuBarVisibility(false);

  // Current Main
  win.loadFile('./src/cycode.html');
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
