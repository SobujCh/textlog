const { dirname } = require('path');
var fs = require('fs');
var util = require('util');

const appDir = dirname(require.main.filename);
var log_file = fs.createWriteStream(appDir + '/debug.log', {flags : 'a'});


function textlog(...txt){
    const date = new Date();
    let day = date.getDate();
    if(day<10){day='0'+day;}
    let month = date.getMonth() + 1;
    if(month<10){month='0'+month;}
    let year = date.getFullYear();
    let hour = date.getHours();
    if(hour<10){hour='0'+hour;}
    let minutes = date.getMinutes();
    if(minutes<10){minutes='0'+minutes;}
    let seconds = date.getSeconds();
    if(seconds<10){seconds='0'+seconds;}
    let ms = date.getMilliseconds();
    if(ms<10){ms='00'+ms;}else if(ms<100){ms='0'+ms;}
    let currentDate = `${day}-${month}-${year} ${hour}:${minutes}:${seconds}:${ms} :`;
    console.log(currentDate,...txt);
    log_file.write(util.format(currentDate,...txt) + '\n');
}

export { textlog as default };