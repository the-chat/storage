class GlobalStorage<T extends object = {}> {
  constructor(private storage: T) {}

  set<V extends T[keyof T]>(k: keyof T, v: V) {
    this.storage[k] = v
  }

  rm(k: keyof T) {
    delete this.storage[k]
  }

  get(): T
  get<K extends keyof T>(k: K): T[K]
  get<K extends keyof T>(k?: K): T[K] | T {
    return k ? this.storage[k] : this.storage
  }
}

export default GlobalStorage
