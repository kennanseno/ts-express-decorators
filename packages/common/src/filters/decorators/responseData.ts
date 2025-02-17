import {RESPONSE_DATA} from "../constants";
import {UseFilter} from "./useFilter";

/**
 *
 * @returns {function(Function, (string|symbol), number): void}
 * @decorator
 */
export function ResponseData(): Function {
  return UseFilter(RESPONSE_DATA);
}
