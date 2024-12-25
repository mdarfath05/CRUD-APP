/**
 * @internal
 */
export type AwsSdkFeatures = Partial<{
    RESOURCE_MODEL: "A";
    WAITER: "B";
    PAGINATOR: "C";
    RETRY_MODE_LEGACY: "D";
    RETRY_MODE_STANDARD: "E";
    RETRY_MODE_ADAPTIVE: "F";
    S3_EXPRESS_BUCKET: "J";
    S3_ACCESS_GRANTS: "K";
    GZIP_REQUEST_COMPRESSION: "L";
    PROTOCOL_RPC_V2_CBOR: "M";
    ENDPOINT_OVERRIDE: "N";
    ACCOUNT_ID_ENDPOINT: "O";
    ACCOUNT_ID_MODE_PREFERRED: "P";
    ACCOUNT_ID_MODE_DISABLED: "Q";
    ACCOUNT_ID_MODE_REQUIRED: "R";
    SIGV4A_SIGNING: "S";
    FLEXIBLE_CHECKSUMS_REQ_CRC32: "U";
    FLEXIBLE_CHECKSUMS_REQ_CRC32C: "V";
    FLEXIBLE_CHECKSUMS_REQ_CRC64: "W";
    FLEXIBLE_CHECKSUMS_REQ_SHA1: "X";
    FLEXIBLE_CHECKSUMS_REQ_SHA256: "Y";
    FLEXIBLE_CHECKSUMS_REQ_WHEN_SUPPORTED: "Z";
    FLEXIBLE_CHECKSUMS_REQ_WHEN_REQUIRED: "a";
    FLEXIBLE_CHECKSUMS_RES_WHEN_SUPPORTED: "b";
    FLEXIBLE_CHECKSUMS_RES_WHEN_REQUIRED: "c";
    DDB_MAPPER: "d";
}> & AwsSdkCredentialsFeatures;
/**
 * @internal
 */
export type AwsSdkCredentialsFeatures = Partial<{
    RESOLVED_ACCOUNT_ID: "T";
    CREDENTIALS_CODE: "e";
    CREDENTIALS_ENV_VARS: "g";
    CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN: "h";
    CREDENTIALS_STS_ASSUME_ROLE: "i";
    CREDENTIALS_STS_ASSUME_ROLE_SAML: "j";
    CREDENTIALS_STS_ASSUME_ROLE_WEB_ID: "k";
    CREDENTIALS_STS_FEDERATION_TOKEN: "l";
    CREDENTIALS_STS_SESSION_TOKEN: "m";
    CREDENTIALS_PROFILE: "n";
    CREDENTIALS_PROFILE_SOURCE_PROFILE: "o";
    CREDENTIALS_PROFILE_NAMED_PROVIDER: "p";
    CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN: "q";
    CREDENTIALS_PROFILE_SSO: "r";
    CREDENTIALS_SSO: "s";
    CREDENTIALS_PROFILE_SSO_LEGACY: "t";
    CREDENTIALS_SSO_LEGACY: "u";
    CREDENTIALS_PROFILE_PROCESS: "v";
    CREDENTIALS_PROCESS: "w";
    CREDENTIALS_BOTO2_CONFIG_FILE: "x";
    CREDENTIALS_AWS_SDK_STORE: "y";
    CREDENTIALS_HTTP: "z";
    CREDENTIALS_IMDS: "0";
}>;
