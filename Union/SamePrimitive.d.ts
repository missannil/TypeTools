import { LiteralTop } from "../Any/LiteralTop";
import { ListOf } from "./ListOf";



/**
 * 判断联合类型中的各个类型是否同原始类型,有不同返回0,都相同返回1
 * @param U  Union
 * @returns [[boolean]]
 * @example
 * ```ts
 * type ddd =  SamePrimitive<1 | 2>  // => 1
 * type ddd1 = SamePrimitive<1 | '2'> //=> 0
 * type ddd2 = SamePrimitive<[1] | { xxx: any }>// => 0
 * type ddd3 = SamePrimitive<{ xxx: any } | { yyy: any }>// => 1
 * type ddd4 = SamePrimitive<[1] | [2]> //=> 1
 * type ddd5 = SamePrimitive<[1] | {}> //=> 输入{}有可能bug ,因为 Exclude<'xxx'|'yyy', {}> => never
 * type ddd6 = SamePrimitive<{ xx: 1, yy: 2 } | { zz: 3 }> // => 1 与key value 无关
 * ```
 */
export type SamePrimitive<U, TTag = any> = ListOf<U>['length'] extends 1 //判断是不是最后一个了
    //是最后一个的话
    ? ListOf<U>[0] extends TTag
        ? 1 //true
        : 0 //false
    //不是最后一个
    : ListOf<U> extends [infer F, ...any] //锁定第一个值类型F 用ListOf<T>[0]会导致和后面的ListOf<T>[0]有可能不一致,因为每次的ListOf<T>顺序可能不一样
        ? LiteralTop<F> extends TTag
    //递归传入新的TTag 即original<F>
            ? SamePrimitive<Exclude<U, F>, LiteralTop<F>>
            : 0
         : '你使用了空{}做为类型,找茬?'




