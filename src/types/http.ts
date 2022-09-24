/* ========================================== *
 * Http Response Types
 *
 * ========================================== */

export type FetchResponse<P = any, R = Response> = [R, P];
export type FetchReturn<P = any, R = Response> = Promise<FetchResponse<P, R>>;

