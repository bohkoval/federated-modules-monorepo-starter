export const swapObjectKeyValue = (obj: Record<string, string>) =>
  Object.keys(obj).reduce((ret, key) => {
    ret[obj[key]] = key;
    return ret;
  }, {} as Record<string, string>);
