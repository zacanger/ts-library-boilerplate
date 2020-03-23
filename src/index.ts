export const id = <T>(a: T): T => a

export const keep = <T>(xs: Array<T>): Array<T> => xs.filter(id)
