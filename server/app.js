import Express  from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import homePageData from './homePage';
import App from '../client/App';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const PORT = process.env.PORT || 5000;
// created an express app
const app = new Express();
app.use(Express.static('./static'));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    console.log('app started');
    res.end('app started');
    // const app = ReactDOMServer.renderToString(<App />);
    // // const indexFile = path.resolve('./index.html');
    // // fs.readFile(indexFile, 'utf8', (err, data) => {
    // //     if (err) {
    // //         console.error('Something went wrong:', err);
    // //         return res.status(500).send('Oops, better luck next time!');
    // //     }

    // //     return res.send(
    // //         data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    // //     );
    // // });
});

//create a http server
var server = http.createServer(app);

server.listen(5000, (error) => {
    if (error) {
        console.error('Error while starting node server', error);
    } else {
        console.info('Node Server Listening on port', server.address().port);
    }
});