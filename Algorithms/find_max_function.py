def findMax(tab):
	vMax = tab[0]
	for i in tab:
		if i > vMax:
			vMax = i
	return vMax

# exemple of use
print(findMax([3, 12, 5]))
print(findMax([56, 19, 365]))