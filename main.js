import { BrowserWindow, app, dialog } from 'electron/main'
import { resolve } from 'path'

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        backgroundMaterial: 'acrylic',
        transparent: true,
        backgroundColor: '#000000AA',
        roundedCorners: true,
        focusable: true,
        autoHideMenuBar: true,
        webPreferences: {
            devTools: false
        },
        icon: resolve('tateti.ico')
    })

    win.loadFile('index.html');

})