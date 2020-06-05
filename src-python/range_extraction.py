import re

from typing import List


def range_extraction(nums_list: List[int]) -> str:
    pattern: str = r"(-?\d+)$"
    length: int = len(nums_list)
    result: str = ""

    for i, num in enumerate(nums_list):
        out_of_range = i + 1 >= length

        if not out_of_range and nums_list[i + 1] - num == 1:
            if not result:
                result += str(num)
            continue

        start = re.search(pattern, result) and int(re.search(pattern, result).group(0))
        is_sequence = num == start
        prefix = ""

        if start and result:
            prefix = "," if num - start == 1 else "-"

        if out_of_range:
            result += prefix + str(num) if not is_sequence else ""
        else:
            if not is_sequence:
                result += prefix + str(num)
            result += "," + str(nums_list[i + 1])

    return result

#  '-6,-3-1,3-5,7-11,14,15,17-20'
# print(range_extraction([-6,-3,-2,-1,0,1,3,4,5,7,8,9,10,11,14,15,17,18,19,20]))

#  '-3--1,2,10,15,16,18-20'
# print(range_extraction([-3,-2,-1,2,10,15,16,18,19,20]))

#  '-86,-83,-81,-80,-78,-76,-74,-73,-70,-67,-66,-64,-61--58,-56,-53,-51,-49,-47,-44,-43,-41,-38,-35--33,-30'
print(range_extraction([-86, -83, -81]))


# , -80, -78, -76, -74, -73, -70, -67, -66, -64, -61, -60, -59, -58, -56, -53, -51, -49, -47, -44, -43, -41, -38, -35, -34, -33, -30
