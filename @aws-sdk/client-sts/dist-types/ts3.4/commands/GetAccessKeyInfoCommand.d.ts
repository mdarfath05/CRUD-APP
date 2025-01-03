import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  GetAccessKeyInfoRequest,
  GetAccessKeyInfoResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  STSClientResolvedConfig,
} from "../STSClient";
export { __MetadataBearer };
export { $Command };
export interface GetAccessKeyInfoCommandInput extends GetAccessKeyInfoRequest {}
export interface GetAccessKeyInfoCommandOutput
  extends GetAccessKeyInfoResponse,
    __MetadataBearer {}
declare const GetAccessKeyInfoCommand_base: {
  new (
    input: GetAccessKeyInfoCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetAccessKeyInfoCommandInput,
    GetAccessKeyInfoCommandOutput,
    STSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetAccessKeyInfoCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetAccessKeyInfoCommandInput,
    GetAccessKeyInfoCommandOutput,
    STSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetAccessKeyInfoCommand extends GetAccessKeyInfoCommand_base {
  protected static __types: {
    api: {
      input: GetAccessKeyInfoRequest;
      output: GetAccessKeyInfoResponse;
    };
    sdk: {
      input: GetAccessKeyInfoCommandInput;
      output: GetAccessKeyInfoCommandOutput;
    };
  };
}
