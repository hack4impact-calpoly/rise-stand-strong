/**
 * Function that takes in an object and a list of allowedKeys and returns
 * a new object that only contains keys inside of allowed keys.
 *
 * @param {Object} obj
 * @param {List<String>} allowedKeys
 */
function protectKeys(obj, allowedKeys) {
   const protectedObject = {};

   Object.keys(obj).forEach((key) => {
      if (allowedKeys.includes(key)) {
         protectedObject[key] = obj[key];
      }
   });

   return protectedObject;
}

export default {
   protectKeys,
};
