#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
if (number < 0):
    nb = ((-number) % 10) * -1
else:
    nb = number % 10
print(f"Last digit of {number} is {nb} and is", end='')
if (nb > 5):
    print(" greater than 5")
elif (nb == 0):
    print(" 0")
else:
    print(" less than 6 and not 0")
