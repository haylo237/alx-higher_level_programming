#!/usr/bin/python3
"""Defines an interger addition function"""

def add_integer(a, b=98):
    """Returns the sum of adding a and b

    Floats are typecasted into int before adding

    Raises:
        TypeError: If a or b is non-integer
    """
    if ((not isinstance(a, int) and not isinstance(a, float))):
        raise TypeError("a must be an integer")
    if ((not isinstance(b, int) and not isinstance(b, float))):
        raise TypeError("b must be an integer")
    return (int(a) + int(b))
