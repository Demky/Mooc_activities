# Sort on the fly
# we ask user 3 numbers and we sort them as they arrive

lst = []

while len(lst) < 3:
  value = int(input("enter one number (sort on the fly) :\n"))
  i = 0

  while i < len(lst) and value > lst[i]:
    i += 1
  lst.insert(i, value)

print("here is the sorted array {}\n".format(lst))

