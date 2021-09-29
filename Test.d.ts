import { Equals } from './Any/Equals';
import { Boolean } from './Boolean/_Internal';
/**
 * Test should pass
 */
export declare type Pass = 1;
/**
 * Test should fail
 */
export declare type Fail = 0;
/**
 * Check or test the validity of a type
 * @param debug to debug with parameter hints (`ctrl+p`, `ctrl+shift+space`)
 * @example
 * ```ts
 * // see in `tst` folder
 * ```
 */
export declare function check<Type, Expect, Outcome extends Boolean>(debug?: Type): Equals<Equals<Type, Expect>, Outcome>;
/**
 * Validates a batch of [[check]]
 * @param checks a batch of [[check]]
 * @example
 * ```ts
 * // see in `tst` folder
 * ```
 */
export declare function checks(checks: 1[]): void;


// import { Test } from "./src/TypeTools";
// const { checks, check } = Test
// checks([
//     check<IfEquals<never, never>, unknown, Test.Pass>(),
//     check<IfEquals<unknown, unknown>, unknown, Test.Pass>(),
//     check<IfEquals<{}, {}>, unknown, Test.Pass>(),
//     check<IfEquals<{}, {}, 1>, 1, Test.Pass>(),
//     check<IfEquals<{}, never, 1, 2>, 2, Test.Pass>(),
//     check<IfEquals<{}, {} | { xxx: string }>, unknown, Test.Pass>(),
//     check<IfEquals<{}, {} | { xxx: string }, 1>, 1, Test.Pass>(),
// ])