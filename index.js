function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object)
  return Object.assign(obj, obj[key] = value)
}
