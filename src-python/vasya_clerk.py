from typing import List


def tickets(lst: List[int]) -> str:
    """
    The new "Avengers" movie has just been released!
    There are a lot of people at the cinema box office standing in a huge line.
    Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.
    Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
    Can Vasya sell a ticket to each person and give the change if he initially has no money
    and sells the tickets strictly in the order people follow in the line?
    Return YES, if Vasya can sell a ticket to each person and give
    the change with the bills he has at hand at that moment.
    Otherwise return NO.

    :param lst: Array of "user" money
    :type lst: list
    :return str: YES or NO
    """
    a, b = 0, 0

    for i in lst:
        if i == 25:
            a += 1
        elif i == 50:
            a -= 1
            b += 1
        elif i == 100:
            if b >= 1:
                a -= 1
                b -= 1
            else:
                a -= 3

        if (a < 0) or (b < 0):
            return "NO"

    return "YES"
