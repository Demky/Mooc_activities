# Find MAX VALUE of an array

lst =  [3, 5, 12, 1]

vMax = lst[0]
for i in lst:
	if i > vMax:
		vMax = i
print("vmax ->", vMax)

# find MAX INDEX of max value in an array

lst2 = [7, 1, 55, 3]

vMax = lst2[0]
for i, v in enumerate(lst2):
	if v > vMax:
		vMax = v
		iMax = i
print("vmax of lst2->", vMax)
print("ivmax of lst2->", iMax)
