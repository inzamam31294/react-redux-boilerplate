/* ========================================================================== *
 * Noop Utility
 *
 * ========================================================================== */

export function noop(): void {
  return;
}

export function noopPromise(): Promise<void> {
  return Promise.resolve();
}

export function noopPromiseArray(): Promise<Array<any>> {
  return Promise.resolve([]);
}
