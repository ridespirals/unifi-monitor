import { app, BrowserWindow } from 'electron'
import url from 'url'

let mainWindow = null

function createWindow() {

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#f7f7f7',
        show: true
    })

    mainWindow.loadURL(url.format({
        pathname: `${__dirname}/index.html`,
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.on('closed', () => {
        mainWindow = null
    })

}

app.on('ready', createWindow)

// quit when all windows are closed
app.on('window-all-closed', () => {
    // on OSX it is common for apps and their menu bar
    // to stay active until the user quits explicitly
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // on OSX it's common to re-create a window in the app
    // when the dock icon is clicked and there are not other
    // windows open
    if (mainWindow === null) {
        createWindow()
    }
})
