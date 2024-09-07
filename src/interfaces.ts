export interface TreeNodeLike<K = any, T = any> {
  readonly key: K;
  readonly data?: T;
  readonly children?: ReadonlyArray<TreeNodeLike<K, T>>;
}

export type ExtractExpr<T = any, K = T> = (item: T) => K;
