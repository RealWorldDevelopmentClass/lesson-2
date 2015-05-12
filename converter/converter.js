/**
 * Created by fre on 08/05/15.
 */
var ffmpeg =  require('fluent-ffmpeg');

var command = ffmpeg('/home/fre/Scrivania/lez2/downlaoder/T-ara - Number Nine - MV - 티아라-Seku9G1kT0c.m4a')
    .format('mp3')
    .save('/home/fre/Scrivania/lez2/downlaoder/T-ara - Number Nine - MV - 티아라-Seku9G1kT0c.mp3');
