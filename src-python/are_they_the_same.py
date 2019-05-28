from typing import List


def comp(lst1: List[int],
         lst2: List[int]) -> bool:
    """
    Given two arrays a and b write a function comp(a, b)
    (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements,
    with the same multiplicities.
    "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

    `Kata <https://www.codewars.com/kata/are-they-the-same/train/python>`

    :param lst1:
    :param lst2:
    :type lst1: list
    :type lst2: list
    :return: bool
    """

    if lst1 is None or lst2 is None:
        return False

    if len(lst1) != len(lst2):
        return False

    lst1 = list(map(lambda x: x * x, lst1))

    lst1.sort()
    lst2.sort()

    return lst1 == lst2
