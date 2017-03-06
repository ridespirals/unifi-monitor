import { app, BrowserWindow } from 'electron'
import url from 'url'

let window = null
app.on('ready', () => {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#f7f7f7',
        show: false
    })

    window.loadURL(url.format({
        pathname: `${__dirname}/index.html`,
        protocol: 'file:',
        slashes: true
    }))

    window.once('ready-to-show', () => {
        window.show()
    })

    window.on('closed', () => {
        window = null
    })
})
