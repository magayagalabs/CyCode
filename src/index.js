/**
 * Copyright 2022-2023 Cyril John Magayaga
 * CyCode (v1.1.2) - First Desktop Application
 */

// npm install electron
const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    // New icon of CyCode (since July 20, 2022)
    icon: path.join(__dirname, "./img/logo.png"),
    // Dimensions
    width: 850,
    height: 600,
    // Preload (v24.0.0)
    webPreferences: {
      preload: path.join(__dirname, "./js/electron/preload.js"),
      fontawesome: path.join(__dirname, "./js/fontawesome/all.min.js")
    },

  });

  // Menubar is hidden
  win.setMenuBarVisibility(false);

  // Current Main
  win.loadFile('./src/about/index.html');
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
