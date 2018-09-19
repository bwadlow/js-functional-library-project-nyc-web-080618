fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      const newArr = Array.isArray(collection) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newArr.length; i++) {
        cb(newArr[i])
      }
      return collection
    },

    map: function(collection, cb) {
      if (!(Array.isArray(collection))) {
        collection = Object.values(collection)
      }
      newArr = []
      for (let i = 0; i < collection.length; i++) {
        newArr.push(cb(collection[i]))
      }
      return newArr
    },

    reduce: function(collection, cb, acc) {
      if (!(acc)) {
        acc = 0
      }

      for (let i = 0; i < collection.length; i++) {
        acc = cb(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, predicate) {

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let newArr = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArr.push(collection[i])
        }
      }
      return newArr
    },

    size: function(collection) {
      let result;
      if (!(Array.isArray(collection))) {
        collection = Object.values(collection)
      }
      for (let i = 0; i <= collection.length; i++) {
        result = i
      }
      return result
    },
    first: function(arr, num) {
      if (num === undefined) {
        return arr[0]
      } else {
        return arr.slice(0, num)
      }
    },

    last: function(arr, num) {
      if (num === undefined) {
        return arr[arr.length - 1]
      } else {
        return arr.slice(arr.length - num)
      }
    },

    compact: function(arr) {
      let newArr = []

      for (let i = 0; i < arr.length; i++) {
        if (!!(arr[i]) === true) {
          newArr.push(arr[i])
        }
      }
      return newArr
    },

    sortBy: function(arr, cb) {
      let newArr = [...arr]
      return newArr.sort(function(a, b) {
        return cb(a) - cb(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr = []) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx - 1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted = false, iteratee = false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      const arr = []
      for (let key in obj) {
        arr.push(key)
      }
      return arr
    },

    values: function(obj) {
      const arr = []
      for (let key in obj) {
        arr.push(obj[key])
      }
      return arr
    },

    functions: function(obj) {
      const arr = []
      for (let key in obj) {
        if (typeof obj[key] === 'function')
          arr.push(key)
      }
      return arr.sort()
    },

    giveMeMore: function() {
      return true
    },

  }
})()

fi.libraryMethod()