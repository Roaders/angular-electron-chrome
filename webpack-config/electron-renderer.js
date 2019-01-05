
const path = require("path");

module.exports = {
    "target": "electron-renderer",
    "entry": {
        "other": [path.join(__dirname, "../src/ng/fs-access.ts")]
    }
};
