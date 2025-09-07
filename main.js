const { app, BrowserWindow } = require("electron");
const path = require("path");
let mainWindow;

// app.on('ready', () => {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false
//     }
//   });

//   if (process.env.NODE_ENV === 'development') {
//     mainWindow.loadURL('http://localhost:8080'); // Vue dev server
//   } else {
//     mainWindow.loadFile(path.join(__dirname, 'renderer/dist/index.html')); // Production
//   }
// });
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  console.log("process env:", process.env);
  console.log("process name:", process.env.NODE_ENV);
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    // Load Vue dev server
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL);
    mainWindow.webContents.openDevTools();
  } else {
    // Load production build (after 'npm run build')
    mainWindow.loadFile(path.join(__dirname, 'renderer/dist/index.html'));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
