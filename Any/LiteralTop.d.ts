
/**
 * 返回输入的类型(字面量)顶层类型
 * @param A
 * @example
 * ```ts
 *  test0 = LiteralTop<'a'> // => string
 *  test1 = LiteralTop<123> // => number
 *  test2 = LiteralTop<'a' | 123> // => string | number
 * ```
 */
export type LiteralTop<A> = unknown extends A ? unknown : A extends null ? null
    : A extends undefined
    ? undefined
    : A extends bigint
    ? bigint
    : A extends symbol
    ? symbol
    : A extends number
    ? number
    : A extends string
    ? string
    : A extends boolean
    ? boolean
    : A extends unknown[]
    ? unknown[]
    : A extends { [k: string | number | symbol]: unknown }
    ? { [k: string | number | symbol]: unknown }
    : never

