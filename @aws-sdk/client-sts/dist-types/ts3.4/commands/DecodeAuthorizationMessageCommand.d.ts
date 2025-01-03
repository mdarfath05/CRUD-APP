import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  DecodeAuthorizationMessageRequest,
  DecodeAuthorizationMessageResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  STSClientResolvedConfig,
} from "../STSClient";
export { __MetadataBearer };
export { $Command };
export interface DecodeAuthorizationMessageCommandInput
  extends DecodeAuthorizationMessageRequest {}
export interface DecodeAuthorizationMessageCommandOutput
  extends DecodeAuthorizationMessageResponse,
    __MetadataBearer {}
declare const DecodeAuthorizationMessageCommand_base: {
  new (
    input: DecodeAuthorizationMessageCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DecodeAuthorizationMessageCommandInput,
    DecodeAuthorizationMessageCommandOutput,
    STSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DecodeAuthorizationMessageCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DecodeAuthorizationMessageCommandInput,
    DecodeAuthorizationMessageCommandOutput,
    STSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DecodeAuthorizationMessageCommand extends DecodeAuthorizationMessageCommand_base {
  protected static __types: {
    api: {
      input: DecodeAuthorizationMessageRequest;
      output: DecodeAuthorizationMessageResponse;
    };
    sdk: {
      input: DecodeAuthorizationMessageCommandInput;
      output: DecodeAuthorizationMessageCommandOutput;
    };
  };
}
