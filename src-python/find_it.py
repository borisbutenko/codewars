from typing import List


def find_it(lst: List[int]) -> int or None:
    """
    Given an array, find the int that appears an odd number of times.
    There will always be only one integer that appears an odd number of times.

    `Kata <https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python>`

    :param lst: Array of numbers
    :type lst: list
    :return int or None: counts number in lst or None
    """
    numbers = set(lst)

    for num in numbers:
        count = lst.count(num)
        if count % 2 != 0:
            return num

    return None
