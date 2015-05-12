/**
 * Created by fre on 08/05/15.
 */
var ffmpeg = require('fluent-ffmpeg');
var path = require('path');


var converter = function (videoFile, callback) {
    var basename = path.basename(videoFile);
    var fileOutput = path.join(__dirname + '/../data/convertedMp3', basename + '.mp3');

    ffmpeg(videoFile)
        .format('mp3')
        .save(fileOutput)
        .on('end', function () {
            callback(fileOutput);
        });
    return fileOutput;
};


module.exports = converter;


