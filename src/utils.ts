export const isEmpty = (obj: any) => ['{}', '[]'].includes(JSON.stringify(obj))
export const isType = (obj: any, type: string) =>
  Object.prototype.toString.call(obj) === `[object ${type}]`
