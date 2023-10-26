#!/usr/bin/python3
def safe_print_integer(value):
    try:
        value_as_int = int(value)
        print("{:d}".format(value_as_int))
        return True
    except ValueError:
        return False
