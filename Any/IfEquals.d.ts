
import { Equals } from "./Equals";
/**
 * T 若与 TCompare 类型相同  返回Then 否则返回Else
 * @param T
 * @param TCompare (可以是联合类型)
 * @return Then or Else
 * @test
 * ```ts
  import { Test } from "./src/TypeTools";
  const { checks, check } = Test
  checks([
      check<IfEquals<never, never>, unknown, Test.Pass>(),
      check<IfEquals<unknown, unknown>, unknown, Test.Pass>(),
      check<IfEquals<{}, {}>, unknown, Test.Pass>(),
      check<IfEquals<{}, {}, 1>, 1, Test.Pass>(),
      check<IfEquals<{}, never, 1, 2>, 2, Test.Pass>(),
      check<IfEquals<{}, {} | { xxx: string }>, unknown, Test.Pass>(),
      check<IfEquals<{}, {} | { xxx: string }, 1>, 1, Test.Pass>(),
  ])
 * ```
 */
export declare type IfEquals<T, TCompare, Then = unknown, Else = T> = [TCompare] extends [never]
    ? [T] extends [never] ? Then : Else
    : unknown extends (TCompare extends unknown ? (Equals<NonNullable<T>, TCompare> extends 1 ? unknown : "无所谓") : never)
    ? Then
    : Else;
