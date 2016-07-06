# Find the most frequent integer in an array
from operator import itemgetter


def count_occurrences(array):
    # dict with {item: times}
    d = {}
    for item in array:
        if not d.get(item):
            d.update({item: 1})
        else:
            d[item] += 1
    return d


def monst_frequent(array):
    if not array:
        return None
    dic = count_occurrences(array)
    s = sorted(dic.items(), key=itemgetter(1))
    # return everybody that has value equals the last one
    return [i for i in s if i[1] == s[-1][1]]


assert monst_frequent([1, 2, 1, 2, 3, 5, 5, 5, 7]) == [(5, 3)]
assert monst_frequent([1, 2, 1, 1, 3, 5, 5]) == [(1, 3)]
assert monst_frequent([1, 2, 3, 4]) == [(1, 1), (2, 1), (3, 1), (4, 1)]
assert monst_frequent([]) is None
