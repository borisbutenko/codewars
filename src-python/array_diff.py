from typing import List


def array_diff(nums1: List[int],
               nums2: List[int]) -> List[int]:
    """
    Your goal in this kata is to implement a difference function,
    which subtracts one list from another and returns the result.

    It should remove all values from list a, which are present in list b.
    # array_diff([1,2],[1]) == [2]

    If a value is present in b, all of its occurrences must be removed from the other:
    # array_diff([1,2,2,2,3],[2]) == [1,3]

    `Kata <https://www.codewars.com/kata/array-dot-diff/train/python>`

    :param nums1: array of numbers
    :param nums2: array of numbers
    :type nums1: list
    :type nums2: list
    :return list: diff between nums1 and nums2
    """
    output = []

    for n in nums1:
        if n not in nums2:
            output.append(n)

    return output
