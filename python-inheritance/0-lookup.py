#!/usr/bin/env python3
"""Lookup module.

Contains a function that returns the list of
available attributes and methods of an object
"""


def lookup(obj):
    """Returns the list of available attributes and methods of an object"""
    return [atributo for atributo in dir(obj)]
