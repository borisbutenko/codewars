from typing import List


def filter_list(lst: List[int or str]) -> List[int]:
    """
    In this kata you will create a function
    that takes a list of non-negative integers and strings
    and returns a new list with the strings filtered out.

    `Kata <https://www.codewars.com/kata/list-filtering/train/python>`

    :param lst:
    :type lst: list
    :return: list
    """
    return list(filter(lambda x: type(x) is int, lst))
