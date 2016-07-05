def binary_search(array, num, start, end):
    i = (start + end) // 2

    if array[i] == num:
        return i
    elif start == end:
        return -1
    elif array[i] < num:
        return binary_search(array, num, i + 1, end)
    elif array[i] > num:
        return binary_search(array, num, start, i - 1)
