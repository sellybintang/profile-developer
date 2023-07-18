// SDK initialization

const ImageKit = require("imagekit");
require('dotenv').config()
const {
    publicKey,
    privateKey,
    urlEndpoint,
}=process.env
const imagekit = new ImageKit({
    publicKey : publicKey,
    privateKey : privateKey,
    urlEndpoint : urlEndpoint,
});