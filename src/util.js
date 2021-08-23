import { memoize } from './lodash';
const getEnvironmentTypeMemo = memoize((url) => {});

const getEnvironmentType = (url = window.location.href) =>
  getEnvironmentTypeMemo(url);

export {
  getEnvironmentType,
};
