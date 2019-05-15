# We act as if the elements to be sorted were given one by one,

# The first constituent element, by itself, a sorted list of length 1.
# The second element is then put in order to constitute a sorted list of length 2,
# Then we put the third element to have a sorted list of length 3 and so on ...

# The principle of insertion sorting is therefore to insert the (n)th element 
# in the right place at the (n) iteration.

lst = [15, 1, 53, 5, 56, 32, 25, 919, 85, 6]
lstTemp = []

i = 0
for i in range(0, len(lst)) :
    counter = 0          # initial counter at each loop
    while counter < len(lstTemp) and lstTemp[counter] < lst[i] :
        counter += 1

    lstTemp.insert (counter, lst[i])
    print("sorting in progress -> {}".format(lstTemp))


print("## sorted list {}".format(lstTemp))