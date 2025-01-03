"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromHttp = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./createCredentialChain"), exports);
tslib_1.__exportStar(require("./fromCognitoIdentity"), exports);
tslib_1.__exportStar(require("./fromCognitoIdentityPool"), exports);
tslib_1.__exportStar(require("./fromContainerMetadata"), exports);
var credential_provider_http_1 = require("@aws-sdk/credential-provider-http");
Object.defineProperty(exports, "fromHttp", { enumerable: true, get: function () { return credential_provider_http_1.fromHttp; } });
tslib_1.__exportStar(require("./fromEnv"), exports);
tslib_1.__exportStar(require("./fromIni"), exports);
tslib_1.__exportStar(require("./fromInstanceMetadata"), exports);
tslib_1.__exportStar(require("./fromNodeProviderChain"), exports);
tslib_1.__exportStar(require("./fromProcess"), exports);
tslib_1.__exportStar(require("./fromSSO"), exports);
tslib_1.__exportStar(require("./fromTemporaryCredentials"), exports);
tslib_1.__exportStar(require("./fromTokenFile"), exports);
tslib_1.__exportStar(require("./fromWebToken"), exports);
