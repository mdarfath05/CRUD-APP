import {
  ServiceException as __ServiceException,
  ServiceExceptionOptions as __ServiceExceptionOptions,
} from "@smithy/smithy-client";
export { __ServiceExceptionOptions };
export { __ServiceException };
export declare class CognitoIdentityServiceException extends __ServiceException {
  constructor(options: __ServiceExceptionOptions);
}