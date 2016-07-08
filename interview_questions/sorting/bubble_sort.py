def bubble_sort(array):
    length = len(array)
    for i in range(0, length):
        for j in range(i, length):
            if array[i] > array[j]:
                array[i], array[j] = array[j], array[i]

    return array


assert bubble_sort([6, 2, 3, 1, 10]) == [1, 2, 3, 6, 10]
assert bubble_sort([1, 2, 3, 4]) == [1, 2, 3, 4]
assert bubble_sort([6, 4, 3, 2, 1]) == [1, 2, 3, 4, 6]
assert bubble_sort([]) == []
