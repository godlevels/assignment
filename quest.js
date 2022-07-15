let nums = [1, 5, 9]
let target = [10] 

var twoSum = function (nums, target) {
    let map = {}
    for ( let i = 0; i < nums.length; i++){
        let value = nums [i];
        let complementPair = target - value
        if (map[complementPair] !== undefined) {
            return [map[complementPair], i]
        } else {
            map[value] = i
        }
    }
}