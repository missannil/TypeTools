import { Object as AnyObject } from './Object'
/**
 * 把对象中的函数类型值，变为函数返回类型值
 */
export type ReturnType<O extends AnyObject> = { [k in keyof O]: O[k] extends ((...args: any) => infer R) ? R : O[k] }




// import { Test } from "./src/TypeTools";
// import { ReturnType } from "./src/TypeTools/Object/ReturnType";
// const { checks, check } = Test

// checks([
//     check<ReturnType<{ddd:()=>number}>, {ddd:number}, Test.Pass>(),
//     check<ReturnType<{aaa:()=>string}>, {aaa:string}, Test.Pass>(),
//     check<ReturnType<{aaa:()=>string,bbb:number,c:'zhao'}>, {aaa:string,bbb:number,c:'zhao'}, Test.Pass>(),
// ])
