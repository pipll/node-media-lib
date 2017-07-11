'use strict';

const VideoLib = require('../index');
const HLSPacketizer = VideoLib.HLSPacketizer;

const PacketizerSupport = require('./support/packetizer');

const MOVIE_FILE = './resources/boomstream.mp4';

describe('HLSPacketizer', function () {
    PacketizerSupport.shouldBeValidPacketizer(MOVIE_FILE, HLSPacketizer);
});
