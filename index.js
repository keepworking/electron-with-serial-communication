const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

function createWindow(){
  mainWindow = new BrowserWindow({
    width:450,
    height: 450,
    frame: false,
    webPreferences: {
      nodeIntegrationInWorker: true,
      webSecurity:false
    },
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname,'index.html'),
    protocol:'file:',
    slashes:true
  }))

  mainWindow.on('closed',function() {
    mainWindow = null
  })
}



app.on('ready',createWindow)
