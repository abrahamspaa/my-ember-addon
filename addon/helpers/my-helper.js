import { helper } from '@ember/component/helper';

export function myHelper(params) {
  const time = Date.parse(params[0]);
  const formatter = new Intl.DateTimeFormat(params[1] || 'en-US', params[2] || {});

  return formatter.format(time);
}

export default helper(myHelper);
