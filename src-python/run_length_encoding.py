import re


"""See <https://www.codewars.com/kata/578bf2d8daa01a4ee8000046>"""


def encode(input: str) -> str:
    return re.sub(r"(\w)\1*",
                  lambda chars: chars.group(1) + str(len(chars.group())),
                  input)


def decode(input: str) -> str:
    return re.sub(r"\d+\w",
                  lambda chars: chars.group()[len(chars.group()) - 1] * int(re.match(r"\d+", chars.group()).group()),
                  input)
