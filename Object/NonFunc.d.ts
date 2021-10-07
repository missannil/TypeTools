import { Key } from "../Any/Key";

/**
 * 非函数对象
 */
export type NonFunc = {
    [k: Key]: unknown;
    bind?: never;
    call?: never;
}
