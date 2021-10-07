
/**
 * @param K 指定对象字段
 * @returns 返回指定字段为never的对象
 */
export type Impossible<K extends Key> = {
    [P in K]: never;
};