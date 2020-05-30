/**
 * @see https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
 * @param {Array<number>} nums_list - list of numbers
 * @return {string} - range of numbers
 */
function range_extraction (nums_list) {
    return nums_list.reduce((res, num, idx) => {
        if (nums_list[idx + 1] - num === 1) return res ? res : num.toString()
        let start_range = (res.match(/-?\d+$/) || [])[0]
        let prefix = res ? num - start_range === 1 ? "," : "-" : ""
        return idx !== nums_list.length - 1
            ? `${num == start_range ? res : res + prefix + num},${nums_list[idx + 1]}`
            : num == start_range ? res : res + prefix + num
    }, "")
}
