import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
        icon: path.join(__dirname, 'icon.icns')
    })

    // Change the URL based on the environment variable
    const url = process.env.NODE_ENV === 'dev' ? 'http://localhost:3000' : 'https://typescript-multiplayer-rpg.herokuapp.com/';
    win.loadURL(url)
}

app.whenReady().then(createWindow)
