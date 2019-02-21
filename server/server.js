const express = require("express"),
    http = require('http'),
    httpServer = http.Server(app),
    request = require('request'),
    fs = require('fs'),
    cheerio = require('cheerio');
const bodyParser = require("body-parser");
const path = require("path");
const {fictionBookData, biographyBooksData, sciFiBooksData} = require('./static/files/listData');
const tabData = require('./static/files/tabData');

const API_PORT = 3001;
const app = express();
app.use('/Images', express.static(path.join(__dirname, '/static/projectImages/')));
// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/rum', async (req, res) => {
    var fi = fs.readFile(__dirname + '/index.html','utf8', async (err, data) =>{
    console.log(err)
  
    const $ = cheerio.load(data);
    console.log('loaded')
    const script = await getScript();
    console.log('got script')
    var scriptWithtag =`<script type="text/javascript">${script} </script>`.toString();
    $('head').prepend(scriptWithtag);
    console.log($('head script').length)
    const updated = $.html();
  
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(updated);
    res.end();
    })
});

async function getScript() {
    return new Promise((resolve, reject) =>{
    request('http://localhost:3357/jp/557/v3.2.1/InitialLoadScript.js', (err, res, body) => {
        if (err) {
            console.log('error')
            reject(err);
            return;
        }
        resolve(res.body);
    });
    })
}

/**
 * @description: To get data for tabs on list page
 */
app.get('/api/getTabData', (req, res, next) => {
    if (tabData) {
        return res.json({ responseData: tabData });
    }
    else
    {
        return res.json({ responseData: null });
    }
});

/**
 * @description: To get data for products on list page
 */
app.get('/api/getListData/:tabId', (req, res, next) => {
    if (req.params && req.params.tabId) {
        const tabId = req.params.tabId;
        let listData;
        switch(tabId) {
            case "1":
                listData = fictionBookData;
                break;
            case "2":
                listData = biographyBooksData;
                break;
            case "3":
                listData = sciFiBooksData;
                break;
            default:
                listData = fictionBookData;
                break;
        }
        return res.json({ responseData: listData });
    }
    else
    {
        return res.json({ responseData: null });
    }
});
// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));