"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var ElectronBuilder = /** @class */ (function () {
    function ElectronBuilder(context) {
        this.context = context;
    }
    ElectronBuilder.prototype.run = function (builderConfig) {
        console.log("electron build from js file")
        return rxjs_1.of({ success: true });
    };
    return ElectronBuilder;
}());
exports.default = ElectronBuilder;
