import { app, BrowserWindow } from 'electron'
import url from 'url'
import _ from 'lodash'

let mainWindow = null

const size = { width: 480, height: 272, scale: 3 }

function createWindow() {

    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        width: size.width * size.scale,
        height: size.height * size.scale,
        backgroundColor: '#f7f7f7',
        icon: `${__dirname}/icons/png/unifi-logo-1024.png_64x64.png`,
        show: false
    })

    mainWindow.loadURL(url.format({
        pathname: `${__dirname}/index.html`,
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.on('closed', () => {
        mainWindow = null
    })

    mainWindow.on('ready-to-show', () => {
        mainWindow.setMenu(null)
        mainWindow.toggleDevTools()
        mainWindow.show()
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
