function updateObjectWithKeyAndValue(object, key, value) {
  var obj = object
  return Object.assign(obj, obj[key] = value)
}
