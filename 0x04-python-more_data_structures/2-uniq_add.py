#!/usr/bin/python3
def uniq_add(my_list=[]):
    unique_set = set()

    total = 0

    for item in my_list:
        if item not in unique_set:
            total += item
            unique_set.add(item)

    return total
