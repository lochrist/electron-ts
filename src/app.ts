import { app, BrowserWindow } from 'electron';
import * as url from 'url';
import * as path from 'path';

let win;

app.on('ready', () => {
    win = new BrowserWindow({
        backgroundColor: "0x66CD00",
        width: 800,
        height: 600
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    

    app.setBadgeCount(9);
});