// eslint-disable-next-line
/**
 * create special url when it has params. this is a `tag` function for `tagged template string`.
 *
 * @usage -
 * ```
 * urlWithParams`verification/${'artId'}`;
 * ```
 */
export default function urlWithParams(parts, ...keyArray) {
  return function urlParser(params) {
    const _params = params || {};
    return parts.reduce((accumulated, part, i) => {
      const val = _params[keyArray[i - 1]];
      delete _params[keyArray[i - 1]]; // params left then passed to post body;
      return accumulated + val + part;
    });
  };
}
