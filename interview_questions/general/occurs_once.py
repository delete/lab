# Find the only element in an array that only occurs once.
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


def occurs_once(array):
    dic = count_occurrences(array)
    s = sorted(dic.items(), key=itemgetter(1))
    return [i for i in s if i[1] == 1]


assert occurs_once([1, 2, 1, 2, 3, 5, 5]) == [(3, 1)]
assert occurs_once([1, 2, 1, 1, 3, 5, 5]) == [(2, 1), (3, 1)]
assert occurs_once([1, 2, 2, 1, 3, 5, 5, 3]) == []
