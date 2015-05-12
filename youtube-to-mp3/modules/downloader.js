var path = require('path');
var fs = require('fs');
var ytdl = require('youtube-dl');


var downloader = function (codiceVideo, callback) {

    var video = ytdl('http://www.youtube.com/watch?v='+codiceVideo,
        // Optional arguments passed to youtube-dl.
        ['-f', '141']);

    var size = 0;
    var fileOutput;
    video.on('info', function (info) {
        size = info.size;
        console.log('Got video info');
        console.log('saving to ' + info._filename);
        console.log(size);
        fileOutput = path.join(__dirname+'/../data/downloadedVideos', info._filename);
        video.pipe(fs.createWriteStream(fileOutput));
    });

    var pos = 0;
    video.on('data', function (data) {

        pos += data.length;
        // `size` should not be 0 here.
        if (size) {
            var percent = (pos / size * 100).toFixed(2);
            process.stdout.cursorTo(0);
            process.stdout.clearLine(1);
            process.stdout.write(percent + '%');
        }
    });

    video.on('end', function () {
        callback(fileOutput);
    });

}

// questo modulo coinciderà con la funzioen donloader
module.exports = downloader;