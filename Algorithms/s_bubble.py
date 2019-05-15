# The bubble sort makes multiple passes through a list. 

# It compares adjacent items and exchanges those that are out of order.
# Each pass through the list places the next largest value in its proper place. 

# ------------------------------------
# I made the first algo when i was learning python; the one with the function is better to use

# lst = [919, 15, 1, 4, 56, 32, 25, 85, 10, 3]
# needSorting = True
# i2 = 0

# # With a flag
# while needSorting :
#     needSorting = False  
#     for c in range (0, len(lst)):
#         for i2 in range (0, len(lst) - 1 - c): # a sorted number is no more checked
#             if lst[i2] > lst[i2+1]:                    
#                 lst[i2], lst[i2+1] = lst[i2+1], lst[i2] #bubble'd
#                 needSorting = True                          
#                 print("sorting in progress -> {}".format(lst)) # numbers moving the their right place
        
# print("Sorted list : {}".format(lst))

# ------------------------------------
# FUNCTION (2019/04/12)
def bubbleSort(tab):
    for i in range(0, len(tab) - 1):   
        for j in range(0, len(tab) - 1 - i): # a sorted number is no more checked (i)
            if tab[j + 1] < tab[j]:
                tab[j+1], tab[j] = tab[j], tab[j+1]
    return tab

# exemple of use
print(bubbleSort([919, 15, 1, 4, 56, 32, 25, 85, 10, 3]))
print(bubbleSort([50, 5, 16]))