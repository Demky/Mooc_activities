
import sys
import math

# The while loop represents the game.
# Each iteration represents a turn of the game
# where you are given inputs (the heights of the mountains)
# and where you have to print an output (the index of the mountain to fire on)
# The inputs you are given are automatically updated according to your last actions.

# game loop
while True:
    lst =  []
    for i in range(8):
        mountain_h = int(input())  # represents the height of one mountain.
        lst.append(mountain_h)

    vMax = lst[0]
    iMax = 0
    for i, v in enumerate(lst):
        if v > vMax:
            iMax = i
            vMax = v
    print(iMax)
