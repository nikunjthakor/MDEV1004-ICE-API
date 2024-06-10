"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let remoteURI = (process.env.Mongo_uri);
let secret = (process.env.APP_SECRET);
exports.default = {
    remoteURI: remoteURI,
    secret: secret
};
//# sourceMappingURL=db.js.map