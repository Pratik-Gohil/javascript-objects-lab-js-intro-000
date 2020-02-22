function updateObjectWithKeyAndValue(object, key, value) {
  obj = {key: value}
  return Object.assign(object, object[key] = value)
}
