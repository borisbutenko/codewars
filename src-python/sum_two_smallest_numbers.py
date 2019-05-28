from typing import List


def sum_two_smallest_numbers(numbers: List) -> int:
    """
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers.
    No floats or empty arrays will be passed.
    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

    `Kata <https://www.codewars.com/kata/sum-of-two-lowest-positive-integers/train/python>`

    :param numbers: array of numbers
    :type numbers: list
    :return int: the sum of the two lowest positive numbers
    """
    numbers.sort()
    return numbers[0] + numbers[1]
