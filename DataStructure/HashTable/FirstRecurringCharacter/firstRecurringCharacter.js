
const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4]
const arr1=['A','B',"C",'D','B','A']

/**
 * @description first recurring characters
 * @param {*} arr 
 * @returns  recurring characters
 */
const firstRecurringCharacter = (arr) => {
    let map = new Map()
    for (let index = 0; index < arr.length; index++) {
        if (map.has(arr[index])) {
            return arr[index]
        }
        map.set(arr[index], index)
    }
}