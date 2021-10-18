import { IfEquals } from "./IfEquals";

/**
 * @param K 指定的key
 * @returns 返回指定字段为never的对象
 * @template
 * ```ts
 * type test0 = Impossible<'name'|'age'>
 * // type test0 = { name?: never;age?: never;} 
 * type test1 = Impossible<never>
 * // type test1 = unknown

 * ```
 */
export type Impossible<K> = IfEquals<K, never, unknown, {
    [P in K]?: never;
}>;



