/**
 * @public
 *
 * A model field with this type means that you may provide a JavaScript
 * object in lieu of a JSON string, and it will be serialized to JSON
 * automatically before being sent in a request.
 *
 * For responses, you will receive a "LazyJsonString", which is a boxed String object
 * with additional mixin methods.
 * To get the string value, call `.toString()`, or to get the JSON object value,
 * call `.deserializeJSON()` or parse it yourself.
 */
export type AutomaticJsonStringConversion = Parameters<typeof JSON.stringify>[0] | LazyJsonString;
/**
 * @internal
 *
 */
export interface LazyJsonString extends String {
    new (s: string): typeof LazyJsonString;
    /**
     * @returns the JSON parsing of the string value.
     */
    deserializeJSON(): any;
    /**
     * @returns the original string value rather than a JSON.stringified value.
     */
    toJSON(): string;
}
/**
 * @internal
 *
 * Extension of the native String class in the previous implementation
 * has negative global performance impact on method dispatch for strings,
 * and is generally discouraged.
 *
 * This current implementation may look strange, but is necessary to preserve the interface and
 * behavior of extending the String class.
 */
export declare function LazyJsonString(val: string): void;
export declare namespace LazyJsonString {
    var from: (object: any) => LazyJsonString;
    var fromObject: (object: any) => LazyJsonString;
}
